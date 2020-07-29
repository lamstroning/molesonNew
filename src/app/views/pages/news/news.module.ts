
import { NgModule } from '@angular/core';
import {NewsService} from '../../../core/news';
import {NewsCardComponent} from './news-card/news-card.component';
import {InlineSVGModule} from 'ng-inline-svg';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {NewsComponent} from './news.component';
import {WidgetModule} from '../../widget/widget.module';

const routes: Routes = [
  {
    path: '',
    component: NewsComponent,
  }
];

@NgModule({
  declarations: [
    NewsCardComponent,
    NewsComponent,
  ],

  imports: [
    InlineSVGModule,
    RouterModule.forChild(routes),
    CommonModule,
    WidgetModule,
  ],
  providers: [NewsService],
  exports: [
    NewsCardComponent,
  ],
  bootstrap: []
})


export class NewsModule { }
