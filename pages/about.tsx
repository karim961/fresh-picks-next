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
      <PageWrapper pageWrapperData={pageWrapper} title={TEXT.ABOUT}>
        {pageData && (
          <>
            {pageData.hero_banner && (
              <SimpleBanner
                backgroundImageSrc={getMediaUrl(pageData.hero_banner.media.url)}
                name={pageData.hero_banner?.content?.title}
              />
            )}
            {pageData.our_story && (
              <StoryBlock
                style={
                  pageData.our_story.background && {
                    backgroundImage: `url(${getMediaUrl(
                      pageData.our_story.background.url,
                    )})`,
                  }
                }
                reverse={pageData.our_story.image_on_right}
                imageUrl={
                  pageData.our_story.image &&
                  getMediaUrl(pageData.our_story.image?.url)
                }
                title={pageData.our_story?.header?.title}
                subtitle={pageData.our_story?.header?.description}
                text={pageData.our_story.text}
                accentColor={theme.colors.accent}
              />
            )}

            {pageData.our_mission && (
              <StoryBlock
                style={
                  pageData.our_mission.background && {
                    backgroundImage: `url(${getMediaUrl(
                      pageData.our_mission.background.url,
                    )})`,
                  }
                }
                reverse={pageData.our_mission.image_on_right}
                imageUrl={
                  pageData.our_mission.image &&
                  getMediaUrl(pageData.our_mission.image?.url)
                }
                title={pageData.our_mission?.header?.title}
                subtitle={pageData.our_mission?.header?.description}
                text={pageData.our_mission.text}
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
  const pageData = await getPage('about');
  const pageWrapper = await getPageWrapper();

  return {
    props: {
      pageData,
      pageWrapper,
    },
  };
}
