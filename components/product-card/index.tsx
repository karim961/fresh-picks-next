import React, { ReactElement } from 'react';
import { ButtonContainer, ProductContainer, Overlay } from './styles';
import { H3 } from '../../styles/text';
import Button from '../common/button';

interface ProductCardProps {
  title: string;
  link: string;
}

const ProductCard = ({
  title,
  link,
}: ProductCardProps): ReactElement<ProductCardProps> => {
  return (
    <ProductContainer>
      <Overlay>
        <H3>{title}</H3>
        <ButtonContainer>
          <Button text="View more" url={link} alternative />
        </ButtonContainer>
      </Overlay>
    </ProductContainer>
  );
};

export default ProductCard;
