import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AuthService} from '../../../../../core/auth/_services/auth.service';
import {of} from 'rxjs';

@Component({
  selector: 'app-register-second',
  templateUrl: './register-second.component.html',
  styleUrls: ['./register-second.component.scss']
})
export class SecondStageRegisterComponent implements OnInit {
  @Input() regDate: RegDate;
  email: string;
  password: string;
  passwordRepeat: string;

  msgType = 'hidden-msg';
  accept1 = false;
  accept2 = false;
  msgText: string;

  constructor(private authService: AuthService) {
  }

  register() {
    this.msgType = 'hidden-msg';
    if (this.passwordRepeat !== this.password) {
      this.msgType = 'error-msg';
      this.msgText = 'Пароли не совпадают';
      return;
    }
    if (!this.accept1) {
      this.msgType = 'error-msg';
      this.msgText = 'подтвердите согласие на обработку персональных данных';
      return;
    }
    if (!this.accept2) {
      this.msgType = 'error-msg';
      this.msgText = 'Ознакомтесь со всеми положениями и правилами использования.';
      return;
    }
    this.regDate.email = this.email;
    this.regDate.password = this.password;
    const req = new FormData();
    req.append('fullname', this.regDate.fullname);
    req.append('username', this.regDate.username);
    req.append('password', this.regDate.password);
    req.append('email', this.regDate.email);
    if (this.regDate.referralLink) {
      req.append('referral', this.regDate.referralLink);
    }
    const resultRequest = this.authService.register(req);
    if (!resultRequest) {
      this.msgType = 'error-msg';
      this.msgText = 'Ошибка, попробуйте еще раз';
      return;
    }
    resultRequest.subscribe(
      res => {
        this.msgType = 'success-msg';
        this.msgText = 'на ваш Email отправлено сообщение для подтверждения регистрации';
        this.authService.login(this.regDate.email, this.regDate.password).subscribe(next => {
          console.log(next);
        });
        console.log(res);
      },
      err => {
        if (err.data._message === 'User validation failed') {
          this.msgType = 'error-msg';
          this.msgText = 'Имя пользователя уже занято';
          return;
        }
        if (err.data.error === 'Email error') {
          this.msgType = 'error-msg';
          this.msgText = 'Email не найден';
          return;
        }
        console.log(err);
      }
    );
    console.log(this.regDate);
  }

  ngOnInit() {

  }

}

interface RegDate {
  fullname: string;
  username: string;
  email: string;
  password: string;
  referralLink: string;
}
