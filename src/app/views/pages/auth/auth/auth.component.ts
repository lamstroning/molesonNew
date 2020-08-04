import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../../../core/auth/_services/auth.service';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit, OnDestroy {
  email: string;
  pass: string;
  msgType = 'hidden-msg';
  msgText = '';
  formLoad = false;
  authSub: Subscription;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {}
  ngOnDestroy() {
    // clear memory leaks
    if (this.authSub) {
      this.authSub.unsubscribe();
    }
  }
  translateErrorMsg(msg: any) {
    if (msg === 'User not found!') {
      return 'Пользователь не найден, возможно вы не зарегистрированы';
    }
    if (msg === 'Invalid password!') {
      return 'Не верный пароль';
    }
    if (msg.details !== undefined && msg.data === 'Not verified email') {
      return 'На вашу почту было выслано письмо с подтверждением, подвердите ваш Email, чтобы начать работу с площадкой';
    }
    if (msg.details !== undefined && msg.details[0].message === '"email" must be a valid email') {
      return 'Не верный формат "email"';
    }
    return 'Неизвестная ошибка, попробуйте зайти позже';
  }
  login() {
    this.formLoad = true;
    this.authSub = this.authService.login(this.email, this.pass).subscribe(
      res => {
        console.log(res);
        this.formLoad = false;
        this.router.navigateByUrl('/dashboard');
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
}
