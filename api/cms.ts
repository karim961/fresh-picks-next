import axios from 'axios';
import { HEADERS, URLS } from '../config/strings';

const cmsBaseUrl = process.env.NEXT_PUBLIC_CMS_BASE_URL || '';
const { JSON } = HEADERS;

export type Section = {
  __component: string;
  id: number;
  content: {
    id: number;
    title: string;
    description: string;
    logo: Array<any>;
  };
  actions: Array<any>;
  media: Array<any>;
};

async function apiCall(
  link: string,
  config: { [key: string]: any },
): Promise<any> {
  return axios
    .get(link, config)
    .then((res: { data: any }) => res.data)
    .catch((err: any) => {
      // eslint-disable-next-line no-console
      console.error(err);
      return null;
    });
}

export async function getProduct(slug: string = ''): Promise<any> {
  const pagesUrl = `${URLS.PRODUCTS_URL}${slug}`;
  const headers = { accept: JSON };
  return apiCall(pagesUrl, { headers });
}

export async function getNews(slug: string = ''): Promise<any> {
  const pagesUrl = `${URLS.NEWS_URL}${slug}`;
  const headers = { accept: JSON };
  return apiCall(pagesUrl, { headers });
}
export async function getCategory(slug: string = ''): Promise<any> {
  const pagesUrl = `${URLS.CATS_URL}${slug}`;
  const headers = { accept: JSON };
  return apiCall(pagesUrl, { headers });
}

export async function getPage(link: string = ''): Promise<any> {
  const pageUrl = `${cmsBaseUrl}/${link}`;
  const headers = { accept: JSON };

  return apiCall(pageUrl, { headers });
} // gets a single page back and not all pages, it takes a link as an argument with default value '' which is the link of the index page

export async function getSingleTypes(endpoint: string): Promise<any> {
  const url = `${cmsBaseUrl}/${endpoint}`;
  const headers = { accept: JSON };
  // console.log(url);
  return apiCall(url, { headers });
}

export const getMediaBaseUrl = (): string => {
  const env = process.env.NODE_ENV || 'development';
  if (env === 'development') {
    return process.env.NEXT_PUBLIC_CMS_BASE_URL || '';
  }
  return '';
};

export const getMediaUrl = (link: string): string => {
  return `${getMediaBaseUrl()}${link}`;
};
