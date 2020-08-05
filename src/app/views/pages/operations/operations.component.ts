import { Component, OnInit } from '@angular/core';
import {OperationsService} from '../../../core/operations';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.scss']
})
export class OperationsComponent implements OnInit {
  operationList: OperationList[] = [
    {
      data: '09 июня 2020 г.',
      operation: [
        {
          name: 'Пополнение',
          ico: '/assets/svg-icon/operation-ico/card-up-balance.svg',
          type: true,
          color: '#31B984',
          typeIco: 'svg',
          sum: 350
        },
        {
          name: 'Вывод средств',
          ico: '/assets/svg-icon/operation-ico/card-down-balance.svg',
          type: false,
          color: '#E74B4B',
          typeIco: 'svg',
          sum: 2050
        },
        {
          name: 'Продажа доли “Colizium”',
          ico: '/assets/img/franchises/col-ico.png',
          type: true,
          color: '#31B984',
          typeIco: 'png',
          sum: 1100
        },
        {
          name: 'Пополнение',
          ico: '/assets/img/franchises/col-ico.png',
          type: false,
          color: '#051C2C',
          typeIco: 'png',
          sum: 1000
        },
      ]
    },
    {
      data: '06 июня 2020 г.',
      operation: [
        {
          name: 'Пополнение',
          ico: '/assets/svg-icon/operation-ico/card-up-balance.svg',
          type: true,
          color: '#31B984',
          typeIco: 'svg',
          sum: 350
        },
        {
          name: 'Вывод средств',
          ico: '/assets/svg-icon/operation-ico/card-down-balance.svg',
          type: false,
          color: '#E74B4B',
          typeIco: 'svg',
          sum: 2050
        },
        {
          name: 'Продажа доли “Colizium”',
          ico: null,
          type: true,
          color: '#31B984',
          typeIco: 'svg',
          sum: 1100
        },
        {
          name: 'Пополнение',
          ico: null,
          type: false,
          color: '#051C2C',
          typeIco: 'svg',
          sum: 1000
        },
      ]
    }
  ];
  constructor(
    public operationsService: OperationsService,
  ) { }

  ngOnInit() {
    this.operationsService.getList();
  }

}

export interface OperationItem {
  name: string;
  type: boolean;
  ico: string;
  typeIco: string;
  color: string;
  sum: number;
}
export interface OperationList {
  data: string;
  operation: OperationItem[];
}
