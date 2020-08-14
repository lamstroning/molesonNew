import { Component, OnInit } from '@angular/core';
import {TokenService} from '../../../../../../core/token/token.service';
import {VerificationComponent} from '../../verification.component';
import {Router} from '@angular/router';
import {ApiConfig} from '../../../../../../core/config/api.config';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss']
})
export class Step2Component extends VerificationComponent implements OnInit {

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
    this.protectStep(2);
  }

}
