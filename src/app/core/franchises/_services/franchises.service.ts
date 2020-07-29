import { Injectable } from '@angular/core';
import {FranchisesModel} from '../_models/franchises.model';

@Injectable({providedIn: 'root'})
export class FranchisesService {
  franchisesList: FranchisesModel[] = [];
  catalogBlock = true;
  filterName: string;
  filterType: string;
  constructor() {
    this.reloadList();
  }
  reloadList() {
    this.franchisesList = [];
    this.franchisesList.push(new FranchisesModel(franchises1, 0));
    this.franchisesList.push(new FranchisesModel(franchises2, 1));
    // for (let i = 0; i <= 45; i++) {
    //   if (i % 2 === 0) {
    //     this.franchisesList.push(new FranchisesModel(franchises1, i));
    //   } else  {
    //     this.franchisesList.push(new FranchisesModel(franchises2, i));
    //   }
    //   else {
    //     this.franchisesList.push(new FranchisesModel(franchises3, i));
    //   }
    // }
  }
  filterFranchises() {
    this.reloadList();
    if (!this.filterName && !this.filterType) {
      return ;
    }
    this.franchisesList = this.franchisesList.filter(item => {
      if (!this.filterType) {
        return item;
      }
      return item.status === this.filterType;
    });
    this.franchisesList = this.franchisesList.filter(item => {
      if (!this.filterName) {
        return item;
      }
      return item.name.toLocaleLowerCase().indexOf(this.filterName.toLocaleLowerCase()) !== -1;
    });
  }
}

