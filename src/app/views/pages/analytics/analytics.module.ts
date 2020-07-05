
import { NgModule } from '@angular/core';
import { WorkspaceComponent } from './analytics-blocks/workspace/workspace.component';
import { IncomeComponent } from './analytics-blocks/income/income.component';
import {CommonModule} from '@angular/common';
import { PerspectivesComponent } from './analytics-blocks/perspectives/perspectives.component';



@NgModule({
  declarations: [
    WorkspaceComponent,
    IncomeComponent,
    PerspectivesComponent
  ],

  imports: [
    CommonModule
  ],
  providers: [],
  exports: [
    WorkspaceComponent,
    IncomeComponent,
    PerspectivesComponent
  ],
  bootstrap: []
})


export class AnalyticsModule { }
