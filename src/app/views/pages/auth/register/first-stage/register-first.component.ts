import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-register-first',
  templateUrl: './register-first.component.html',
  styleUrls: ['./register-first.component.scss']
})
export class FirstStageRegisterComponent implements OnInit {
  @Input() nextStage: boolean;
  @Input() regDate: any;
  @Output() nextStageChange = new EventEmitter<boolean>();
  @Output() regDateChange = new EventEmitter<any[]>();

  msgType = 'hidden-msg';
  msgText: string;
  email: string;
  referralLink: string;

  myRecaptcha = new FormControl(false);

  showNotification(type: string, text: string, time: number = 5000) {
    this.msgType = type;
    this.msgText = text;
    if (time > 0) {
      setTimeout(() => {
        this.msgText = '';
        this.msgType = 'hidden-msg';
      }, time);
    }
  }
  checkEmail() {
      const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      return (reg.test(this.email));
  }
  onScriptLoad() {
    console.log('Google reCAPTCHA loaded and is ready for use!');
  }

  onScriptError() {
    console.log('Something went long when loading the Google reCAPTCHA');
  }

  constructor(private activateRoute: ActivatedRoute) {
    this.referralLink = activateRoute.snapshot.params.id;
  }

  switchStage() {
    if (!this.checkEmail()) {
      this.showNotification('error-msg', 'Email не валидный');
      return ;
    }
    if (!this.myRecaptcha.value) {
      this.showNotification('error-msg', 'Пройдите капчу');
      return ;
    }
    this.nextStage = true;
    this.regDate.fullname = ' ';
    this.regDate.username = ' ';
    this.regDate.referralLink = this.referralLink;
    this.regDate.email = this.email;
    this.nextStageChange.emit(this.nextStage);
    this.regDateChange.emit(this.regDate);
  }
  ngOnInit() {
  }

}
