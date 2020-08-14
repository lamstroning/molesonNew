import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {User} from '../../../core/auth/_models/user.models';
import {AuthService} from '../../../core/auth/_services/auth.service';
import {TokenService} from '../../../core/token/token.service';
import {ReferralService} from '../../../core/referral';
import {ToastrService} from 'ngx-toastr';
import {OperationsModel} from '../../../core/operations/_models/operations.model';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.scss']
})
export class InviteComponent implements OnInit {
  @ViewChild('selectInput', {static: false}) linkInput: ElementRef;
  user: User;
  agreed: boolean;
  start: boolean;
  agreeCheckbox: boolean;
  constructor(
    private tokenService: TokenService,
    private toastr: ToastrService,
    private referralService: ReferralService,
  ) {
    this.agreeCheckbox = false;
  }

  ngOnInit() {
    this.tokenService.getUserByToken().subscribe(res => {
      this.user = res;
      if (!res.referralLink) {
        this.referralService.updateLink();
      }
    }, err => {
      console.log(err);
    }, () => {
    });
  }
  copyText() {
    this.linkInput.nativeElement.select();
    document.execCommand('copy');
  }

  startPartner() {
    this.start = true;
  }

  confirmPartner() {
    if ( !this.agreeCheckbox ) {
      this.toastr.error('Прочитайте положения и правила использования и отметьте галочку для согласия', 'Внимание!');
      return false;
    }
    this.tokenService.setAgentStatus().subscribe(res => {
      if ( res.status === 'success' ) {
        this.toastr.success('Вы получили статус агента', 'Операция успешна');
        window.location.href = '/partners/analytics';
      } else {
        this.toastr.error('Невозможно выполнить операцию', 'Ошибка');
      }
    }, err => {
      this.toastr.error('Невозможно выполнить операцию', 'Ошибка');
      console.warn(err);
    }, () => {
    });;

  }
}
