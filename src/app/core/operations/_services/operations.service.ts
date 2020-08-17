import { Injectable } from '@angular/core';
import {OperationsModel} from '../_models/operations.model';
import {HttpClient} from '@angular/common/http';
import {TokenService} from '../../token/token.service';
import {Observable} from 'rxjs';

const API_URL = '/api/user/transaction/';

@Injectable({
  providedIn: 'root'
})

export class OperationsService {
  operationList: OperationsModel[] = [];
  operationListDateHash: any = [];
  operationSumByFranchisesId: any[];
  operationSumTotal: number;

  constructor(private http: HttpClient, private tokenService: TokenService) {
    // this.getList();
    this.operationSumTotal = 0;
  }
  getList() {
    this.operationList = [];
    this.operationListDateHash = [];
    this.operationSumByFranchisesId = [];
    this.transactionGet().subscribe(res => {
      // console.log(res);
      for (const item of res.data) {
        const operation = new OperationsModel(item);
        this.operationList.push(operation);
        if ( this.operationListDateHash[operation.date_month_title] === undefined ) {
          this.operationListDateHash[operation.date_month_title] = [];
        }
        this.operationListDateHash[operation.date_month_title].push(operation);
        // Формируем сумму по каждой франшизе
        if ( operation.typeActionRaw === 'pay franchises' ) {
          if ( this.operationSumByFranchisesId[operation._id] === undefined ) {
            this.operationSumByFranchisesId[operation._id] = 0;
          }
          this.operationSumByFranchisesId[operation._id] += operation.quantity;
          this.operationSumTotal += (operation.quantity / 100);
        }
      }
      // console.log(this.operationSumTotal);
    }, err => {
      console.warn(err);
    }, () => {
    });
  }
  getoperationSumTotal() {
    return this.operationSumTotal;
  }
  transactionOutput(): Observable<any> {
    return this.http.post<any>(API_URL + 'output', {}, {headers: this.tokenService.getUserTokenHeader()});
  }

  transactionGet(): Observable<any> {
    return this.http.post<any>(API_URL + 'get', {}, {headers: this.tokenService.getUserTokenHeader()});
  }
}
