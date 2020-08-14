import { Component, OnInit } from '@angular/core';
import {TokenService} from '../../../../../../core/token/token.service';
import {Router} from '@angular/router';
import {ApiConfig} from '../../../../../../core/config/api.config';
import {VerificationComponent} from '../../verification.component';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss']
})
export class Step3Component extends VerificationComponent implements OnInit {

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
    this.protectStep(3);
  }
}
