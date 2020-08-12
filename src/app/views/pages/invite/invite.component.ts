import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {User} from '../../../core/auth/_models/user.models';
import {AuthService} from '../../../core/auth/_services/auth.service';
import {TokenService} from '../../../core/token/token.service';
import {ReferralService} from '../../../core/referral';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.scss']
})
export class InviteComponent implements OnInit {
  @ViewChild('selectInput', {static: false}) linkInput: ElementRef;
  user: User;
  constructor(
    private tokenService: TokenService,
    private referralService: ReferralService,
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
  }
}
