import { Component, OnInit } from '@angular/core';
import {User} from '../../../core/auth/_models/user.models';
import {AuthService} from '../../../core/auth/_services/auth.service';
import {TokenService} from '../../../core/token/token.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent implements OnInit {
  user: User;
  constructor(private authService: AuthService, private tokenService: TokenService) { }

  ngOnInit() {
    this.tokenService.getUserByToken().subscribe(res => {
      this.user = res;
    }, err => {
      console.warn(err);
    });
  }

}
