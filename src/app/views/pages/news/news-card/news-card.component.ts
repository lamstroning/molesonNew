import {Component, Input, OnInit} from '@angular/core';
import {NewsModel} from '../../../../core/news';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent implements OnInit {
  @Input () newCard: NewsModel;
  @Input () position: number;
  constructor() { }

  ngOnInit() {
  }

}
