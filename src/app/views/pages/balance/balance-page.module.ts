
import { NgModule } from '@angular/core';
import { CardListComponent } from './withdrawal/options/card-list/card-list.component';
import { YandexComponent } from './withdrawal/options/yandex/yandex.component';
import { PaypalComponent } from './withdrawal/options/paypal/paypal.component';
import { WebmoneyComponent } from './withdrawal/options/webmoney/webmoney.component';
import {CommonModule} from '@angular/common';
import {InlineSVGModule} from 'ng-inline-svg';


@NgModule({
  declarations: [

    CardListComponent,

    YandexComponent,

    PaypalComponent,

    WebmoneyComponent],

  imports: [
    CommonModule,
    InlineSVGModule
  ],
  providers: [],
  exports: [
    CardListComponent,
    YandexComponent,
    PaypalComponent,
    WebmoneyComponent
  ],
  bootstrap: []
})


export class BalancePageModule { }
