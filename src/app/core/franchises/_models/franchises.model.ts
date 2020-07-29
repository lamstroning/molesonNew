export class FranchisesModel {
  name: string;
  id: number;
  adresse: string;
  status: string;
  color: string;
  income: number;
  divideCost: number;
  balance: number;
  progress: number;
  img: string;
  imgList: string[];
  ico: string;
  precent: number;
  allCost: number;
  allCostDollars: number;
  participant: number;
  shortDesc: string;
  detailDesc: string;
  advantages: string[];
  companyHistory: string;
  constructor(model: FranchisesModel = cleaerModel, id = 0) {
    this.name = model.name;
    this.id = id;
    this.adresse = model.adresse;
    this.status = model.status;
    this.balance = model.balance;
    this.progress = model.progress;
    this.color = model.color;
    this.income = model.income;
    this.divideCost = model.divideCost;
    this.participant = model.participant;
    this.img = model.img;
    this.imgList = model.imgList;
    this.ico = model.ico;
    this.precent = model.precent;
    this.allCost = model.allCost;
    this.allCostDollars = model.allCostDollars;
    this.shortDesc = model.shortDesc;
    this.detailDesc = model.detailDesc;
    this.advantages = model.advantages;
    this.companyHistory = model.companyHistory;
  }
}

const cleaerModel = {
  name: '',
  id: 0,
  adresse: '',
  status: '',
  balance: 0,
  progress: 0,
  img: '',
  imgList: [],
  ico: '',
  precent: 0,
  allCost: 0,
  allCostDollars: 0,
  color: '',
  income: 0,
  divideCost: 0,
  participant: 0,
  shortDesc: '',
  detailDesc: '',
  advantages: [],
  companyHistory: ''
};
