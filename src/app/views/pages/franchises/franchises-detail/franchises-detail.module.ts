import {NgModule} from '@angular/core';
import {FranchisesDetailComponent} from './franchises-detail.component';
import {WidgetModule} from '../../../widget/widget.module';
import {InlineSVGModule} from 'ng-inline-svg';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FranchisesIncomeComponent} from './franchises-detil-blocks/franchises-income/franchises-income.component';
import {FranchisesProgressComponent} from './franchises-detil-blocks/franchises-progress/franchises-progress.component';
import {FranchisesMyStatComponent} from './franchises-detil-blocks/franchises-my-stat/franchises-my-stat.component';

const routes: Routes = [
  {
    path: '',
    component: FranchisesDetailComponent,
  }
];

@NgModule({
  imports: [
    WidgetModule,
    InlineSVGModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    FranchisesIncomeComponent,
    FranchisesProgressComponent,
    FranchisesDetailComponent,
    FranchisesMyStatComponent,
  ]
})
export class FranchisesDetailModule {}
