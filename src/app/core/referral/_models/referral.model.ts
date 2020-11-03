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

export class PartnersStat {
  moneyInStructure: number;
  referralMoney: number;
  registrations: number;
  registrationsByLink: number;
  constructor(item?: any) {
    this.moneyInStructure = item.moneyInStructure;
    this.referralMoney = item.referralMoney;
    this.registrations = item.registrations;
    this.registrationsByLink = item.registrationsByLink;
  }
}
