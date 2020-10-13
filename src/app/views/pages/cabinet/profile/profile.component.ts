import {Component, OnInit} from '@angular/core';
import {User} from '../../../../core/auth/_models/user.models';
import {AuthService} from '../../../../core/auth/_services/auth.service';
import {TokenService} from '../../../../core/token/token.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';

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
  form: FormGroup;
  private form_in_progress: boolean;


  constructor(
    private authService: AuthService,
    // tslint:disable-next-line:variable-name
    protected _formBuilder: FormBuilder,
    private toastr: ToastrService,
    private tokenService: TokenService) {
    this.form_in_progress = false;
  }

  ngOnInit() {
    this.tokenService.getUserByToken().subscribe(res => {
      this.user = res;
      console.log(this.user);
      this.checkUserData();
    });
    for (let i = 1; i <= 31; i++) {
      this.days.push(i);
    }
    for (let i = 1930; i <= 2002; i++) {
      this.year.push(i);
    }
  }

  initFormData() {
    this.form = this._formBuilder.group({
      fullname0: [this.fullname[0], Validators.required],
      fullname1: [this.fullname[1], Validators.required],
      fullname2: [this.fullname[2], Validators.required],
      gender: [this.user.gender, [Validators.required]],
      date0: [this.date[0], [Validators.required]],
      date1: [this.date[1], [Validators.required]],
      date2: [this.date[2], [Validators.required]],
      citizenship: [this.user.citizenship, Validators.required],
      passportId: [this.user.passportId, Validators.required],
      issued: [this.user.issued, Validators.required],
      dateIssued: [this.user.dateIssued, Validators.required],
      departmentCode: [this.user.departmentCode, Validators.required],
      registrationAddress: [this.user.registrationAddress, Validators.required],
      // SNILS: [this.user.SNILS, Validators.required],
      // INN: [this.user.INN, Validators.required],
      // phone: [this.user.phone, Validators.required],
    });
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
    this.initFormData();
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

  initUserFromForm() {
    const fullName = '';
    this.user.fullName = fullName.concat(
      this.form.get('fullname0').value,
      ' ',
      this.form.get('fullname1').value,
      ' ',
      this.form.get('fullname2').value
    );

    this.user.gender = this.form.get('gender').value;
    this.user.registrationAddress = this.form.get('registrationAddress').value;
    this.user.passportId = this.form.get('passportId').value;
    this.user.citizenship = this.form.get('citizenship').value;
    this.user.issued = this.form.get('issued').value;
    this.user.dateIssued = this.form.get('dateIssued').value;
    this.user.departmentCode = this.form.get('departmentCode').value;
    // this.user.INN = this.form.get('INN').value;
    // this.user.SNILS = this.form.get('SNILS').value;

    const birthday = '';
    this.user.birthday = birthday.concat(
      this.form.get('date0').value,
      '.',
      this.form.get('date1').value,
      '.',
      this.form.get('date2').value,
      );
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
    // console.log(this.form.controls);

    /*
    for(const field in this.form.controls) { // 'field' is a string
      const control = this.form.get(field);
      if ( control.status === 'INVALID' ) {
        console.log(field);
        console.log(control);
      } else {
      }
    }
     */

    if (!this.form.valid) {
      console.log('invalid form');
      this.notificationType = 'hidden-msg';
      return false;
    } else {
      this.initUserFromForm();
      req = this.createRequest();
      console.log('form valid');
    }
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
      // Перегружаем страничку, чтобы обновилась инфа юзера
      window.location.href = '/cabinet/profile';
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
        this.toastr.success('Номер телефона изменен', 'Успешно');
        // console.log('Телефон успешно изменен');
      }, err => {
        this.toastr.error('Не указан номер телефона', 'Ошибка');
        // console.warn(err);
      }
    );
  }

  update() {
    this.notificationType = 'loading';
    this.form_in_progress = true;
    this.user.fullName = this.fullname.join(' ');
    this.user.birthday = this.formatDate();
    const req = this.createRequest();
    this.send(req);
  }

  createRequest() {
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
    // req.append('SNILS', this.user.SNILS);
    // req.append('INN', this.user.INN);
    req.append('phone', this.user.phone ? this.user.phone.toString() : ' ');
    return req;
  }

  getErrorClass(controlName: string) {
    if ( !this.form_in_progress ) {
      return '';
    }
    if ( this.form.controls[controlName].status === 'INVALID' ) {
      return 'error';
    }
    return '';
  }
}
