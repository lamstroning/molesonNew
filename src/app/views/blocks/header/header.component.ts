import { Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TokenService} from '../../../core/token/token.service';
import {User} from '../../../core/auth/_models/user.models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  width;
  open = false;
  user: User;

  constructor(
    private router: Router,
    private tokenService: TokenService) {
  }
  ngOnInit() {
    this.width = window.innerWidth;
    this.router.events.subscribe(() => this.open = false);
    this.tokenService.getUserByToken().subscribe(res => {
      console.log(res);
      this.user = res;
    }, err => {
      console.warn(err);
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.width = event.target.innerWidth;
    if (this.width > 1024) {
      this.open = false;
    }
  }
}
