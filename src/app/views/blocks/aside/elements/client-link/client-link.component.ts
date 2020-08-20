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
  share(destination: string, link: string) {
    let destLink = '';
    const title = 'Moleson Investment Platform';
    switch (destination) {
      case 'fb':
        destLink = 'https://www.facebook.com/sharer.php?src=sp&u=' + link +
          '&title=' + title;
        break;
      case 'ok':
        destLink = 'https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&st.title' + title +
          '&st.shareUrl=' + link;
        break;
      default:
        destLink = 'https://vk.com/share.php?url=' + link +
          '&title=' + title;
        break;
    }
    const popup = window.open(destLink, '_blank', `toolbar=no,
                                    status=no,
                                    menubar=no,
                                    scrollbars=yes,
                                    resizable=yes,
                                    width=500px,
                                    height=400px`);
    popup.moveTo(200, 200);
  }
}
