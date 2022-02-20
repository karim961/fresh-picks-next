import ROUTES from './routes';

export const MENU = [
  { label: 'Home', url: ROUTES.INDEX },
  {
    label: 'Products',
    items: <
      Array<{
        id?: number;
        label: string;
        url: string;
      }>
    >[],
  },
  { label: 'About Us', url: ROUTES.ABOUT },
  { label: 'Quality Assurance', url: ROUTES.QUALITY },
  { label: 'Contact Us', url: ROUTES.CONTACT },
];
