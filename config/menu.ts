import ROUTES from './routes';

export const MENU = [
  { label: 'Home', url: ROUTES.INDEX },
  { label: 'About Us', url: ROUTES.ABOUT },
  { label: 'Contact Us', url: ROUTES.CONTACT },

  {
    label: 'Products',
    items: [
      { label: 'test1', url: 'https://www.google.com.lb/' },
      { label: 'test1', url: 'https://www.google.com.lb/' },
      { label: 'test1', url: 'https://www.google.com.lb/' },
    ],
  },
];
