import {Component, Input, OnInit} from '@angular/core';
import {FranchisesModel} from '../../../../../../core/franchises/_models/franchises.model';
import {FranchisesService} from '../../../../../../core/franchises';
import {OperationsService} from '../../../../../../core/operations';
import {OperationsModel} from '../../../../../../core/operations/_models/operations.model';

@Component({
  selector: 'app-franchises-my-stat',
  templateUrl: './franchises-my-stat.component.html',
  styleUrls: ['./franchises-my-stat.component.scss']
})
export class FranchisesMyStatComponent implements OnInit {
  @Input() franchise: FranchisesModel;
  operationList: OperationsModel[] = [];
  transactionsCount: number;
  transactionsSum: number;

  constructor(
    private franchisesService: FranchisesService,
    public operationsService: OperationsService) {
    this.transactionsCount = 0;
    this.transactionsSum = 0;
  }

  ngOnInit() {
    const params = {typeAction: 'pay franchises'};
    this.operationsService.transactionGet().subscribe(res => {
      for (const item of res.data) {
        const operation = new OperationsModel(item);
        if ( operation.typeActionRaw === 'pay franchises' && item.data._id === this.franchise._id) {
          // console.log(item);

          this.transactionsCount += item.data.stocks;
          this.transactionsSum += item.quantity * .01;

          this.operationList.push(operation);
        }
      }
      // console.log(this.operationList);
    }, err => {
      console.warn(err);
    }, () => {
    });
  }

}
