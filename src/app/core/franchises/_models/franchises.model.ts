import {StockModel} from './stock.model';
import {StatusModel} from './status.model';
import {User} from '../../auth/_models/user.models';

export class FranchisesModel {
  dateCreate: string;
  detailedDescription: string;
  projectionsDescription: string;
  shortDescription: string;
  name: string;
  payback: number;
  profitability: number;
  picture: string;
  purchasedShares: number;
  investors: User[];
  _id: string;
  stocks: number;
  adminStocks: number;
  stock: StockModel;
  status: StatusModel;
  progress: number;
  allCost: number;
  totalBuy: number;
  totalBuyFormat: string;
  allCostRub: number;
  remainCost: number;
  remainStocks: number;
  formatRemainCost: string;
  formatCost: string;
  formatCostRub: string;
  color: string;
  adresse: string;
  imgList: String[];
  imgs: any[];
  constructor(item: any = clearModel) {
    // this.dateCreate = item.dateCreate;
    this.detailedDescription = item.detailedDescription;
    this.shortDescription = item.shortDescription;
    this.projectionsDescription = item.projectionsDescription;
    this.name = item.name;
    this.investors = item.investors;
    this.payback = item.payback;
    this.profitability = item.profitability;
    this.picture = item.picture;
    this.imgList = [];
    this.imgs = item.imgs;
    this.purchasedShares = item.purchasedShares;
    this._id = item._id;
    this.stocks = item.stocks;
    this.remainStocks = item.stocks;
    this.adminStocks = item.adminStocks;
    this.stock = item.stock;
    this.status = item.status;
    this.adresse = 'Москва';
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
    this.dateCreate = data.toLocaleDateString('ru');
  }
  private saveCost() {
    if ( this.name === 'COLIZEUM' ) {
      this.profitability = 26;
      this.stocks = 3482;
    }
    if ( this.stock ) {
      this.allCost = +(this.stock.price * this.stocks).toFixed(2);
    } else {
      this.allCost = 0;
    }
    this.allCostRub = this.allCost * 77;
    this.formatCost = (this.allCost / 100).toLocaleString();
    this.formatCostRub = (this.allCostRub / 100).toLocaleString();
  }
  private saveProgress() {
    if ( this.stock ) {
      if ( this.adminStocks > 0 ) {
        this.purchasedShares += this.adminStocks;
        // this.purchasedShares += 4000;
      }
      this.progress = (this.stock.price * this.purchasedShares) / (this.allCost / 100) | 0;
      this.totalBuy = this.stock.price * this.purchasedShares;
    } else {
      this.progress = 0;
      this.totalBuy = 0;
    }
    this.remainStocks -= this.purchasedShares;
    this.totalBuyFormat = (this.totalBuy / 100).toLocaleString();
    this.remainCost = (this.allCost - this.totalBuy) / 100;
    this.formatRemainCost = this.remainCost.toLocaleString();
  }
}

const clearModel = {
  dateCreate: 0,
  detailedDescription: '',
  shortDescription: '',
  projectionsDescription: '',
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
