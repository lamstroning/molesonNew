import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-stars-row',
  templateUrl: './stars-row.component.html',
  styleUrls: ['./stars-row.component.scss']
})
export class StarsRowComponent implements OnInit {
  @Input() level: number;

  constructor() { }

  ngOnInit() {
    console.log(this.level);
  }

}
