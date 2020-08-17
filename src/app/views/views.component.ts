import { Component, OnInit } from '@angular/core';
import {TokenService} from '../core/token/token.service';

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.scss']
})
export class ViewsComponent implements OnInit {
  loading = true;
  width = window.innerWidth;
  constructor(public tokenService: TokenService) { }

  ngOnInit() {
    // setTimeout(() => {this.loading = true; }, 1000);
  }

}
