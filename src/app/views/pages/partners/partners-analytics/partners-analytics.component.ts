import {Component, OnInit} from '@angular/core';
import {ReferralService, PartnersList, PartnersStat} from '../../../../core/referral';
import {TokenService} from '../../../../core/token/token.service';

@Component({
  selector: 'app-partners-analytics',
  templateUrl: './partners-analytics.component.html',
  styleUrls: ['./partners-analytics.component.scss']
})
export class PartnersAnalyticsComponent implements OnInit {
  partnersList: PartnersList[] = [];
  referralsArray: any;
  partnersStat: PartnersStat;

  blocks = [
    {
      name: 'Количество регистраций по личной ссылке',
      key: 'registrationsByLink',
      cost: 0,
      dollars: false
    },
    {
      name: 'Общее количество регистраций в структуре',
      key: 'registrations',
      cost: 0,
      dollars: false
    },
    {
      name: 'Сумма покупок долей (общая)',
      key: 'moneyInStructure',
      cost: 0,
      dollars: true
    },
    {
      name: 'Сумма агентских вознаграждений',
      key: 'referralMoney',
      cost: 0,
      dollars: true
    },
    {
      name: 'Средний показатель суммы инвестирования действующих инвесторов',
      key: 'avgSum',
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
    this.referralService.getReferralStat().subscribe(res => {
        if (res.status === 'success') {
          this.partnersStat = new PartnersStat(res.data);
          // console.log(this.partnersStat);
        }
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
