import ROUTES from '../config/routes';

export const GetAnimation = (name: string): string => {
  return 'animate__' + name;
};

export const getProductsLink = (slug: string): string => {
  return `${ROUTES.PRODUCTS}/${slug}`;
};

export const getSingleProductLink = (slug: string): string => {
  return `${ROUTES.PRODUCT}/${slug}`;
};
