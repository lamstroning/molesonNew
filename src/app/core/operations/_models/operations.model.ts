export class OperationsModel {
  sum: number;
  date: string;
  quantity: number;
  _id: string;
  user: string;
  status: string;
  typeAction: string;
  constructor(item: any) {
    if (item.date) {
      const fullDate = new Date(item.date);
      this.date = `${fullDate.getDate()}.${fullDate.getMonth()}.${fullDate.getFullYear()}`;
    }
    this.sum = item.sum;
    // this.typeAction = item.typeAction;
    this.quantity = item.quantity;
    this._id = item._id;
    this.user = item.user;
    if (item.typeAction === 'input') {
      this.status = '#31b984';
      this.typeAction = 'Пополненеи';
    } else {
      this.typeAction = 'Вывод';
      this.status = '#E74B4B';
    }
  }
}
