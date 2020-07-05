import { Component, OnInit } from '@angular/core';
import {NewsService} from '../../../core/news/news.service';
import {NewsModel} from '../../../core/news/_models/news.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  newsList: NewsModel[] = [];
  maxElements = 9;
  constructor(private newsService: NewsService) { }

  ngOnInit() {
    // this.newsList = this.newsService.news;
    this.getArrayValues(0);
  }

  getArrayValues(index) {
    setInterval(() => {
      if (index === this.newsService.news.length) {
        return;
      }
      this.newsList.push(this.newsService.news[index]);
      index++;
    }, 100);
  }
}
