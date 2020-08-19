import {Component, OnInit} from '@angular/core';
import {ReferralService, PartnersList} from '../../../../core/referral';
import {TokenService} from '../../../../core/token/token.service';

@Component({
  selector: 'app-partners-analytics',
  templateUrl: './partners-analytics.component.html',
  styleUrls: ['./partners-analytics.component.scss']
})
export class PartnersAnalyticsComponent implements OnInit {
  partnersList: PartnersList[] = [];
  referralsArray: any;
  blocks = [
    {
      name: 'Количество регистраций по личной ссылке',
      cost: 0,
      dollars: false
    },
    {
      name: 'Общее количество регистраций в структуре',
      cost: 0,
      dollars: false
    },
    {
      name: 'Сумма покупок долей (общая)',
      cost: 0,
      dollars: true
    },
    {
      name: 'Сумма агентских вознаграждений',
      cost: 0,
      dollars: true
    },
    {
      name: 'Средний показатель суммы инвестирования действующих инвесторов',
      cost: 0,
      dollars: true
    },
  ];


  number_formatted(num: number) {
    return num.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1' + ' ');
  }

  constructor(private referralService: ReferralService,
              public tokenService: TokenService) {
    this.referralsArray = {};
  }

  ngOnInit() {
    this.referralService.getReferralList().subscribe(res => {

        for (const item of res.data) {
          const partnerItem = new PartnersList(item);
          this.partnersList.push(partnerItem);
          this.referralsArray[partnerItem.idUser] = '';
          this.referralsArray[partnerItem.idUser] = 'test';
        }
        // console.log(this.partnersList);
      },
      err => {
        console.warn(err);
      }
    );
  }

  getTotalReferrals(_id: string) {
    console.log('total');
    console.log(_id);
    return this.referralsArray[_id];
  }
}

interface Partners {
  name: string;
  cost: number;
  sum: number;
  icons: string[];
  dataReg: string;
  dataVisit: string;
  partners: Partners[];
}
