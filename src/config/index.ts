import { config } from 'dotenv';
config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

const int = (val: string | undefined, num: number): number => (val ? (isNaN(parseInt(val)) ? num : parseInt(val)) : num);
const bool = (val: string | undefined, bool: boolean): boolean => (val == null ? bool : val == 'true');

export const CREDENTIALS = process.env.CREDENTIALS === 'true';
export const { NODE_ENV, PORT, SECRET_KEY, LOG_FORMAT, LOG_DIR, ORIGIN } = process.env;
export const {
  EMAIL_NAME,
  EMAIL_FROM,
  EMAIL_RETRIES,
  EMAIL_SES_ACCESS_KEY_ID,
  EMAIL_SES_SECRET_ACCESS_KEY,
  EMAIL_SES_REGION,
  EMAIL_TRANSPORT_HOST,
  EMAIL_TRANSPORT_PORT,
  EMAIL_TRANSPORT_SECURE,
  EMAIL_TRANSPORT_AUTH_USER,
  EMAIL_TRANSPORT_AUTH_PASS,
} = process.env;
