import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-stars-row',
  templateUrl: './stars-row.component.html',
  styleUrls: ['./stars-row.component.scss']
})
export class StarsRowComponent implements OnInit {
  @Input() level: number;
  @Input() bigger: boolean;
  @Input() hideEmpty: boolean;
  @Input() flowWidth: boolean;
  stars: any[];

  constructor() {
    this.stars = [0, 0, 0];
  }

  ngOnInit() {
    if ( this.hideEmpty ) {
      this.stars = this.stars.splice(0, this.level);
    }

    for ( let i = 0; i < this.level; i++  ) {
      if ( i < 3 ) {
        this.stars[i] = 1;
      }
    }
  }
}
