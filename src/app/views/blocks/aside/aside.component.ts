import {Component, HostListener, OnInit} from '@angular/core';
import {Menu} from '../../../core/config/menu.config';
import {Router} from '@angular/router';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {
  menu = Menu;
  open = false;
  width = window.innerWidth;
  constructor(public router: Router) {
   console.log(router.isActive('dashboard', false));
  }

  ngOnInit() {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.open = false;
    this.width = event.target.innerWidth;
  }
}
