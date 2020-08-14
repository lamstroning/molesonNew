import { Component, OnInit } from '@angular/core';
import {VerificationComponent} from '../../verification.component';
import {TokenService} from '../../../../../../core/token/token.service';
import {Router} from '@angular/router';
import {ApiConfig} from '../../../../../../core/config/api.config';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss']
})
export class Step1Component extends VerificationComponent implements OnInit {

  constructor(public tokenService: TokenService,
              protected router: Router,
              protected apiConfig: ApiConfig) {
    super(
      tokenService,
      router,
      apiConfig
    );
  }

  ngOnInit() {
    this.protectStep(1);
  }

}
