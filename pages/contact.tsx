import { getMediaUrl, getPage } from '../api/cms';
import type { PageStaticProps, StaticProps } from '../models/static-props';
import PageWrapper from '../components/sections/page-wrapper';
import { getPageWrapper } from '../lib/page-wrapper-handler';
import ErrorPage from '../components/sections/error';

import { TEXT } from '../config/strings';
import SimpleBanner from '../components/common/hero-banner/simple-banner';
import ContactForm from '../components/sections/contact-form';
import SingleImage from '../components/common/single-image';

export default function Page({ pageData, pageWrapper }: StaticProps) {
  return pageData || pageWrapper ? (
    <>
      <PageWrapper pageWrapperData={pageWrapper} title={TEXT.CONTACT}>
        <>
          {pageData && (
            <>
              {pageData.hero_banner && (
                <SimpleBanner
                  backgroundImageSrc={getMediaUrl(
                    pageData.hero_banner.media.url,
                  )}
                  name={pageData.hero_banner?.content.title}
                />
              )}
            </>
          )}
          <ContactForm />
          {pageData.map && <SingleImage image={pageData?.map} />}
        </>
      </PageWrapper>
    </>
  ) : (
    <ErrorPage />
  );
}

export async function getStaticProps(): Promise<PageStaticProps> {
  const pageData = await getPage('contact');
  const pageWrapper = await getPageWrapper();

  return {
    props: {
      pageData,
      pageWrapper,
    },
  };
}
