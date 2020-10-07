import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../../../core/auth/_services/auth.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit, OnDestroy {

  email: string;
  msgType = 'hidden-msg';
  msgText = '';
  formLoad = false;
  myRecaptcha = new FormControl(false);
  authSub: Subscription;


  constructor(
    private router: Router,
    private toastr: ToastrService,
    private authService: AuthService,
  ) { }

  ngOnInit() {
  }
  onScriptLoad() {
    // console.log('Google reCAPTCHA loaded and is ready for use!');
  }

  onScriptError() {
    // console.log('Something went long when loading the Google reCAPTCHA');
  }

  checkEmail() {
    const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return (reg.test(this.email));
  }

  reset() {
    if (!this.myRecaptcha.value) {
      this.msgType = 'error-msg';
      this.msgText = this.translateErrorMsg('Wrong captcha');
      this.formLoad = false;
      return ;
    }
    if ( !this.checkEmail() ) {
      this.showNotification('error-msg', 'Email не валидный');
      return false;
    }

    this.authSub = this.authService.recoveryPassword(this.email.toLowerCase()).subscribe(
      res => {
        console.log(res);
        if ( res.status === 'success' ) {
          this.router.navigate(['/auth/reset/confirm']);
        }
        this.formLoad = false;
        // this.router.navigateByUrl('/dashboard');
      },
      err => {
        this.msgType = 'error-msg';
        this.msgText = this.translateErrorMsg(err.error.data);
        console.log('Error: ');
        console.log(err);
        this.formLoad = false;
      }, () => {
        console.log('xxx');
        this.formLoad = false;
      });

  }

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

  translateErrorMsg(msg: any) {
    if (msg === 'User not found!') {
      return 'Пользователь не найден, возможно вы не зарегистрированы';
    }
    if (msg === 'Invalid password!') {
      return 'Неверный пароль';
    }
    if (msg === 'Wrong captcha') {
      return 'Введите капчу';
    }
    if (msg === 'Not verified email') {
      return 'На вашу почту было выслано письмо с подтверждением, подтвердите ваш Email, чтобы начать работу с площадкой';
    }
    if (msg.details !== undefined && msg.details[0].message === '"email" must be a valid email') {
      return 'Неверный формат "email"';
    }
    return 'Неизвестная ошибка, попробуйте зайти позже';
  }

  ngOnDestroy() {
    // clear memory leaks
    if (this.authSub) {
      this.authSub.unsubscribe();
    }
  }
}
