import {Component, HostListener, OnInit} from '@angular/core';
import {Menu} from '../../../core/config/menu.config';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {
  menu = Menu;
  open = false;
  width = window.innerWidth;
  constructor() { }

  ngOnInit() {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.open = false;
    this.width = event.target.innerWidth;
  }
}
