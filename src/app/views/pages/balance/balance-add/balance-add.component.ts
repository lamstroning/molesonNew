import { Component, OnInit } from '@angular/core';
import {TokenService} from '../../../../core/token/token.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-balance-add',
  templateUrl: './balance-add.component.html',
  styleUrls: ['./balance-add.component.scss']
})
export class BalanceAddComponent implements OnInit {
  public sum: number;

  constructor(
    private toastr: ToastrService,
    public tokenService: TokenService
  ) {
    this.sum = 100;
  }

  ngOnInit() {
  }

  make_order() {
    if (Number.parseInt(this.sum).toString() !== this.sum.toString()) {
      this.toastr.error('Сумма пополнения указана неверно. Введите число от 100 и больше', 'Ошибка');
      return false;
    }
    if ( this.sum < 100 ) {
      this.toastr.error('Сумма пополнения должна быть не меньше 100$', 'Ошибка');
      return false;
    }

    const total_sum = (Number.parseInt(this.sum) * 100)*73;

    this.tokenService.get_tinkoff_order(total_sum).subscribe(
      res => {
        if (res.status === 'success') {
          // console.log(res.data.PaymentURL);
          window.open(res.data.PaymentURL, '_blank');
        } else {
          this.toastr.error('Оплата в данный момент невозможна, попробуйте позже', 'Ошибка');
        }
        // console.log(res);
      },
      err => {
        this.toastr.error('Оплата в данный момент невозможна, попробуйте позже', 'Ошибка');
      });
  }

}
