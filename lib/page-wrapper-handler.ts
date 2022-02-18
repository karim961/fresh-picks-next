import { getSingleTypes } from '../api/cms';
import { PageWrapperData } from '../models/page-wrapper';
import { MENU } from '../config/menu';
import { DropDownProps } from '../models/drop-down';
import { getProductsLink } from '../utils/strings';

const GenerateMenu = (categories: any): Array<DropDownProps> => {
  const menuCategories = categories.map((cat: { title: any; slug: any }) => ({
    label: cat.title,
    url: getProductsLink(cat.slug),
  }));

  return MENU.map((item) =>
    item.label === 'Products'
      ? { label: item.label, items: menuCategories }
      : item,
  );
};

export async function getPageWrapper(): Promise<PageWrapperData> {
  // const infoSection = await getSingleTypes('info-banner');
  const header = await getSingleTypes('header');
  const footer = await getSingleTypes('footer');
  const categories = await getSingleTypes('categories');

  return {
    header: { ...header, menu: GenerateMenu(categories) },
    footer,
  };
}
