const menuData = [
  { id: 1, title: 'Inicio', path: '/', newTab: false },
  { id: 2, title: 'Noticias', path: '/news', newTab: false },
  { id: 3, title: 'Promociones', path: '/promotions', newTab: false },
  { id: 4, title: 'Soporte', path: '/contact', newTab: false },
  {
    id: 5,
    title: 'Páginas',
    newTab: false,
    submenu: [
      {
        id: 41,
        title: 'Delta',
        path: '/about',
        newTab: false,
      },
      {
        id: 42,
        title: 'Foxtrot',
        path: '/contact',
        newTab: false,
      },
      {
        id: 43,
        title: 'Blog 1',
        path: '/',
        newTab: false,
      },
      {
        id: 44,
        title: 'Blog 2',
        path: '/',
        newTab: false,
      },
      {
        id: 45,
        title: 'Blog 3',
        path: '/',
        newTab: false,
      },
      {
        id: 46,
        title: 'Blog 4',
        path: '/',
        newTab: false,
      },
    ],
  },
];

export default menuData;
