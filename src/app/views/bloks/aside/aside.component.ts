import { Component, OnInit } from '@angular/core';
import {Menu} from '../../../core/config/menu.config';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {
  menu = Menu;
  constructor() { }

  ngOnInit() {
  }

}
