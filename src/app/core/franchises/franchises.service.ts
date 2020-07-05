import { Injectable } from '@angular/core';
import {FranchisesModel} from './_models/franchises.model';

@Injectable({providedIn: 'root'})
export class FranchisesService {
  franchisesList: FranchisesModel[] = [];
  catalogBlock = true;
  filterName: string;
  filterType: string;
  constructor() {
    this.reloadList();
  }
  reloadList() {
    this.franchisesList = [];
    for (let i = 0; i <= 45; i++) {
      if (i % 2 === 0) {
        this.franchisesList.push(new FranchisesModel(franchises1, i));
      } else if (i % 3 === 0) {
        this.franchisesList.push(new FranchisesModel(franchises2, i));
      } else {
        this.franchisesList.push(new FranchisesModel(franchises3, i));
      }
    }
  }
  filterFranchises() {
    this.reloadList();
    if (!this.filterName && !this.filterType) {
      return ;
    }
    this.franchisesList = this.franchisesList.filter(item => {
      if (!this.filterType) {
        return item;
      }
      return item.status === this.filterType;
    });
    this.franchisesList = this.franchisesList.filter(item => {
      if (!this.filterName) {
        return item;
      }
      return item.name.toLocaleLowerCase().indexOf(this.filterName.toLocaleLowerCase()) !== -1;
    });
  }
}

const franchises1: FranchisesModel =   {
  name: 'Colizium',
  ico: '/assets/img/franchises/col-ico.png',
  img: '/assets/img/franchises/col.png',
  imgList: [
    '/assets/img/franchises/imglist/black1.png',
    '/assets/img/franchises/imglist/black2.png',
    '/assets/img/franchises/imglist/black3.png',
    '/assets/img/franchises/imglist/black4.png'
  ],
  adresse: 'Москва, улица Крылатские Холмы, 26к2',
  status: 'Сбор инвестиций',
  balance: 320,
  progress: 20,
  precent: 22,
  allCost: 6966336,
  allCostDollars: 100000,
  id: 0,
  color: '#FF9F19',
  income: 24,
  divideCost: 100,
  participant: 45
};
const franchises2: FranchisesModel =   {
  name: 'DoDo pizza',
  ico: '/assets/img/franchises/dodo-ico.png',
  img: '/assets/img/franchises/dodo.png',
  imgList: [
    '/assets/img/franchises/imglist/black1.png',
    '/assets/img/franchises/imglist/black2.png',
    '/assets/img/franchises/imglist/black3.png',
    '/assets/img/franchises/imglist/black4.png',
  ],
  adresse: 'Москва, улица Крылатские Холмы, 26к2',
  status: 'Запуск',
  balance: 230,
  progress: 100,
  precent: 22,
  allCost: 6966336,
  allCostDollars: 100000,
  id: 0,
  color: '#31B984',
  income: 24,
  divideCost: 100,
  participant: 45
};
const franchises3: FranchisesModel =   {
    name: 'Black Star Wear',
    ico: '/assets/img/franchises/black-ico.png',
    img: '/assets/img/franchises/black.png',
    imgList: [
      '/assets/img/franchises/imglist/black1.png',
      '/assets/img/franchises/imglist/black2.png',
      '/assets/img/franchises/imglist/black3.png',
      '/assets/img/franchises/imglist/black4.png'
    ],
    adresse: 'Москва, улица Крылатские Холмы, 26к2',
    status: 'В работе',
    balance: 120,
    progress: 100,
    precent: 24,
    allCost: 6966336,
    allCostDollars: 100000,
    id: 0,
    color: '#31B984',
    income: 24,
    divideCost: 100,
    participant: 45
};
