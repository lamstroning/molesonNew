import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AuthService} from '../../../../../core/auth/_services/auth.service';
import {of} from 'rxjs';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-register-second',
  templateUrl: './register-second.component.html',
  styleUrls: ['./register-second.component.scss']
})
export class SecondStageRegisterComponent implements OnInit {
  @Input() regDate: RegDate;
  password: string;
  passwordRepeat: string;

  msgType = 'hidden-msg';
  accept1 = false;
  accept2 = false;
  msgText: string;
  inputType = 'password';
  inputTypeRes = 'password';
  formLoad = false;
  constructor(private authService: AuthService,
              private toastr: ToastrService,
              ) {
  }
  showNotification(type: string, text: string, time: number = 5000) {
    this.msgType = type;
    this.msgText = text;
    this.formLoad = false;
    if (time > 0) {
      setTimeout(() => {
        this.msgText = '';
        this.msgType = 'hidden-msg';
      }, time);
    }
  }
  register() {
    this.formLoad = true;
    this.msgType = 'hidden-msg';
    if (this.passwordRepeat !== this.password) {
      this.showNotification('error-msg', 'Пароли не совпадают');
      return;
    }
    if (!this.password || this.password.length < 8) {
      this.showNotification('error-msg', 'Длина пароля должна быть не меньше 8 символов');
      return;
    }
    if (!this.accept1) {
      this.showNotification('error-msg', 'Подтвердите согласие на обработку персональных данных');
      return;
    }
    if (!this.accept2) {
      this.showNotification('error-msg', 'Ознакомтесь со всеми положениями и правилами использования.');
      return;
    }
    console.log(this.regDate.email);
    this.regDate.password = this.password;
    const req = new FormData();
    req.append('fullname', 'x');
    req.append('username', this.regDate.email.toLowerCase());
    req.append('password', this.password);
    req.append('phone', this.regDate.phone);
    req.append('email', this.regDate.email.toLowerCase());
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
      () => {
        this.formLoad = false;
        this.showNotification('success-msg', 'На ваш Email отправлено сообщение для подтверждения регистрации');
        // setTimeout(() => {
        //   this.authService.login(this.regDate.email, this.regDate.password).subscribe();
        // }, 2000);
      },
      err => {
        console.warn(err);
        this.formLoad = false;
        if (err.data.error === 'Email error') {
          this.showNotification('error-msg', 'Ошибка');
          return;
        } else {
          this.toastr.error(err.data.error, 'Ошибка регистрации');
        }
      }, () => {
        this.formLoad = false;
      }
    );
  }

  ngOnInit() {

  }

}

interface RegDate {
  fullname: string;
  username: string;
  email: string;
  phone: string;
  password: string;
  referralLink: string;
}
