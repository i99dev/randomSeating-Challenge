import { hash } from 'bcrypt';
import { CreateUserDto } from '@dtos/users.dto';
import { HttpException } from '@exceptions/HttpException';
import { User } from '@interfaces/users.interface';
import userModel from '@models/users.model';
import { isEmpty } from '@utils/util';
import axios from 'axios';

class CampusServiec {
  public async findAllUser(): Promise<User[]> {
    const users: User[] = userModel;
    return users;
  }

  //get user loction
  public async examRandomSeat(exam_id: string): Promise<User> {
    // step One: get exam info [location,nbr_subscribers, name_exam]
    // step Two : get lab info .
    const { data } = await axios.get(`/v2/events/${exam_id}/events_users`);
    return data;
  }
}

export default CampusServiec;
