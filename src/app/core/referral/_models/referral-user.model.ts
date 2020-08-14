
export class ReferralUserModel {
  id: string;
  email: string;
  fullName: string;
  username: string;
  constructor(item) {
    this.id = item._id;
    this.email = item.email;
    this.fullName = item.fullName;
    this.username = item.username;
  }
}
