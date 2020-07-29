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

  constructor(private http: HttpClient, private tokenService: TokenService) {
    // this.getList();
  }
  getList() {
    this.operationList = [];
    this.transactionGet().subscribe(res => {
      console.log(res);
      for (const item of res.data) {
        this.operationList.push(new OperationsModel(item));
      }
    }, err => {
      console.warn(err);
    }, () => {
    });
  }
  transactionOutput(): Observable<any> {
    return this.http.post<any>(API_URL + 'output', {}, {headers: this.tokenService.getUserTokenHeader()});
  }

  transactionGet(): Observable<any> {
    return this.http.post<any>(API_URL + 'get', {}, {headers: this.tokenService.getUserTokenHeader()});
  }
}
