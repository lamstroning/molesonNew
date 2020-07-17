import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  year: number[] = [];
  month = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь'
  ];
  days: number[] = [];
  constructor() {

  }

  ngOnInit() {
    for (let i = 1; i <= 31; i++) {
      this.days.push(i);
    }
    for (let i = 1930; i <= 2002; i++) {
      this.year.push(i);
    }
  }

}
