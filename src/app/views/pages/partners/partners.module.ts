import {NgModule} from '@angular/core';
import {PartnersAnalyticsComponent} from './partners-analytics/partners-analytics.component';
import {PartnersMarketingComponent} from './partners-marketing/partners-marketing.component';
import {PartnersStructComponent} from './partners-struct/partners-struct.component';
import {PartnersRegComponent} from './partners-reg/partners-reg.component';
import {PartnersStudyComponent} from './partners-study/partners-study.component';
import {RouterModule, Routes} from '@angular/router';
import {PartnersComponent} from './partners.component';
import {InlineSVGModule} from 'ng-inline-svg';
import {CommonModule} from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: PartnersComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'analytics'
      },
      {
        path: 'analytics',
        component: PartnersAnalyticsComponent
      },
    ]
  }
];

@NgModule({
  declarations: [
    PartnersMarketingComponent,
    PartnersStructComponent,
    PartnersRegComponent,
    PartnersStudyComponent,
    PartnersComponent,
    PartnersAnalyticsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    InlineSVGModule,
    CommonModule
  ],
  providers: [],
  bootstrap: []
})


export class PartnersModule {
}
