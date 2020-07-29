import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {User} from '../_models/user.models';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, concatMap, map} from 'rxjs/operators';
import {Router} from '@angular/router';
import {Form} from '@angular/forms';
import {TokenService} from '../../token/token.service';

const API_USERS_URL = 'api';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private tokenService: TokenService
  ) {}

  getUserById(userId: number): Observable<any> {
    return this.http.get<any>(API_USERS_URL + `/${userId}`);
  }

  getAllUsers(): Observable<any> {
    return this.http.post<any>(API_USERS_URL + '/admin/user/get', {}, {headers: this.tokenService.getUserTokenHeader()});
  }
  updatePhone(phone: string): Observable<any> {
    return this.http.post<any>(API_USERS_URL + '/user/update/phone', {phone}, {headers: this.tokenService.getUserTokenHeader()});
  }
  updateAvatar(file: any): Observable<any> {
    return this.http.post<any>(API_USERS_URL + '/user/update/avatar', file, {headers: this.tokenService.getUserTokenHeader()});
  }
  updateUser(data: FormData): Observable<any> {
    return this.http.post<any>(API_USERS_URL + '/user/update', data, { headers: this.tokenService.getUserTokenHeader() });
  }



  isAuthenticated() {
    return !!localStorage.getItem('auth-token');
  }

  logout() {
    this.tokenService.setToken(null);
    localStorage.clear();
    this.router.navigateByUrl('/auth');
  }

  login(email: string, password: string): Observable<User> {
    return this.http.post<any>(API_USERS_URL + '/login', {email, password}).pipe(
      concatMap(next => {
        if (next.status === 'success') {
          console.log(next);
          localStorage.setItem('auth-token', next.data.accessToken);
          this.tokenService.setToken(next.data.accessToken);
          return of<User>(next.data);
        } else {
          return null;
        }
      })
    );
  }

  register(user: any): Observable<any> {
    const httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    return this.http.post<any>(API_USERS_URL + '/registration', user, {headers: httpHeaders})
      .pipe(
        map((res: RegDate) => {
          return res;
        }),
        catchError(err => {
          return err;
        })
      );
  }
}

interface RegDate {
  fullname: string;
  username: string;
  email: string;
  password: string;
}
