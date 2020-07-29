import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

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
  username: string;
  fullname: string;
  referralLink: string;
  constructor(private activateRoute: ActivatedRoute) {
    this.referralLink = activateRoute.snapshot.params.id;
  }
  switchStage() {
    if (!this.fullname) {
      this.msgText = 'Введите ваше ФИО';
      this.msgType = 'error-msg';
      return;
    }
    if (parseInt(this.fullname.replace( /\D/g, ''), 10) || 0 !== 0) {
      this.msgText = 'В имени не должно содержаться цифр';
      this.msgType = 'error-msg';
      return;
    }
    if (!this.username) {
      this.msgText = 'Введите логин';
      this.msgType = 'error-msg';
      return;
    }
    this.nextStage = true;
    this.regDate.fullname = this.fullname;
    this.regDate.username = this.username;
    this.regDate.referralLink = this.referralLink;
    this.nextStageChange.emit(this.nextStage);
    this.regDateChange.emit(this.regDate);
  }
  ngOnInit() {
  }

}
