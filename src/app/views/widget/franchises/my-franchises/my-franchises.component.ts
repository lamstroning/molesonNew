import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-franchises',
  templateUrl: './my-franchises.component.html',
  styleUrls: ['./my-franchises.component.scss']
})
export class MyFranchisesComponent implements OnInit {
  franchises: Franchises[] = [
    {
      name: 'Colizium',
      adresse: 'Москва, улица Крылатские Холмы, 26к2',
      status: 'Сбор инвестиций',
      balance: 320,
      progress: 20
    },
    {
      name: 'DoDo pizza',
      adresse: 'Москва, улица Крылатские Холмы, 26к2',
      status: 'Запуск',
      balance: 230,
      progress: 100
    },
    {
      name: 'Burger King',
      adresse: 'Москва, улица Крылатские Холмы, 26к2',
      status: 'В работе',
      balance: 120,
      progress: 100
    },
    {
      name: 'Доброцен',
      adresse: 'Москва, улица Крылатские Холмы, 26к2',
      status: 'В работе',
      balance: 142,
      progress: 100
    }
  ];
  constructor() { }

  ngOnInit() {
  }
  getColor(status: string) {
    if (status === 'Сбор инвестиций' || status === 'Запуск') {
      return ('#ff9f19');
    } else if (status === 'В работе') {
      return ('#31B984');
    }
}
}

interface Franchises {
  name: string;
  adresse: string;
  status: string;
  balance: number;
  progress: number;
}
