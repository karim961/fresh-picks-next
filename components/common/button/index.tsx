import { ButtonContainer, ButtonBox, ButtonText } from './styles';
import { ReactElement } from 'react';
import Link from 'next/link';

type ButtonProps = {
  url?: string;
  text: string;
  handleClick?: any;
  alternative?: boolean;
};

const Button = ({
  text,
  handleClick,
  url,
  alternative = false,
}: ButtonProps): ReactElement<any> => {
  return (
    <ButtonContainer>
      {handleClick ? (
        <ButtonBox onClick={handleClick} alternative={alternative}>
          <ButtonText>{text}</ButtonText>
        </ButtonBox>
      ) : (
        url && (
          <Link href={url} passHref>
            <ButtonBox alternative={alternative}>
              <ButtonText>{text}</ButtonText>
            </ButtonBox>
          </Link>
        )
      )}
    </ButtonContainer>
  );
};
export default Button;
