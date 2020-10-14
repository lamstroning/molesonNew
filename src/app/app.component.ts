import {Component, OnInit} from '@angular/core';
import {AuthService} from './core/auth/_services/auth.service';
import {TokenService} from './core/token/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'moleson';
  constructor(
    private authService: AuthService,
    private tokenService: TokenService
  ) { }

  ngOnInit() {
    try {
      if ( this.tokenService !== null ) {
        if ( window.location.pathname === '/auth/reset/confirm' || window.location.pathname.match('/ref|register/') ) {
          return false;
        }
        this.tokenService.getUserByToken().subscribe(res => {
          // this.user = res;
        }, err => {
          // console.warn(err);
        });
      }
    } catch (e) {}
  }

}
