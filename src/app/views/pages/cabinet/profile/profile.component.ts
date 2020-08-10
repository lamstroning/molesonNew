import {Component, OnInit} from '@angular/core';
import {User} from '../../../../core/auth/_models/user.models';
import {AuthService} from '../../../../core/auth/_services/auth.service';
import {TokenService} from '../../../../core/token/token.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  year: number[] = [];
  month = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь'
  ];
  days: number[] = [];
  user: User;
  fullname: string[] = [];
  date: string[] = [];
  avatar: string;
  notificationType = 'hidden-msg';
  notificationText = '';

  constructor(private authService: AuthService, private tokenService: TokenService) {

  }

  ngOnInit() {
    this.tokenService.getUserByToken().subscribe(res => {
      this.user = res;
      this.checkUserData();
    });
    for (let i = 1; i <= 31; i++) {
      this.days.push(i);
    }
    for (let i = 1930; i <= 2002; i++) {
      this.year.push(i);
    }
  }

  formatDate() {
    let res: string;
    let i = 0;
    for (const item of this.date) {
      this.date[i++] = this.convertDate(2, item);
    }
    res = this.date.join('.');
    // console.log(this.date);
    return (res);
  }

  convertDate(len: number, src: string) {
    while (src.length < len) {
      src = '0' + src;
    }
    return (src);
  }

  checkUserData() {
    if (this.user.fullName) {
      this.fullname = this.user.fullName.split(' ');
    }
    if (this.user.birthday) {
      this.date = this.user.birthday.split('.');
    }
    if (this.user.picture === undefined) {
      this.user.picture = '/assets/svg-icon/user.png';
    }
  }

  toDataURL(url, callback) {
    console.log(url);
    const xhr = new XMLHttpRequest();
    xhr.onload = () => {
      const reader = new FileReader();
      reader.onloadend = () => {
        callback(reader.result);
      };
      reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
  }

  loadImg(img: any) {
    this.avatar = img.files[0];
    const fd = new FormData();
    fd.append('avatar', this.avatar);
    const fls = new FileReader();
    fls.readAsDataURL(img.files[0]);
    fls.addEventListener('load', () => {
      document.getElementById('pict-load').style.backgroundImage = 'url(' + fls.result + ')';
      this.authService.updateAvatar(fd).subscribe(
        res => console.log(res),
        err => console.log(err)
      );
    }, false);
  }

  send(req: FormData) {
    // let type = 'image/jpeg' + this.user.picture.split('.').pop();
    let type = 'image/jpeg';
    if (this.user.picture[0] === '.') {
      this.user.picture = this.user.picture.slice(1);
    }
    // const url = 'https://lk.moleson.pro' + this.user.picture;
    const url = '/api/user/update/avatar';
    console.log(url);
    if (type === 'svg') {
      type += '+xml';
    }
    /*
    this.toDataURL(url, dataUrl => {
      const file = new File([dataUrl], 'passport', {type});
      req.append('passport', file);
    });
     */
    //const queryString = new URLSearchParams(new FormData(myForm)).toString()

    this.authService.updateUser(req).subscribe(res => {
      this.notificationType = 'success-msg';
      this.notificationText = 'Данные успешно изменены';
      console.log(res);
    }, err => {
      this.notificationType = 'error-msg';
      if (err.error.data === 'It is not allowed to change personal data') {
        this.notificationText = 'Данные нельзя измененить';
      } else {
        this.notificationText = 'Необходимо заполнить все поля формы';
      }
      console.warn(err);
    });

    /*
    this.toDataURL(url, dataUrl => {
      const file = new File([dataUrl], 'avatar', {type});
      req.append('avatar', file);
      this.authService.updateUser(req).subscribe(res => {
        this.notificationType = 'success-msg';
        this.notificationText = 'Данные успешно изменены';
        console.log(res);
      }, err => {
        this.notificationType = 'error-msg';
        if (err.error.data === 'It is not allowed to change personal data') {
          this.notificationText = 'Данные нельзя измененить';
        } else {
          this.notificationText = 'неизвестная ошибка';
        }
        console.warn(err);
      });
    });
     */
    this.scrollTo(window, 0, 100);
  }

  scrollTo(element, to, duration) {
    if (duration <= 0) {
      return;
    }
    const difference = to - element.pageYOffset;
    const perTick = difference / duration * 10;

    setTimeout(() => {
      element.scroll(0, element.pageYOffset + perTick);
      if (element.pageYOffset === to) {
        return;
      }
      this.scrollTo(element, to, duration - 10);
    }, 10);
  }

  updatePhone() {
    this.authService.updatePhone(this.user.phone.toString()).subscribe(
      () => {
        console.log('Телефон успешно изменен');
      }, err => {
        console.warn(err);
      }
    );
  }

  update() {
    this.notificationType = 'loading';
    this.user.fullName = this.fullname.join(' ');
    this.user.birthday = this.formatDate();
    const req = new FormData();
    req.append('fullName', this.user.fullName);
    req.append('gender', this.user.gender);
    req.append('birthday', this.user.birthday);
    req.append('citizenship', this.user.citizenship);
    req.append('passportId', this.user.passportId);
    req.append('issued', this.user.issued);
    req.append('dateIssued', this.user.dateIssued);
    req.append('departmentCode', this.user.departmentCode);
    req.append('registrationAddress', this.user.registrationAddress);
    req.append('SNILS', this.user.SNILS);
    req.append('INN', this.user.INN);
    req.append('phone', this.user.phone ? this.user.phone.toString() : ' ');
    this.send(req);
  }
}
