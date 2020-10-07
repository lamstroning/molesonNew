import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth-main',
  templateUrl: './auth-main.component.html',
  styleUrls: ['./auth-main.component.scss']
})
export class AuthMainComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  show_header_buttons() {
    if (this.router.url === '/auth/reset' || this.router.url === '/auth/reset/confirm') {
      return false;
    }
    return true;
  }
}
