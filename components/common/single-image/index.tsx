import { ReactElement } from 'react';
import { ImageCol, SingleImageContainer } from './styles';
import { Grid, Row } from 'react-styled-flexboxgrid';
import { getMediaUrl } from '../../../api/cms';

interface SingleImageProps {
  image: { [key: string]: string };
}

const SingleImage = ({
  image,
}: SingleImageProps): ReactElement<SingleImageProps> => {
  return (
    <SingleImageContainer>
      <Grid>
        <Row>
          <ImageCol xs={12}>
            <img src={getMediaUrl(image.url)} alt={image.alternativeText} />
          </ImageCol>
        </Row>
      </Grid>
    </SingleImageContainer>
  );
};

export default SingleImage;
