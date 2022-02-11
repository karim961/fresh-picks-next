import { ReactElement } from 'react';
import { CardContainer, ImgStyled, StyledA } from './styles';
import Link from 'next/link';
import { Description, H4 } from '../../../styles/text';
import Button from '../button';
import { TEXT } from '../../../config/strings';

export type CategoryCardProps = {
  title: string;
  description: string;
  url: string;
  alternativeText: string;
  mediaUrl: string;
};

const CategoryCard = ({
  title,
  description,
  url,
  alternativeText,
  mediaUrl,
}: CategoryCardProps): ReactElement<CategoryCardProps> => {
  return (
    <CardContainer>
      {url ? (
        <Link href={url} passHref>
          <StyledA>
            <ImgStyled src={mediaUrl} alt={alternativeText} />
          </StyledA>
        </Link>
      ) : (
        <ImgStyled src={mediaUrl} alt={alternativeText} />
      )}
      <section>
        {title && <H4>{title}</H4>}
        {description && <Description>{description}</Description>}
      </section>
      {url && <Button text={TEXT.READ_MORE} url={'#'} />}
    </CardContainer>
  );
};

export default CategoryCard;
