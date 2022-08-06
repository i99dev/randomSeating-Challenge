import { Controller, Param, Get, HeaderParam } from 'routing-controllers';
import { OpenAPI } from 'routing-controllers-openapi';
import CampusServiec from '@services/42.service';
import { HttpException } from '@/exceptions/HttpException';

@Controller()
export class CampusController {
  public userService = new CampusServiec();

  @Get('/exam/:id')
  @OpenAPI({
    summary: 'check users and random for him seat',
  })
  async getUserById(@Param('id') exam_id: string, @HeaderParam('authorization') token: string): Promise<any> {
    if (!token) {
      throw new HttpException(401, 'Unauthorized');
    }
    const findOneUserData: any = await this.userService.examRandomSeat(exam_id);
    return { data: findOneUserData, message: 'Random seat Done' };
  }
}
