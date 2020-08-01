import {User} from '../../auth/_models/user.models';

export class PartnersList {
  idReferral: string;
  idUser: string;
  link: User;
  lvl: number;
  constructor(item?: any) {
    this.idReferral = item.idReferral;
    this.idUser = item.idUser;
    this.link = item.link;
    this.lvl = item.lvl;
  }
}
