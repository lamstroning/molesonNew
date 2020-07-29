import { Injectable } from '@angular/core';
import {NewsModel} from '../_models/news.model';

@Injectable({
  providedIn: 'root'
})

export class NewsService {
  news: NewsModel[] = [];
  constructor() {
    for (let i = 0; i < 32; i++) {
      this.news.push(new NewsModel(i, titleList[i % 3]));
    }
  }
}

const titleList = [
  {
    title: 'Валютный рынок. Рубль может ослабнуть к концу недели',
    subtitle: 'Валютный рынок. Рубль может ослабнуть к концу недели',
    img: '/assets/img/news/new-item1.png',
  },
  {
    title: 'Новак ожидает дефицит на рынке нефти 3–5 млн б/с',
    subtitle: 'Потеряв поддержку со стороны нефти USD/RUB может вырасти с трехмесячных минимумов',
    img: '/assets/img/news/new-item2.png',
  },
  {
    title: 'Ход торгов. Корректируемся широким фронтом',
    subtitle: 'Потеряв поддержку со стороны нефти USD/RUB может вырасти с трехмесячных минимумов',
    img: '/assets/img/news/new-item3.png',
  },
];
