import {Component, HostListener, OnInit} from '@angular/core';
import {Menu} from '../../../core/config/menu.config';
import {Router} from '@angular/router';
import {TokenService} from '../../../core/token/token.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {
  menu = Menu;
  open = false;
  width = window.innerWidth;
  constructor(public router: Router,
              public tokenService: TokenService) {
   // console.log(router.isActive('dashboard', false));
  }

  ngOnInit() {
    if ( this.tokenService.getUser() !== null && !this.menu.menuSliced ) {
      this.menu.menuSliced = true;
      if ( !this.tokenService.isAgent() ) {
        this.menu.leftMenu.splice(2, 1);
      } else {
        this.menu.leftMenu.splice(3, 1);
      }
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.open = false;
    this.width = event.target.innerWidth;
  }
}
