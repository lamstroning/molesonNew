import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {CommonModule} from '@angular/common';
import {WidgetModule} from '../../widget/widget.module';

const routes: Routes = [
    {
      path: '',
      component: DashboardComponent,
    }
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    WidgetModule,
    RouterModule.forChild(routes)
  ],

  providers: [],
  bootstrap: []
})


export class DashboardModule {
}
