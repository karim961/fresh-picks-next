import { ButtonContainer, ButtonBox, ButtonText } from './styles';
import { ReactElement } from 'react';
import Link from 'next/link';

type ButtonProps = {
  url?: string;
  text: string;
  handleClick?: any;
};

const Button = ({ text, handleClick, url }: ButtonProps): ReactElement<any> => {
  return (
    <ButtonContainer>
      {handleClick ? (
        <ButtonBox onClick={handleClick}>
          <ButtonText>{text}</ButtonText>
        </ButtonBox>
      ) : (
        url && (
          <Link href={url} passHref>
            <ButtonBox>
              <ButtonText>{text}</ButtonText>
            </ButtonBox>
          </Link>
        )
      )}
    </ButtonContainer>
  );
};
export default Button;
