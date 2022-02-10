import { PageWrapperData } from './page-wrapper';

export type StaticProps = {
  pageData: any;
  pageWrapper: PageWrapperData;
};

export type PageStaticProps = {
  props: StaticProps;
};
