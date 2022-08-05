import { hash } from 'bcrypt';
import { CreateUserDto } from '@dtos/users.dto';
import { HttpException } from '@exceptions/HttpException';
import { User } from '@interfaces/users.interface';
import userModel from '@models/users.model';
import { isEmpty } from '@utils/util';
import axios from 'axios';
import _ from 'lodash';
import labMaps from '@/utils/campus';

class CampusServiec {
  public async findAllUser(): Promise<User[]> {
    const users: User[] = userModel;
    return users;
  }

  //get user loction
  public async examRandomSeat(exam_id: string): Promise<any> {
    const lab = new labMaps();
    const { data } = await axios.get(`/v2/events/${exam_id}/events_users`);
    const RandomSeat: any[] = _.map(data, (user: any) => {
      return {
        userId: user.user.login,
        email: user.user.email,
        lastSeat: user.user.location,
        newSeat: null,
      };
    });
    return lab.randomSeat(['lab1', 'lab2'], RandomSeat);
  }
}

export default CampusServiec;
