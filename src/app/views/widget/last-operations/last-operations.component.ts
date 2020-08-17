import { Component, OnInit } from '@angular/core';
import {OperationsService} from '../../../core/operations';
import {OperationList} from '../../pages/operations/operations.component';
import {OperationsModel} from '../../../core/operations/_models/operations.model';

@Component({
  selector: 'app-last-operations',
  templateUrl: './last-operations.component.html',
  styleUrls: ['./last-operations.component.scss']
})
export class LastOperationsComponent implements OnInit {
  operation: OperationsModel[] = [];
  // operation: Operation[] = [
  //   {status: '#E74B4B', date: '26.05.2020', event: '22$', title: 'Вывод средств'},
  //   {status: '#31B984', date: '24.05.2020', event: '231$', title: 'Пополнение'},
  //   {status: '#FF9F19', date: '23.05.2020', event: 'KFC', title: 'Покупка доли'},
  //   {status: '#FF9F19', date: '22.05.2020', event: 'KFC', title: 'Покупка доли'},
  //   {status: '#E74B4B', date: '16.05.2020', event: '2312$', title: 'Вывод средств'},
  //   {status: '#E74B4B', date: '15.05.2020', event: 'KFC', title: 'Продажа доли'},
  //
  // ];
  constructor(private operationsService: OperationsService) { }

  ngOnInit() {
    this.operationsService.getList();
    this.operation = this.operationsService.operationList;
    // console.log(this.operation);
  }

}

// export interface Operation {
//   status: string;
//   date: string;
//   event: string;
//   title: string;
// }
