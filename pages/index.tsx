import Head from 'next/head';
import { getSingleTypes } from '../api/cms';
import type { PageStaticProps, StaticProps } from '../models/static-props';
import PageWrapper from '../components/page-wrapper';
import { getPageWrapper } from '../lib/page-wrapper-handler';
import ErrorPage from '../components/error';
import RepeatableHeroBanner from '../components/repeatable-hero-banner';

export default function Page({ pageData, pageWrapper }: StaticProps) {
  return pageData || pageWrapper ? (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <PageWrapper pageWrapperData={pageWrapper}>
        {pageData && (
          <RepeatableHeroBanner
            hero_banner={pageData.hero_banner_slider.hero_banner}
          />
        )}
      </PageWrapper>
    </>
  ) : (
    <ErrorPage />
  );
}
export async function getStaticProps(): Promise<PageStaticProps> {
  // const res = await getPage();
  // const pageData = res ? res[0] : null;

  const pageData = await getSingleTypes('home');
  const pageWrapper = await getPageWrapper();

  return {
    props: {
      pageData,
      pageWrapper,
    },
  };
}
