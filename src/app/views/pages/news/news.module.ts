
import { NgModule } from '@angular/core';
import {NewsService} from '../../../core/news/news.service';
import { NewsCardComponent } from './news-card/news-card.component';
import { NewsBreakingComponent } from './news-breaking/news-breaking.component';
import {InlineSVGModule} from 'ng-inline-svg';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';



@NgModule({
  declarations: [
    NewsCardComponent,
    NewsBreakingComponent
  ],

    imports: [
        InlineSVGModule,
        RouterModule,
        CommonModule,
    ],
  providers: [NewsService],
  exports: [
    NewsCardComponent,
    NewsBreakingComponent
  ],
  bootstrap: []
})


export class NewsModule { }
