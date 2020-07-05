import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {NewsModel} from '../../../../core/news/_models/news.model';
import {NewsService} from '../../../../core/news/news.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {

  id: number;
  newsDetail: NewsModel;
  private subscription: Subscription;
  constructor(
    private activateRoute: ActivatedRoute,
    private newsService: NewsService
  ) {

    this.subscription = activateRoute.params.subscribe(params => this.id = params.id);
  }
  ngOnInit() {
    this.newsDetail = this.newsService.news.find(newsItem => {
      return newsItem.id === +this.id;
    });
  }

}
