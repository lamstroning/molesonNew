import { NgModule } from '@angular/core';
import {InlineSVGModule} from 'ng-inline-svg';
import {RouterModule, Routes} from '@angular/router';
import {VerificationComponent} from './verification.component';
import { Step1Component } from './verification-steps/step1/step1.component';
import { Step2Component } from './verification-steps/step2/step2.component';
import { Step3Component } from './verification-steps/step3/step3.component';
import { Step4Component } from './verification-steps/step4/step4.component';
import { Step5Component } from './verification-steps/step5/step5.component';
import {FormsModule} from '@angular/forms';
import {WidgetModule} from '../../../widget/widget.module';
import {CommonModule} from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: VerificationComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'step1'
      },
      {
        path: 'step1',
        component: Step1Component
      },
      {
        path: 'step2',
        component: Step2Component
      },
      {
        path: 'step3',
        component: Step3Component
      },
      {
        path: 'step4',
        component: Step4Component
      },
      {
        path: 'step5',
        component: Step5Component
      },
    ]
  },
];

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
    RouterModule.forChild(routes),
    FormsModule,
    WidgetModule,
    CommonModule
  ],
  providers: [],
  exports: [

  ],
  bootstrap: []
})


export class VerificationModule { }
