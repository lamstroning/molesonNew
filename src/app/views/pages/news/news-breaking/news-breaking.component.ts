import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-breaking',
  templateUrl: './news-breaking.component.html',
  styleUrls: ['./news-breaking.component.scss']
})
export class NewsBreakingComponent implements OnInit {

  news: NewsBreaking[] = [
    {
      title: 'Покупка новой франшизы в августе',
      data: '04 июня 2020, 09:50',
    },
    {
      title: 'Что брать золото или серебро?',
      data: '04 июня 2020, 09:50',
    },
    {
      title: 'Клон Путина ввел новые поправки в законодательство',
      data: '04 июня 2020, 09:50',
    },
    {
      title: 'Торговая война между США и Китаем',
      data: '04 июня 2020, 09:50',
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
interface NewsBreaking {
  title: string;
  data: string;
}
