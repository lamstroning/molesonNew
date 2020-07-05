export class NewsModel {
  name: string;
  id: number;
  section: string;
  textPreview: string;
  textDetail: string;
  img: string;
  like: number;
  myLike: boolean;
  date: string;
  views: number;
  constructor(id: number = 0, titles: TestDesc) {
    this.name = titles.title;
    this.id =  id;
    this.section = '';
    this.textPreview = titles.subtitle;
    this.textDetail = textDt;
    this.img = titles.img;
    this.like = 124;
    this.myLike = false;
    this.date = '04 05 2020, 09:50';
    this.views = 2323;
  }
}
interface TestDesc {
  title: string;
  subtitle: string;
  img: string;
}
const textDt = 'В деталях Рубль в среду оставался стабильным к доллару ' +
  'США и немного ослаб в паре с европейской валютой. Пара USD/RUB полностью перекрыла гэп' +
  ' от 10 марта, спровоцированный развалом предыдущей сделки ОПЕК+ и сопутствующим обвалом нефтяных цен. ' +
  'В текущей ситуации техническая картина располагает к росту инструмента USD/RUB. Наличие сильного уровня поддержки, ' +
  'разворотная свеча «доджи» на дневном графике, коррекция по нефти и отскок индекса доллара DXY — создают риски ' +
  'ослабления рубля к концу недели.';
