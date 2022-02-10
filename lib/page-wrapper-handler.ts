import { getSingleTypes } from '../api/cms';
import { PageWrapperData } from '../models/page-wrapper';

export async function getPageWrapper(): Promise<PageWrapperData> {
  // const infoSection = await getSingleTypes('info-banner');
  const header = await getSingleTypes('header');
  const footer = await getSingleTypes('footer');

  return {
    header,
    footer,
  };
}
