import Head from 'next/head';
import { getMediaUrl, getSingleTypes } from '../api/cms';
import type { PageStaticProps, StaticProps } from '../models/static-props';
import PageWrapper from '../components/sections/page-wrapper';
import { getPageWrapper } from '../lib/page-wrapper-handler';
import ErrorPage from '../components/sections/error';
import RepeatableHeroBanner from '../components/common/repeatable-hero-banner';
import CategoriesBlock from '../components/sections/categories-block';
import StoryBlock from '../components/sections/story-block';
import theme from '../styles/theme';

export default function Page({ pageData, pageWrapper }: StaticProps) {
  return pageData || pageWrapper ? (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <PageWrapper pageWrapperData={pageWrapper}>
        {pageData && (
          <>
            <RepeatableHeroBanner
              hero_banner={pageData.hero_banner_slider.hero_banner}
            />
            {pageData.product_block && (
              <CategoriesBlock
                categories={pageData.product_block.categories}
                title={pageData.product_block.title}
                description={pageData.product_block.description}
              />
            )}
            {pageData.our_story && (
              <StoryBlock
                style={
                  pageData.our_story.background && {
                    background: `url(${getMediaUrl(
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
                    background: `url(${getMediaUrl(
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
