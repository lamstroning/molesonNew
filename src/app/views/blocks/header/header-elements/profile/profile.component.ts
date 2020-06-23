import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  open = false;
  width = window.innerWidth;
  constructor() { }

  ngOnInit() {
  }
  openBlock(open: boolean, event: Event) {
    event.stopPropagation();
    this.open = open;
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.open = false;
    this.width = event.target.innerWidth;
  }
}
