const path = '/assets/svg-icon/menu/';

class MenuConfig {
  menuSliced = false;
  leftMenu = [
    {
      link: 'dashboard',
      icon: 'home',
      title: 'Главная'
    },
    {
      link: 'franchises',
      icon: 'card',
      title: 'Франшизы'
    },
    /*
    {
      link: 'news',
      icon: 'news',
      title: 'Новости'
    },
     */
    {
      link: 'partners',
      icon: 'partner',
      title: 'Партнёрам'
    },
    {
      link: 'invite',
      icon: 'partner',
      title: 'Пригласить в проект'
    },
    {
      link: 'docs',
      icon: 'docs',
      title: 'Документация'
    },
    {
      link: 'help',
      icon: 'help',
      title: 'Помощь'
    },
    {
      link: 'https://moleson.pro/',
      icon: 'docs',
      external: true,
      title: 'О нас'
    },
  ];
  constructor() {
    this.leftMenu.forEach(key => {
      key.icon = path + key.icon + '.svg';
    });
  }
}

export const Menu = new MenuConfig();
