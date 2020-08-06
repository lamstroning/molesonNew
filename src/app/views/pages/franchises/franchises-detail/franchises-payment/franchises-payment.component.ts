import { Component, OnInit } from '@angular/core';
import {FranchisesModel, FranchisesService} from '../../../../../core/franchises';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {TokenService} from '../../../../../core/token/token.service';
import {User} from '../../../../../core/auth/_models/user.models';

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
    private tokenService: TokenService
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
    this.franchisesService.buyFranchise(this.currentFranchise._id + '', +this.count).subscribe(res => {
      console.log(res);
    },
        err => console.warn(err)
    );
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
