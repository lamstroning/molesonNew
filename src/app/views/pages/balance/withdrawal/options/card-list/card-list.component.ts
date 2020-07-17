import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  saveCard: SaveCards[] = [
    {
      id: 0,
      number: 1234,
      dateYear: 25,
      dateMonth: 12,
      ico: '/assets/svg-icon/card/master-card.svg',
      background: '/assets/svg-icon/card/background/master-card.png'
    },
    {
      id: 0,
      number: 1234,
      dateYear: 25,
      dateMonth: 12,
      ico: '/assets/svg-icon/card/visa.svg',
      background: '/assets/svg-icon/card/background/visa.png'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
interface SaveCards {
  number: number;
  background: string;
  dateYear: number;
  dateMonth: number;
  ico: string;
  id: number;
}
