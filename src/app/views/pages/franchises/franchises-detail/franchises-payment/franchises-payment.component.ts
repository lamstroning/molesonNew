import { Component, OnInit } from '@angular/core';
import {FranchisesModel, FranchisesService} from '../../../../../core/franchises';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {TokenService} from '../../../../../core/token/token.service';
import {User} from '../../../../../core/auth/_models/user.models';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-franchises-payment',
  templateUrl: './franchises-payment.component.html',
  styleUrls: ['./franchises-payment.component.scss']
})
export class FranchisesPaymentComponent implements OnInit {
  currentFranchise: FranchisesModel;
  private subscription: Subscription;
  id: string;
  count: any = '1';
  user: User;

  constructor(
    public franchisesService: FranchisesService,
    private activateRoute: ActivatedRoute,
    public tokenService: TokenService,
    private toastr: ToastrService,
  ) { }
  checkValidate() {
    const res = parseInt(this.count, 10);
    if (res <= 0 || isNaN(res)) {
      this.count = '1';
    } else {
      this.count = res + '';
    }
  }
  buy() {
    // Проверить можно ли юзеру покупать
    if ( !this.checkUserIsVerified() ) {
      this.toastr.error('Для покупки франшизы вам нужно пройти верификацию', 'Ошибка покупки франшизы');
      return false;
    }

    // Проверить баланс

    this.franchisesService.buyFranchise(this.currentFranchise._id + '', +this.count).subscribe(res => {
      console.log(res);
      if (res.status === 'success') {
        this.toastr.success('Куплено долей: ' + res.data.data.stocks, 'Операция успешна');
      }
    },
        err => {
          console.warn(err);
          console.log(err.error.data);

          // tslint:disable-next-line:variable-name
          let error_message = 'Неизвестная ошибка';
          if (err.error.data === 'Insufficient funds') {
            error_message = 'Недостаточно средств на счету';
          }
          this.toastr.error(error_message, 'Ошибка покупки франшизы');
        }
    );
  }
  checkUserIsVerified() {
    return this.user.isVerified;
  }
  ngOnInit() {
    this.tokenService.getUserByToken().subscribe(res => {
      this.user = res;
    });
    this.subscription = this.activateRoute.params.subscribe(params => this.id = params.id);
    const result = this.franchisesService.getFranchisesById(this.id, 'all');
    result.subscribe(
      res => {
        this.currentFranchise = new FranchisesModel(res);
        console.log(res);
      }, err => {
        console.warn(err);
      }, () => {
      }
    );
    // this.currentFranchise = this.franchisesService.franchisesList.find(item => {
    //   return (item._id === this.id);
    // });
  }
}
