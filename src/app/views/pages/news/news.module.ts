
import { NgModule } from '@angular/core';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import {NewsService} from '../../../core/news/news.service';
import { NewsCardComponent } from './news-card/news-card.component';
import { NewsBreakingComponent } from './news-breaking/news-breaking.component';
import {InlineSVGModule} from 'ng-inline-svg';
import {RouterModule} from '@angular/router';
import {ViewsModule} from '../../views.module';



@NgModule({
  declarations: [
    NewsCardComponent,
    NewsBreakingComponent
  ],

  imports: [
    InlineSVGModule,
    RouterModule,
  ],
  providers: [NewsService],
  exports: [
    NewsCardComponent,
    NewsBreakingComponent
  ],
  bootstrap: []
})


export class NewsModule { }
