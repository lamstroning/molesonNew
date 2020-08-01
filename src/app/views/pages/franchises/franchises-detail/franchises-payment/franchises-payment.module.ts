import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FranchisesPaymentComponent} from './franchises-payment.component';
import {InlineSVGModule} from 'ng-inline-svg';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {WidgetModule} from '../../../../widget/widget.module';

const routes: Routes = [
  {
    path: '',
    component: FranchisesPaymentComponent,
  }
];

@NgModule({
  imports: [

    RouterModule.forChild(routes),
    InlineSVGModule,
    FormsModule,
    CommonModule,
    WidgetModule
  ],
  declarations: [
    FranchisesPaymentComponent
  ]
})
export class FranchisesPaymentModule {}
