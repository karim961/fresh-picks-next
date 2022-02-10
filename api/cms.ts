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

export type Page = {
  id?: number;
  name: string;
  Sections: Array<Section>;
  link: string;
  published_at: string;
  created_at?: string;
  updated_at?: string;
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

export async function getPages(): Promise<Array<Page>> {
  const pagesUrl = URLS.PAGES_URL;
  const headers = { accept: JSON };

  return apiCall(pagesUrl, { headers });
}

export async function getPage(link: string = ''): Promise<Page> {
  const pageUrl = `${URLS.PAGE_URL}${link}`;
  const headers = { accept: JSON };

  return apiCall(pageUrl, { headers });
} // gets a single page back and not all pages, it takes a link as an argument with default value '' which is the link of the index page

export async function getSingleTypes(endpoint: string): Promise<any> {
  const url = `${cmsBaseUrl}/${endpoint}`;
  const headers = { accept: 'application/json' };
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
