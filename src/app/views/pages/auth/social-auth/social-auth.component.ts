import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-social-auth',
  templateUrl: './social-auth.component.html',
  styleUrls: ['./social-auth.component.scss']
})
export class SocialAuthComponent implements OnInit {
  @Input() title: string;
  constructor() { }

  ngOnInit() {
  }

}
