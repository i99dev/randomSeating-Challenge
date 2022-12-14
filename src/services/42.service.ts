import labMaps from '@/utils/campus';
import { HttpException } from '@exceptions/HttpException';
import { isEmpty } from '@utils/util';
import axios from 'axios';
import _ from 'lodash';

class CampusServiec {
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
    //httpexception
    if (isEmpty(RandomSeat)) {
      throw new HttpException(404, 'No seat found');
    }
    return lab.randomSeat(['lab1', 'lab2'], RandomSeat);
  }
}

export default CampusServiec;
