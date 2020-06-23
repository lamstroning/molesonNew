import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-news-widget',
  templateUrl: './news-widget.component.html',
  styleUrls: ['./news-widget.component.scss']
})
export class NewsWidgetComponent implements OnInit {
  width = window.innerWidth;
  constructor() { }

  ngOnInit() {
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.width = event.target.innerWidth;
    console.log(this.width);
  }
}
