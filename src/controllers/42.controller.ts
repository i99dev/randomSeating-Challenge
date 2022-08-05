import { Controller, Param, Body, Get, Post, Put, Delete, HttpCode, UseBefore, Req } from 'routing-controllers';
import { OpenAPI } from 'routing-controllers-openapi';
import { User } from '@interfaces/users.interface';
import CampusServiec from '@services/42.service';

@Controller()
export class CampusController {
  public userService = new CampusServiec();

  @Get('/exam/:id')
  @OpenAPI({ summary: 'check users and random for him seat' })
  async getUserById(@Param('id') exam_id: string): Promise<any> {
    const findOneUserData: User = await this.userService.examRandomSeat(exam_id);
    return { data: findOneUserData, message: 'Random seat Done' };
  }
}
