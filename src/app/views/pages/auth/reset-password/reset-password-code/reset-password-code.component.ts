import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../../../core/auth/_services/auth.service';
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-reset-password-code',
  templateUrl: './reset-password-code.component.html',
  styleUrls: ['../reset-password.component.scss']
})
export class ResetPasswordCodeComponent implements OnInit {
  msgType = 'hidden-msg';
  msgText = '';
  formLoad = false;
  password: string;
  passwordRepeat: string;
  recoveryPasswordKey: string;
  public changeComplete: boolean;
  inputType = 'password';
  inputTypeRes = 'password';


  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.changeComplete = false;
    this.recoveryPasswordKey = this.get_key_from_request();
  }

  get_key_from_request() {
    const search = window.location.search;
    return search.replace(/^\?key=/, '');
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
  change() {
    this.formLoad = true;
    this.changeComplete = false;
    this.msgType = 'hidden-msg';
    if (this.passwordRepeat !== this.password) {
      this.showNotification('error-msg', 'Пароли не совпадают');
      return;
    }
    if (!this.password || this.password.length < 8) {
      this.showNotification('error-msg', 'Длина пароля должна быть не меньше 8 символов');
      return;
    }
    const req = new FormData();
    req.append('password', this.password);
    req.append('password2', this.passwordRepeat);
    req.append('recoveryPasswordKey', this.recoveryPasswordKey);
    const resultRequest = this.authService.newPasswordByKey(req);
    if (!resultRequest) {
      this.msgType = 'error-msg';
      this.msgText = 'Ошибка, попробуйте еще раз';
      return;
    }

    resultRequest.subscribe(
      (res) => {
        // console.log(res);
        this.formLoad = false;
        this.showNotification('success-msg', 'Пароль изменен успешно');
        this.changeComplete = true;
        // setTimeout(() => {
        //   this.authService.login(this.regDate.email, this.regDate.password).subscribe();
        // }, 2000);
      },
      err => {
        console.warn(err);
        this.formLoad = false;
        if (err.ok === false) {
          this.showNotification('error-msg', 'Ошибка: ' + this.translateError(err.error.data));
          return;
        } else {
          this.toastr.error(err.data.error, 'Ошибка смены пароля: ' + this.translateError(err.error.data));
        }
      }, () => {
        this.formLoad = false;
      }
    );
  }

  translateError( error: any ) {
    let result = '';
    switch (error) {
      case 'Bad key':
        result = 'Код подтверждения указан неверно';
        break;
    }
    return result;
  }
}
