import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-franchises',
  templateUrl: './top-franchises.component.html',
  styleUrls: ['./top-franchises.component.scss']
})
export class TopFranchisesComponent implements OnInit {
  franchises: Franchises[] = [
    {
      name: 'Colizium',
      adresse: 'Москва, улица Крылатские Холмы, 26к2',
      img: '/assets/img/franchises/col.png',
      ico: '/assets/img/franchises/col-ico.png',
      status: 'Сбор инвестиций',
      balance: 320,
      progress: 20
    },
    {
      name: 'DoDo pizza',
      adresse: 'Москва, улица Крылатские Холмы, 26к2',
      status: 'Запуск',
      img: '/assets/img/franchises/dodo.png',
      ico: '/assets/img/franchises/dodo-ico.png',
      balance: 230,
      progress: 100
    },
    {
      name: 'Black Star Wear',
      adresse: 'Москва, улица Крылатские Холмы, 26к2',
      status: 'В работе',
      img: '/assets/img/franchises/black.png',
      ico: '/assets/img/franchises/black-ico.png',
      balance: 142,
      progress: 100
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}

interface Franchises {
  name: string;
  adresse: string;
  status: string;
  balance: number;
  progress: number;
  img: string;
  ico: string;
}
