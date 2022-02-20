import { getMediaUrl, getPage } from '../api/cms';
import type { PageStaticProps, StaticProps } from '../models/static-props';
import PageWrapper from '../components/sections/page-wrapper';
import { getPageWrapper } from '../lib/page-wrapper-handler';
import ErrorPage from '../components/sections/error';
import StoryBlock from '../components/sections/story-block';
import theme from '../styles/theme';
import { TEXT } from '../config/strings';
import SimpleBanner from '../components/common/hero-banner/simple-banner';

export default function Page({ pageData, pageWrapper }: StaticProps) {
  return pageData || pageWrapper ? (
    <>
      <PageWrapper pageWrapperData={pageWrapper} title={TEXT.QUALITY}>
        {pageData && (
          <>
            {pageData.hero_banner && (
              <SimpleBanner
                backgroundImageSrc={getMediaUrl(pageData.hero_banner.media.url)}
                name={pageData.hero_banner?.content?.title}
              />
            )}
            {pageData.first_section && (
              <StoryBlock
                style={
                  pageData.first_section.background && {
                    backgroundImage: `url(${getMediaUrl(
                      pageData.first_section.background.url,
                    )})`,
                  }
                }
                reverse={pageData.first_section.image_on_right}
                imageUrl={
                  pageData.first_section.image &&
                  getMediaUrl(pageData.first_section.image?.url)
                }
                title={pageData.first_section?.header?.title}
                subtitle={pageData.first_section?.header?.description}
                text={pageData.first_section.text}
                accentColor={theme.colors.accent}
              />
            )}

            {pageData.second_section && (
              <StoryBlock
                style={
                  pageData.second_section.background && {
                    backgroundImage: `url(${getMediaUrl(
                      pageData.second_section.background.url,
                    )})`,
                  }
                }
                reverse={pageData.second_section.image_on_right}
                imageUrl={
                  pageData.second_section.image &&
                  getMediaUrl(pageData.second_section.image?.url)
                }
                title={pageData.second_section?.header?.title}
                subtitle={pageData.second_section?.header?.description}
                text={pageData.second_section.text}
                accentColor={theme.colors.secondary}
              />
            )}
          </>
        )}
      </PageWrapper>
    </>
  ) : (
    <ErrorPage />
  );
}

export async function getStaticProps(): Promise<PageStaticProps> {
  const pageData = await getPage('quality-assurance');
  const pageWrapper = await getPageWrapper();

  return {
    props: {
      pageData,
      pageWrapper,
    },
  };
}
