import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {DocsComponent} from './docs.component';
import {InlineSVGModule} from 'ng-inline-svg';
import {WidgetModule} from '../../widget/widget.module';

const routes: Routes = [
    {
      path: '',
      component: DocsComponent
    }
];
@NgModule({
  declarations: [
    DocsComponent
  ],

  imports: [RouterModule.forChild(routes), InlineSVGModule, WidgetModule],
  providers: [],
  bootstrap: []
})


export class DocsModule { }
