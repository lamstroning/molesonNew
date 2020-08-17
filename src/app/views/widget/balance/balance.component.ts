import { Component, OnInit } from '@angular/core';
import {User} from '../../../core/auth/_models/user.models';
import {AuthService} from '../../../core/auth/_services/auth.service';
import {TokenService} from '../../../core/token/token.service';
import {OperationsService} from '../../../core/operations';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent implements OnInit {
  user: User;
  constructor(private authService: AuthService,
              public operationsService: OperationsService,
              public tokenService: TokenService) { }

  ngOnInit() {
    this.tokenService.getUserByToken().subscribe(res => {
      this.user = res;
    }, err => {
      console.warn(err);
    });
  }

}
