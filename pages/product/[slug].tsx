import { getPage, getSingleProduct } from '../../api/cms';
import PageWrapper from '../../components/sections/page-wrapper';
import type { PageStaticProps, StaticProps } from '../../models/static-props';
import { getPageWrapper } from '../../lib/page-wrapper-handler';
import ErrorPage from '../../components/sections/error';
import SingleProduct from '../../components/sections/single-product';

export default function Page({ pageData, pageWrapper }: StaticProps) {
  return pageData || pageWrapper ? (
    <>
      <PageWrapper pageWrapperData={pageWrapper} title={'Home'}>
        {pageData && (
          <>
            <SingleProduct product={pageData} />
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
  const allPages = await getPage('products');
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
  const productData = await getSingleProduct(params.slug);

  const pageWrapper = await getPageWrapper();
  return {
    props: {
      pageData: productData.length > 0 ? productData[0] : null,
      pageWrapper,
    },
  };
}
