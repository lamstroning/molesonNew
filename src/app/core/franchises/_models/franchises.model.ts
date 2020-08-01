import {StockModel} from './stock.model';
import {StatusModel} from './status.model';
import {User} from '../../auth/_models/user.models';

export class FranchisesModel {
  dateCreate: string;
  detailedDescription: string;
  shortDescription: string;
  name: string;
  payback: number;
  profitability: number;
  picture: string;
  purchasedShares: number;
  investors: User[];
  _id: string;
  stocks: number;
  stock: StockModel;
  status: StatusModel;
  progress: number;
  allCost: number;
  allCostRub: number;
  formatCost: string;
  formatCostRub: string;
  color: string;
  constructor(item: any = clearModel) {
    // this.dateCreate = item.dateCreate;
    this.detailedDescription = item.detailedDescription;
    this.shortDescription = item.shortDescription;
    this.name = item.name;
    this.investors = item.investors;
    this.payback = item.payback;
    this.profitability = item.profitability;
    this.picture = item.picture;
    this.purchasedShares = item.purchasedShares;
    this._id = item._id;
    this.stocks = item.stocks;
    this.stock = item.stock;
    this.status = item.status;
    this.saveCost();
    this.saveProgress();
    this.saveDate(item.dateCreate);
    if (item.status) {
      this.saveColor(item.status.title);
    }
  }
  private saveColor(status: string) {
    if (status === 'в работе') {
      this.color = '#31B984';
    } else {
      this.color = '#FF9F19';
    }
  }
  private saveDate(time: number) {
    const data = new Date(time);
    this.dateCreate = data.getDate() + '.' + data.getMonth() + '.' + data.getFullYear();
  }
  private saveCost() {
    this.allCost = +(this.stock.price * this.stocks).toFixed(2);
    this.allCostRub = this.allCost * 70;
    this.formatCost = (this.allCost / 100).toLocaleString();
    this.formatCostRub = (this.allCostRub / 100).toLocaleString();
  }
  private saveProgress() {
    this.progress = (this.stock.price * this.purchasedShares) / (this.allCost / 100) | 0;
  }
}

const clearModel = {
  dateCreate: 0,
  detailedDescription: '',
  shortDescription: '',
  name: '',
  payback: 0,
  profitability: 0,
  picture: '',
  purchasedShares: 0,
  _id: '',
  stocks: 0,
  stock: new StockModel(),
  status: new StockModel(),
};
