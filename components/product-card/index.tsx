import React, { ReactElement } from 'react';
import { ButtonContainer, ProductContainer, Overlay } from './styles';
import { H3 } from '../../styles/text';
import Button from '../common/button';
import Link from 'next/dist/client/link';

interface ProductCardProps {
  title: string;
  link: string;
  imageUrl: string;
}

const ProductCard = ({
  title,
  link,
  imageUrl,
}: ProductCardProps): ReactElement<ProductCardProps> => {
  return (
    <Link href={link} passHref>
      <ProductContainer imageUrl={imageUrl}>
        <Overlay>
          <H3>{title}</H3>
          <ButtonContainer>
            <Button text="View more" alternative />
          </ButtonContainer>
        </Overlay>
      </ProductContainer>
    </Link>
  );
};

export default ProductCard;
