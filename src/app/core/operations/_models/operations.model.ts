export class OperationsModel {
  sum: number;
  date: string;
  date_month_title: string;
  quantity: number;
  _id: string;
  user: string;
  status: string;
  typeAction: string;
  typeActionRaw: string;
  type: boolean;
  ico: string;
  typeIco: string;
  constructor(item: any) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    if (item.date) {
      const fullDate = new Date(item.date);
      this.date = `${fullDate.getDate()}.${fullDate.getMonth()}.${fullDate.getFullYear()}`;
      this.date_month_title = fullDate.toLocaleDateString('ru', options);
    }
    this.sum = item.sum;
    // this.typeAction = item.typeAction;
    this.quantity = item.quantity;
    this._id = item._id;
    this.user = item.user;
    this.typeIco = 'svg';
    this.typeActionRaw = item.typeAction;

    if (item.typeAction === 'input') {
      this.status = '#31b984';
      this.typeAction = 'Пополнение';
      this.ico = '/assets/svg-icon/operation-ico/card-up-balance.svg';
      this.type = true;
    } else {
      this.typeAction = 'Вывод';
      this.type = false;
      this.ico = '/assets/svg-icon/operation-ico/card-down-balance.svg';
      this.status = '#E74B4B';
    }
  }
}
