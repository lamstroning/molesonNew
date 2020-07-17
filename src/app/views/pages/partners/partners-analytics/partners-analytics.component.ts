import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partners-analytics',
  templateUrl: './partners-analytics.component.html',
  styleUrls: ['./partners-analytics.component.scss']
})
export class PartnersAnalyticsComponent implements OnInit {
  blocks = [
    {
      name: 'Количество регистраций по личной ссылке',
      cost: 20,
      dollars: false
    },
    {
      name: 'Общее количество регистраций в структуре',
      cost: 120,
      dollars: false
    },
    {
      name: 'Сумма покупок долей (общая)',
      cost: 143200,
      dollars: true
    },
    {
      name: 'Сумма агентских вознаграждений',
      cost: 14970,
      dollars: true
    },
    {
      name: 'Средний показатель суммы инвестирования действующих инвесторов',
      cost: 1205,
      dollars: true
    },
  ];
  partnersList: Partners[] = [
    {
      name: 'Дмитрий Лебедев',
      cost: 200,
      sum: 10200,
      icons: [
        '/assets/img/franchises/col-ico.png',
        '/assets/img/franchises/dodo-ico.png',
        '/assets/img/franchises/black-ico.png'
      ],
      dataReg: '10.05.2020',
      dataVisit: '12.07.2020',
      partners: [
        {
          name: 'Дмитрий Лебедев',
          cost: 200,
          sum: 10200,
          icons: [
            '/assets/img/franchises/col-ico.png',
            '/assets/img/franchises/dodo-ico.png',
            '/assets/img/franchises/black-ico.png'
          ],
          dataReg: '10.05.2020',
          dataVisit: '12.07.2020',
          partners: null
        },
        {
          name: 'Дмитрий Лебедев',
          cost: 200,
          sum: 10200,
          icons: [
            '/assets/img/franchises/col-ico.png',
            '/assets/img/franchises/dodo-ico.png',
            '/assets/img/franchises/black-ico.png'
          ],
          dataReg: '10.05.2020',
          dataVisit: '12.07.2020',
          partners: null
        }
      ]
    },
    {
      name: 'Дмитрий Лебедев',
      cost: 200,
      sum: 10200,
      icons: [
        '/assets/img/franchises/col-ico.png',
        '/assets/img/franchises/dodo-ico.png',
        '/assets/img/franchises/black-ico.png'
      ],
      dataReg: '10.05.2020',
      dataVisit: '12.07.2020',
      partners: [
        {
          name: 'Дмитрий Лебедев',
          cost: 200,
          sum: 10200,
          icons: [
            '/assets/img/franchises/col-ico.png',
            '/assets/img/franchises/dodo-ico.png',
            '/assets/img/franchises/black-ico.png'
          ],
          dataReg: '10.05.2020',
          dataVisit: '12.07.2020',
          partners: null
        },
        {
          name: 'Дмитрий Лебедев',
          cost: 200,
          sum: 10200,
          icons: [
            '/assets/img/franchises/col-ico.png',
            '/assets/img/franchises/dodo-ico.png',
            '/assets/img/franchises/black-ico.png'
          ],
          dataReg: '10.05.2020',
          dataVisit: '12.07.2020',
          partners: null
        }
      ]
    },
    {
      name: 'Дмитрий Лебедев',
      cost: 200,
      sum: 10200,
      icons: [
        '/assets/img/franchises/col-ico.png',
        '/assets/img/franchises/dodo-ico.png',
        '/assets/img/franchises/black-ico.png'
      ],
      dataReg: '10.05.2020',
      dataVisit: '12.07.2020',
      partners: [
        {
          name: 'Дмитрий Лебедев',
          cost: 200,
          sum: 10200,
          icons: [
            '/assets/img/franchises/col-ico.png',
            '/assets/img/franchises/dodo-ico.png',
            '/assets/img/franchises/black-ico.png'
          ],
          dataReg: '10.05.2020',
          dataVisit: '12.07.2020',
          partners: null
        },
        {
          name: 'Дмитрий Лебедев',
          cost: 200,
          sum: 10200,
          icons: [
            '/assets/img/franchises/col-ico.png',
            '/assets/img/franchises/dodo-ico.png',
            '/assets/img/franchises/black-ico.png'
          ],
          dataReg: '10.05.2020',
          dataVisit: '12.07.2020',
          partners: null
        }
      ]
    },
    {
      name: 'Дмитрий Лебедев',
      cost: 200,
      sum: 10200,
      icons: [
        '/assets/img/franchises/col-ico.png',
        '/assets/img/franchises/dodo-ico.png',
        '/assets/img/franchises/black-ico.png'
      ],
      dataReg: '10.05.2020',
      dataVisit: '12.07.2020',
      partners: [
        {
          name: 'Дмитрий Лебедев',
          cost: 200,
          sum: 10200,
          icons: [
            '/assets/img/franchises/col-ico.png',
            '/assets/img/franchises/dodo-ico.png',
            '/assets/img/franchises/black-ico.png'
          ],
          dataReg: '10.05.2020',
          dataVisit: '12.07.2020',
          partners: null
        },
        {
          name: 'Дмитрий Лебедев',
          cost: 200,
          sum: 10200,
          icons: [
            '/assets/img/franchises/col-ico.png',
            '/assets/img/franchises/dodo-ico.png',
            '/assets/img/franchises/black-ico.png'
          ],
          dataReg: '10.05.2020',
          dataVisit: '12.07.2020',
          partners: null
        }
      ]
    },
    {
      name: 'Дмитрий Лебедев',
      cost: 200,
      sum: 10200,
      icons: [
        '/assets/img/franchises/col-ico.png',
        '/assets/img/franchises/dodo-ico.png',
        '/assets/img/franchises/black-ico.png'
      ],
      dataReg: '10.05.2020',
      dataVisit: '12.07.2020',
      partners: [
        {
          name: 'Дмитрий Лебедев',
          cost: 200,
          sum: 10200,
          icons: [
            '/assets/img/franchises/col-ico.png',
            '/assets/img/franchises/dodo-ico.png',
            '/assets/img/franchises/black-ico.png'
          ],
          dataReg: '10.05.2020',
          dataVisit: '12.07.2020',
          partners: null
        },
        {
          name: 'Дмитрий Лебедев',
          cost: 200,
          sum: 10200,
          icons: [
            '/assets/img/franchises/col-ico.png',
            '/assets/img/franchises/dodo-ico.png',
            '/assets/img/franchises/black-ico.png'
          ],
          dataReg: '10.05.2020',
          dataVisit: '12.07.2020',
          partners: null
        }
      ]
    },
    {
      name: 'Дмитрий Лебедев',
      cost: 200,
      sum: 10200,
      icons: [
        '/assets/img/franchises/col-ico.png',
        '/assets/img/franchises/dodo-ico.png',
        '/assets/img/franchises/black-ico.png'
      ],
      dataReg: '10.05.2020',
      dataVisit: '12.07.2020',
      partners: [
        {
          name: 'Дмитрий Лебедев',
          cost: 200,
          sum: 10200,
          icons: [
            '/assets/img/franchises/col-ico.png',
            '/assets/img/franchises/dodo-ico.png',
            '/assets/img/franchises/black-ico.png'
          ],
          dataReg: '10.05.2020',
          dataVisit: '12.07.2020',
          partners: null
        },
        {
          name: 'Дмитрий Лебедев',
          cost: 200,
          sum: 10200,
          icons: [
            '/assets/img/franchises/col-ico.png',
            '/assets/img/franchises/dodo-ico.png',
            '/assets/img/franchises/black-ico.png'
          ],
          dataReg: '10.05.2020',
          dataVisit: '12.07.2020',
          partners: null
        }
      ]
    },
    {
      name: 'Дмитрий Лебедев',
      cost: 200,
      sum: 10200,
      icons: [
        '/assets/img/franchises/col-ico.png',
        '/assets/img/franchises/dodo-ico.png',
        '/assets/img/franchises/black-ico.png'
      ],
      dataReg: '10.05.2020',
      dataVisit: '12.07.2020',
      partners: [
        {
          name: 'Дмитрий Лебедев',
          cost: 200,
          sum: 10200,
          icons: [
            '/assets/img/franchises/col-ico.png',
            '/assets/img/franchises/dodo-ico.png',
            '/assets/img/franchises/black-ico.png'
          ],
          dataReg: '10.05.2020',
          dataVisit: '12.07.2020',
          partners: null
        },
        {
          name: 'Дмитрий Лебедев',
          cost: 200,
          sum: 10200,
          icons: [
            '/assets/img/franchises/col-ico.png',
            '/assets/img/franchises/dodo-ico.png',
            '/assets/img/franchises/black-ico.png'
          ],
          dataReg: '10.05.2020',
          dataVisit: '12.07.2020',
          partners: null
        }
      ]
    },
  ];
  number_formatted(num: number) {
    return num.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1' + ' ');
  }
  constructor() { }

  ngOnInit() {
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
