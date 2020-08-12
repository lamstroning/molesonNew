import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {InviteComponent} from './invite.component';
import {InlineSVGModule} from 'ng-inline-svg';
import {WidgetModule} from '../../widget/widget.module';
import {CommonModule} from '@angular/common';

const routes: Routes = [
    {
      path: '',
      component: InviteComponent
    }
];
@NgModule({
  declarations: [
    InviteComponent
  ],

  imports: [
    RouterModule.forChild(routes),
    InlineSVGModule,
    CommonModule,
    WidgetModule
  ],
  providers: [],
  bootstrap: []
})


export class InviteModule { }
