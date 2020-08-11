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
    return this.token;
  }

  getVerificationStep() {
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
}
