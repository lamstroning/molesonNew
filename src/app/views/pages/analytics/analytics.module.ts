import {NgModule} from '@angular/core';
import {WorkspaceComponent} from './analytics-blocks/workspace/workspace.component';
import {IncomeComponent} from './analytics-blocks/income/income.component';
import {CommonModule} from '@angular/common';
import {PerspectivesComponent} from '../../widget/perspectives/perspectives.component';
import {RouterModule, Routes} from '@angular/router';
import {AnalyticsComponent} from './analytics.component';
import {InlineSVGModule} from 'ng-inline-svg';
import {WidgetModule} from '../../widget/widget.module';

const routes: Routes = [
  {
    path: '',
    component: AnalyticsComponent
  }
];

@NgModule({
  declarations: [
    AnalyticsComponent,
    WorkspaceComponent,
    IncomeComponent,
  ],

  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    InlineSVGModule,
    WidgetModule
  ],
  providers: [],
  exports: [
    WorkspaceComponent,
    IncomeComponent,
  ],
  bootstrap: []
})


export class AnalyticsModule {
}
