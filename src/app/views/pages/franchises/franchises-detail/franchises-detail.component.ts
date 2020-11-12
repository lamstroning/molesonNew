import {Component, OnInit} from '@angular/core';
import {FranchisesService} from '../../../../core/franchises';
import {FranchisesModel} from '../../../../core/franchises';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {filter} from 'rxjs/operators';
import {OperationsModel} from '../../../../core/operations/_models/operations.model';
import {OperationsService} from '../../../../core/operations';

@Component({
  selector: 'app-franchises-detail',
  templateUrl: './franchises-detail.component.html',
  styleUrls: ['./franchises-detail.component.scss']
})
export class FranchisesDetailComponent implements OnInit {

  currentFranchise: FranchisesModel;
  private subscription: Subscription;
  operationList: OperationsModel[] = [];
  transactionsCount: number;
  transactionsSum: number;

  id: string;
  loading = true;

  constructor(
    public franchisesService: FranchisesService,
    public operationsService: OperationsService,
    private activateRoute: ActivatedRoute) {
      this.transactionsCount = 0;
      this.transactionsSum = 0;
  }

  ngOnInit() {
    this.subscription = this.activateRoute.params.subscribe(params => this.id = params.id);
    const result = this.franchisesService.getFranchisesById(this.id, 'all');
    result.subscribe(
      res => {
        this.currentFranchise = new FranchisesModel(res);
        console.log(res);
      }, err => {
        console.warn(err);
      }, () => {
        this.loading = false;
      }
    );
    this.count_my_income();
  }

  private count_my_income() {
    this.operationsService.transactionGet().subscribe(res => {
      for (const item of res.data) {
        const operation = new OperationsModel(item);
        if ( operation.typeActionRaw === 'pay franchises' && item.data._id === this.id) {
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
