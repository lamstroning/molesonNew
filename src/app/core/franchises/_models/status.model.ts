export class StatusModel {
  _id: string;
  title: string;
  description: string;
  constructor(item: any = clearStatus) {
    this._id = item._id;
    this.title = item.title;
    this.description = item.description;
  }
}

const clearStatus = {
 _id: '',
 title: '',
 description: ''
};
