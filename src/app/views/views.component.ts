import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.scss']
})
export class ViewsComponent implements OnInit {
  loading = false;
  constructor() { }

  ngOnInit() {
    setTimeout(() => {this.loading = true; }, 1000);
  }

}
