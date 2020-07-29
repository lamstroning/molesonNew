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

  constructor(private http: HttpClient) {
  }

  setToken(token: string) {
    this.token = token;
  }

  getUserByToken(): Observable<User> {
    return this.http.post<any>(API_USERS_URL + '/user/token', {},
      {headers: this.getUserTokenHeader()}).pipe(concatMap(res => {
        if (res.status === 'success') {
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
}
