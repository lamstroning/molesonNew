import {Component, OnInit} from '@angular/core';
import {ReferralService, PartnersList} from '../../../../core/referral';

@Component({
  selector: 'app-partners-analytics',
  templateUrl: './partners-analytics.component.html',
  styleUrls: ['./partners-analytics.component.scss']
})
export class PartnersAnalyticsComponent implements OnInit {
  partnersList: PartnersList[] = [];
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

  constructor(private referralService: ReferralService) {
  }

  ngOnInit() {
    this.referralService.getReferralList().subscribe(res => {

        for (const item of res.data) {
          this.partnersList.push(new PartnersList(item));
        }
        console.log(this.partnersList);
      },
      err => {
        console.warn(err);
      }
    );
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
