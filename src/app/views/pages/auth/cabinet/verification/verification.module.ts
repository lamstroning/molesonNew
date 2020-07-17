import { NgModule } from '@angular/core';
import {InlineSVGModule} from 'ng-inline-svg';
import {RouterModule} from '@angular/router';
import {VerificationComponent} from './verification.component';
import { Step1Component } from './verification-steps/step1/step1.component';
import { Step2Component } from './verification-steps/step2/step2.component';
import { Step3Component } from './verification-steps/step3/step3.component';
import { Step4Component } from './verification-steps/step4/step4.component';
import { Step5Component } from './verification-steps/step5/step5.component';

@NgModule({
  declarations: [
    VerificationComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    Step4Component,
    Step5Component,
  ],

  imports: [
    InlineSVGModule,
    RouterModule,
  ],
  providers: [],
  exports: [

  ],
  bootstrap: []
})


export class VerificationModule { }
