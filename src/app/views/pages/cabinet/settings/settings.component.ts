import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {AuthService} from '../../../../core/auth/_services/auth.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  password: string;
  passwordRepeat: string;

  constructor(
    private toastr: ToastrService,
    private authService: AuthService,
  ) { }

  ngOnInit() {
  }

  changePassword() {
    if (this.passwordRepeat !== this.password) {
      this.toastr.error('Пароли не совпадают', 'Ошибка');
      return;
    }
    if (!this.password || this.password.length < 8) {
      this.toastr.error('Длина пароля должна быть не меньше 8 символов', 'Ошибка');
      return;
    }

    const req = new FormData();
    req.append('password', this.password);
    req.append('password2', this.passwordRepeat);
    this.authService.changePassword(req).subscribe(
      (res) => {
        console.log(res);
        this.password = '';
        this.passwordRepeat = '';
        this.toastr.success('Пароль изменен успешно', 'Готово');
      },
      err => {
        console.warn(err);
        if (err.ok === false) {
          this.toastr.error(this.translateError(err.error.data), 'Ошибка');
          return;
        } else {
          this.toastr.error(err.data.error, 'Ошибка смены пароля: ' + this.translateError(err.error.data));
        }
      }, () => {
      }
    );
  }

  translateError( error: any ) {
    let result = '';
    switch (error) {
      case 'Bad key':
        result = 'Код подтверждения указан неверно';
        break;
      default:
        result = error;
    }
    return result;
  }

}