const franchises1: FranchisesModel =   {
  name: 'Colizium',
  ico: '/assets/img/franchises/col-ico.png',
  img: '/assets/img/franchises/col.png',
  imgList: [
    '/assets/img/franchises/imglist/black1.png',
    '/assets/img/franchises/imglist/black2.png',
    '/assets/img/franchises/imglist/black3.png',
    '/assets/img/franchises/imglist/black4.png'
  ],
  adresse: 'Москва, улица Крылатские Холмы, 26к2',
  status: 'Сбор инвестиций',
  balance: 320,
  progress: 20,
  precent: 22,
  allCost: 6966336,
  allCostDollars: 100000,
  id: 0,
  color: '#FF9F19',
  income: 24,
  divideCost: 100,
  participant: 45,
  shortDesc: '',
  detailDesc: 'Киберспорт – самая быстрорастущая отрасль индустрии развлечений в России и в мире. Вслед за ростом отрасли стремительно растет и инфраструктура. Поэтому сегодня киберспортивные арены и являются очень интересной нишей для инвестирования.\n' +
    'СOLIZEUM – это самая крупная сеть киберспортивных арен в России. На данный момент функционируют более 65 арен. В стадии запуска еще около 60.\n' +
    'Стремительный рост обеспечен, во-первых, профессиональным подходом к своему делу, индивидуальной работой с каждым партнером и повышенное внимание ко всем деталям. Во-вторых, ростом самого рынка киберспорта: его объем увеличивается не менее чем на 30% в год.\n' +
    'Арены СOLIZEUM — это пространства, в которые можно прийти в компании друзей, поиграть в любимые игры и просто хорошо провести время.\n' +
    'Команд COLIZEUM знает, как делать современный и легкоуправляемый бизнес.\n',
  advantages: [
    'Эффективная бизнес-модель',
    'Узнаваемость, лояльность к бренду',
    'Ежегодный рост рынка киберспорта на 30%',
    'Нет специальных технических требований к покупателям франшизы и персоналу.',
    'Проводим обучение и стажировку.',
    'Есть техническая поддержка 24/7.',
  ],
  companyHistory: 'Один из 4-х самых популярных видов спорта в России это киберспорт.\n' +
    'Colizeum - сеть киберспортивных арен. Атмосфера в каждом клубе - особый интерьер, самые мощные компьютеры, кафе. От основателей франшизы TOPGUN\n',
};
const franchises2: FranchisesModel =   {
  name: 'YOKO',
  ico: '/assets/img/franchises/yoko-ico.png',
  img: '/assets/img/franchises/yoko.jpg',
  imgList: [
    '/assets/img/franchises/imglist/black1.png',
    '/assets/img/franchises/imglist/black2.png',
    '/assets/img/franchises/imglist/black3.png',
    '/assets/img/franchises/imglist/black4.png',
  ],
  adresse: 'Москва, улица Крылатские Холмы, 26к2',
  status: 'Запуск',
  balance: 0,
  progress: 0,
  precent: 22,
  allCost: 10524665,
  allCostDollars: 100000,
  id: 0,
  color: '#31B984',
  income: 24,
  divideCost: 100,
  participant: 45,
  shortDesc: '',
  detailDesc: '«YOKO» – это магазин-склад с удобной выкладкой товаров и интерьером в запоминающимся японском стиле.\n' +
    '\n' +
    'Категории реализуемых товаров:\n' +
    'YOKO Health – товары для здоровья (защитные маски, санитайзеры, антисептики, одноразовые перчатки и др.);\n' +
    'Yoko Life – товары повседневного использования (термосы, ланч-боксы, бутылочки для воды, канцелярия, зонты, тапочки, носки…);\n' +
    'Yoko Home – бытовые товары (формочки для мороженого, для выпечки, ножи, емкости для хранения продуктов, заварники, чашки, часы, средства для стирки…);\n' +
    'Yoko Care – косметика по уходу (крема, скрабы, тоники, средства личной гигиены, наборы для бани, маникюрный инструмент, расчески и т.д.);\n' +
    'Yoko Beauty – косметика декоративная (все для красивого макияжа, парфюмерия, аксессуары для волос и т.д.);\n' +
    'Yoko Travel – товары для путешествий (чемоданы, органайзеры, дорожные подушки, тревел-наборы…);\n' +
    'Yoko Sport – спортивные товары (скакалки со счетчиками, электронные экспандеры…);\n' +
    'Yoko Electronics – мелкая электроника (настольные лампы, батарейки, зарядные устройства, флешки, весы, power-банки…);\n' +
    'Yoko Accessories – аксессуары (наушники, чехлы для телефонов, косметички, рюкзаки…);\n' +
    'Yoko Food – продукты питания (снеки, кондитерские изделия, сухофрукты…);\n' +
    'Yoko Kids – товары для детей (конструкторы, развивающие игрушки, машинки…).\n' +
    '\n' +
    'Широкий ассортимент, высокое качество товаров и доступные цены — гарантия того, что каждый найдет товар по душе и получит массу приятных эмоций.\n',
  advantages: [
      'BCA Holding – один из лидеров рынка франчайзинга в Восточной Европе;',
      'Востребованный формат магазинов;',
      'эффективная бизнес-модель;',
      'низкие первоначальные инвестиции;',
      'минимальные риски, устойчивость к кризисам;',
      'небольшая площадь арендуемого помещения;',
      'низкие расходы на ремонт;',
      'высокие продажи на квадратный метр;',
      'простота в управлении;',
      'прибыль с первого месяца работы;',
      'узнаваемость магазинов, лояльность к бренду;',
      'поддержка 6-тью департаментами холдинга на всех этапах развития бизнеса;',
      'быстрый запуск магазина: от 1-го до 2-х месяцев;',
      'сетевые скидки от надежных поставщиков;',
      'программа возврата товарных остатков;',
      'востребованный ассортимент с эксклюзивным соотношением цены и качества;',
      'каждый товар полезен в быту и дарит радостные эмоции (80% товаров в корзине покупателя – импульсные покупки);',
  ],
  companyHistory: 'франшиза YOKO - международная сеть магазинов с широким ассортиментом доступных и качественных товаров, где каждый второй клиент становится постоянным.',
};
// const franchises3: FranchisesModel =   {
//     name: 'Black Star Wear',
//     ico: '/assets/img/franchises/black-ico.png',
//     img: '/assets/img/franchises/black.png',
//     imgList: [
//       '/assets/img/franchises/imglist/black1.png',
//       '/assets/img/franchises/imglist/black2.png',
//       '/assets/img/franchises/imglist/black3.png',
//       '/assets/img/franchises/imglist/black4.png'
//     ],
//     adresse: 'Москва, улица Крылатские Холмы, 26к2',
//     status: 'В работе',
//     balance: 120,
//     progress: 100,
//     precent: 24,
//     allCost: 6966336,
//     allCostDollars: 100000,
//     id: 0,
//     color: '#31B984',
//     income: 24,
//     divideCost: 100,
//     participant: 45
// };
