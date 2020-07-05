import { Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  width;
  open = false;
  constructor(private router: Router) {
  }
  ngOnInit() {
    this.width = window.innerWidth;
    this.router.events.subscribe(() => this.open = false);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.width = event.target.innerWidth;
    if (this.width > 1024) {
      this.open = false;
    }
  }
}
