import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {User} from '../auth/_models/user.models';
import {concatMap} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const API_USERS_URL = 'api';

@Injectable({
  providedIn: 'root'
})

export class TokenService {
  token: string = null;
  user: User;

  constructor(private http: HttpClient) {
    this.user = null;
  }

  setToken(token: string) {
    this.token = token;
  }

  setUser(user: User) {
    this.user = user;
  }

  getUserByToken(): Observable<User> {
    if ( this.user !== null ) {
      return of(this.user);
    }
    return this.http.post<any>(API_USERS_URL + '/user/token', {},
      {headers: this.getUserTokenHeader()}).pipe(concatMap(res => {
        if (res.status === 'success') {
          this.user = res.data;
          return of(res.data);
        } else {
          return null;
        }
      })
    );
  }

  setAgentStatus(): Observable<any> {
    return this.http.post<any>(API_USERS_URL + '/user/set/status/agent', {},
      {headers: this.getUserTokenHeader()}).pipe(concatMap(res => {
        return of(res);
      })
    );
  }

  getUserTokenHeader(conf?: any) {
    const userToken = localStorage.getItem('auth-token');
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.set('authorization', userToken);
    if (conf) {
      httpHeaders.set(conf.key, conf.value);
    }
    return (httpHeaders);
  }

  getUserToken() {
    console.log(this.token);
    return this.token;
  }

  getVerificationStep() {
    // return 3;
    let step = 3;
    if ( this.user !== null ) {
      if ( this.user.isEdit ) {
        step = 3;
      } else {
        step = 4;
      }
      if ( this.user.isVerified ) {
        step = 5;
      }
    }
    return step;
  }

  getUser() {
    return this.user;
  }

  getAccessLevel() {
    return this.user.accessLevel.lvl;
  }

  isAgent() {
    if ( this.getAccessLevel() === 2 ) {
      return true;
    }
    return false;
  }

  gotToPayment() {
    window.open('https://moleson.payrexx.com/pay?tid=7df69168&referenceId=' + this.getUser()._id, '_blank');
  }

  getUserStatus() {
    if ( this.user.accessLevel.lvl === 2 ) {
      const agentStatuses = {
        1: 'Агент',
        2: 'Инвест-агент',
        3: 'Инвест-брокер'
      };
      if ( agentStatuses[this.user.level] === undefined ) {
        return 'Агент';
      }
      return agentStatuses[this.user.level];
    }
    if ( this.user.accessLevel.lvl === 99 ) {
      return 'Admin';
    }
    if ( this.user.accessLevel.lvl === 1 ) {
      return 'Инвестор';
    }
    return 'Клиент';
  }
}
