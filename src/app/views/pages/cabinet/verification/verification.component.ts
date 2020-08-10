import { Component, OnInit } from '@angular/core';
import {TokenService} from '../../../../core/token/token.service';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss']
})
export class VerificationComponent implements OnInit {

  constructor(public tokenService: TokenService) { }

  ngOnInit() {
  }

  getStep() {
    return this.tokenService.getVerificationStep();
  }

  getStepClass(step) {
    if ( step > this.getStep() ) {
      return 'step';
    }
    return 'step complete-step';
  }
}
