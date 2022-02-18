import { getCategory, getMediaUrl, getPage } from '../../api/cms';
import type { PageStaticProps, StaticProps } from '../../models/static-props';
import PageWrapper from '../../components/sections/page-wrapper';
import { getPageWrapper } from '../../lib/page-wrapper-handler';
import ErrorPage from '../../components/sections/error';

import { TEXT } from '../../config/strings';
import SimpleBanner from '../../components/common/hero-banner/simple-banner';
import ProductsBlock from '../../components/sections/products-block';

export default function Slug({ pageData, pageWrapper }: StaticProps) {
  return pageData && pageWrapper ? (
    <>
      <PageWrapper pageWrapperData={pageWrapper} title={TEXT.PRODUCTS}>
        {pageData && (
          <>
            {pageData.hero_banner && (
              <SimpleBanner
                backgroundImageSrc={getMediaUrl(pageData.hero_banner.media.url)}
                name={pageData.hero_banner?.content.title}
              />
            )}
            {pageData.products && (
              <ProductsBlock products={pageData.products} />
            )}
          </>
        )}
      </PageWrapper>
    </>
  ) : (
    <ErrorPage />
  );
}

export async function getStaticPaths(): Promise<{
  paths: Array<{ params: { link: string } }>;
  fallback: boolean;
}> {
  const allPages = await getPage('categories');
  const paths = allPages
    .filter((p: { slug: string }) => p.slug !== '/')
    .map((page: { slug: string }) => ({
      params: {
        slug: page.slug.replace('/', ''),
      },
    }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({
  params,
}: {
  params: { slug: string };
}): Promise<PageStaticProps> {
  const categoryData = await getCategory(params.slug);
  console.log(categoryData);

  const pageWrapper = await getPageWrapper();
  return {
    props: {
      pageData: categoryData.length > 0 ? categoryData[0] : null,
      pageWrapper,
    },
  };
}
