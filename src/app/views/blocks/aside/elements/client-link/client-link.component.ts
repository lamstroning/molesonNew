import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {User} from '../../../../../core/auth/_models/user.models';
import {AuthService} from '../../../../../core/auth/_services/auth.service';
import {TokenService} from '../../../../../core/token/token.service';
import {ReferralService} from '../../../../../core/referral/_services/referral.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-client-link',
  templateUrl: './client-link.component.html',
  styleUrls: ['./client-link.component.scss']
})
export class ClientLinkComponent implements OnInit {
  @ViewChild('selectInput', {static: false}) linkInput: ElementRef;
  user: User;
  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private referralService: ReferralService,
    private toastr: ToastrService,
    ) { }

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
    this.toastr.success('Ссылка скопирована в буфер обмена', 'Выполнено успешно');
  }

}
