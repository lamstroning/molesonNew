import { Component, OnInit } from '@angular/core';
import {User} from '../../../../core/auth/_models/user.models';
import {AuthService} from '../../../../core/auth/_services/auth.service';
import {TokenService} from '../../../../core/token/token.service';

@Component({
  selector: 'app-withdrawal',
  templateUrl: './withdrawal.component.html',
  styleUrls: ['./withdrawal.component.scss']
})
export class WithdrawalComponent implements OnInit {
  idActive = 0;
  user: User;
  paySystems: PaySystem[] = [
    {
      id: 0,
      name: 'Бановская карта',
      ico: [
        '/assets/svg-icon/card/master-card.svg',
        '/assets/svg-icon/card/master-card-blue.svg',
        '/assets/svg-icon/card/visa.svg'
      ]
    },
    {
      id: 1,
      name: 'Яндекс Деньги',
      ico: ['/assets/svg-icon/card/yandex.svg']
    },
    {
      id: 2,
      name: 'PayPal',
      ico: ['/assets/svg-icon/card/paypal.svg']
    },
    {
      id: 3,
      name: 'WebMoney',
      ico: ['/assets/svg-icon/card/webmoney.svg']
    },
  ];
  constructor(private authService: AuthService, private tokenService: TokenService) { }

  activeCard(id: number) {
    this.idActive = id;
  }
  ngOnInit() {
    this.tokenService.getUserByToken().subscribe(
      next => {
        this.user = next;
        console.log(this.user);
      },
      err => console.log(err),
      () => {
        console.log('accept');
      });
  }

}

interface PaySystem {
  id: number;
  name: string;
  ico: string[];
}
