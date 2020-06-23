import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-last-operations',
  templateUrl: './last-operations.component.html',
  styleUrls: ['./last-operations.component.scss']
})
export class LastOperationsComponent implements OnInit {

  operation: Operation[] = [
    {status: '#E74B4B', date: '26.05.2020', event: '22$', title: 'Вывод средств'},
    {status: '#31B984', date: '24.05.2020', event: '231$', title: 'Пополнение'},
    {status: '#FF9F19', date: '23.05.2020', event: 'KFC', title: 'Покупка доли'},
    {status: '#FF9F19', date: '22.05.2020', event: 'KFC', title: 'Покупка доли'},
    {status: '#E74B4B', date: '16.05.2020', event: '2312$', title: 'Вывод средств'},
    {status: '#E74B4B', date: '15.05.2020', event: 'KFC', title: 'Продажа доли'},

  ];
  constructor() { }

  ngOnInit() {
  }

}

export interface Operation {
  status: string;
  date: string;
  event: string;
  title: string;
}
