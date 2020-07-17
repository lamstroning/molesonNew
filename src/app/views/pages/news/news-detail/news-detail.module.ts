import {NgModule} from '@angular/core';
import {NewsDetailComponent} from './news-detail.component';
import {RouterModule, Routes} from '@angular/router';
import {InlineSVGModule} from 'ng-inline-svg';
import {CommonModule} from '@angular/common';
import {WidgetModule} from '../../../widget/widget.module';
import {NewsService} from '../../../../core/news/news.service';

const routes: Routes = [
  {
    path: 'news-detail/:id',
    component: NewsDetailComponent
  },
];

@NgModule({
  declarations: [
    NewsDetailComponent
  ],
  providers: [
    NewsService
  ],
  imports: [
    RouterModule.forChild(routes),
    InlineSVGModule,
    CommonModule,
    WidgetModule
  ]
})

export class NewsDetailModule {}
