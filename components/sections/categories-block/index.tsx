import { ReactElement } from 'react';
import { CategoriesBlockContainer } from './styles';
import { Col, Grid, Row } from 'react-styled-flexboxgrid';
import HeaderDescription from '../../common/header-description';
import CategoryCard from '../../common/category-card';
import { getMediaUrl } from '../../../api/cms';
import { getProductsLink } from '../../../utils/strings';

interface CategoriesBlock {
  categories: Array<any>;
  title: string;
  description: string;
}

const CategoriesBlock = ({
  title,
  description,
  categories,
}: CategoriesBlock): ReactElement<CategoriesBlock> => {
  return (
    <CategoriesBlockContainer>
      <Grid>
        <Row center={'xs'}>
          <Col md={8} xs={12}>
            <HeaderDescription title={title} description={description} />
          </Col>
        </Row>
        <Row center={'xs'}>
          {categories &&
            categories?.map((cat) => (
              <Col md={4} sm={6} xs={12} key={cat.id}>
                <CategoryCard
                  title={cat.title}
                  description={cat.description}
                  url={getProductsLink(cat.slug)}
                  alternativeText={cat.title}
                  mediaUrl={getMediaUrl(cat.image.url)}
                />
              </Col>
            ))}
        </Row>
      </Grid>
    </CategoriesBlockContainer>
  );
};

export default CategoriesBlock;
