import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  email: string;
  pass: string;
  msgType = 'hidden-msg';
  msgText = '';
  formLoad = false;
  authSub: Subscription;
  myRecaptcha = new FormControl(false);

  constructor() { }

  ngOnInit() {
  }
  onScriptLoad() {
    // console.log('Google reCAPTCHA loaded and is ready for use!');
  }

  onScriptError() {
    // console.log('Something went long when loading the Google reCAPTCHA');
  }

  reset() {

  }
}
