import { getMediaUrl, getPage } from '../api/cms';
import type { PageStaticProps, StaticProps } from '../models/static-props';
import PageWrapper from '../components/sections/page-wrapper';
import { getPageWrapper } from '../lib/page-wrapper-handler';
import ErrorPage from '../components/sections/error';
import RepeatableHeroBanner from '../components/common/repeatable-hero-banner';
import CategoriesBlock from '../components/sections/categories-block';
import StoryBlock from '../components/sections/story-block';
import theme from '../styles/theme';
import FeaturedProducts from '../components/featured-products';
import { TEXT } from '../config/strings';
import PartnersBlock from '../components/sections/partners-block';
import Routes from '../config/routes';

export default function Page({ pageData, pageWrapper }: StaticProps) {
  return pageData || pageWrapper ? (
    <>
      <PageWrapper pageWrapperData={pageWrapper} title={TEXT.HOME}>
        {pageData && (
          <>
            {pageData.hero_banner_slider.hero_banner && (
              <RepeatableHeroBanner
                hero_banner={pageData.hero_banner_slider.hero_banner}
              />
            )}
            {pageData.featured_products && (
              <FeaturedProducts
                title={TEXT.TOP_SELECTIONS}
                description={''}
                products={pageData.featured_products}
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
                link={Routes.QUALITY}
              />
            )}
            {pageData.product_block && (
              <CategoriesBlock
                categories={pageData.product_block.categories}
                title={pageData.product_block.title}
                description={pageData.product_block.description}
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
                link={Routes.ABOUT}
              />
            )}
            {pageData.partners_block && (
              <PartnersBlock partners={pageData.partners_block} />
            )}
            {/*<GetInTouch />*/}
          </>
        )}
      </PageWrapper>
    </>
  ) : (
    <ErrorPage />
  );
}

export async function getStaticProps(): Promise<PageStaticProps> {
  const pageData = await getPage('home');
  const pageWrapper = await getPageWrapper();

  return {
    props: {
      pageData,
      pageWrapper,
    },
  };
}
