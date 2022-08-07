import { SES } from 'aws-sdk';
import { promises as fs } from 'fs';
import mem from 'mem';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import SESTransport from 'nodemailer/lib/ses-transport';
import PQueue from 'p-queue';
import pRetry from 'p-retry';
import { join } from 'path';
import { logger } from '@/utils/logger';
import { Configuration } from '../interfaces/configuration.interface';
import { MailOptions } from '../interfaces/mail.interface';
import { EMAIL_FROM, EMAIL_NAME, EMAIL_RETRIES, EMAIL_SES_ACCESS_KEY_ID, EMAIL_SES_REGION, EMAIL_SES_SECRET_ACCESS_KEY } from '../config/index';

export class MailService {
  private transport: Mail;
  private config: Configuration['email'];
  private queue = new PQueue({ concurrency: 1 });
  private readTemplate = mem(this.readTemplateUnmemoized);

  constructor() {
    if (EMAIL_SES_ACCESS_KEY_ID)
      this.transport = nodemailer.createTransport({
        SES: new SES({
          apiVersion: '2010-12-01',
          accessKeyId: EMAIL_SES_ACCESS_KEY_ID,
          secretAccessKey: EMAIL_SES_SECRET_ACCESS_KEY,
          region: EMAIL_SES_REGION,
        }),
      } as SESTransport.Options);
    else
      this.transport = nodemailer.createTransport({
        host: this.config.transport?.host,
        port: this.config.transport?.port,
        secure: this.config.transport?.secure,
        auth: {
          user: this.config.transport?.auth.user,
          pass: this.config.transport?.auth.pass,
        },
      });
  }

  send(options: Mail.Options & MailOptions) {
    this.queue.add(() =>
      pRetry(
        () =>
          this.sendMail({
            ...options,
            from: options.from ?? `"${EMAIL_NAME}" <${EMAIL_FROM}>`,
          }),
        {
          retries: EMAIL_RETRIES ?? 3,
          onFailedAttempt: error => {
            logger.error(`Mail to ${options.to} failed, retrying (${error.retriesLeft} attempts left)`, error.name);
          },
        },
      ),
    );
  }

  private async sendMail(options: Mail.Options & MailOptions) {
    return this.transport.sendMail(options);
  }

  private async readTemplateUnmemoized(name: string) {
    if (!name.endsWith('.html')) name = `${name}.md`;
    return fs.readFile(join('.', 'src', 'templates', name), 'utf8');
  }
}
