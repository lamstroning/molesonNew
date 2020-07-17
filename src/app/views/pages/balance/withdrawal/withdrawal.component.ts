import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-withdrawal',
  templateUrl: './withdrawal.component.html',
  styleUrls: ['./withdrawal.component.scss']
})
export class WithdrawalComponent implements OnInit {
  idActive = 0;
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
  constructor() { }

  activeCard(id: number) {
    this.idActive = id;
  }
  ngOnInit() {
  }

}

interface PaySystem {
  id: number;
  name: string;
  ico: string[];
}
