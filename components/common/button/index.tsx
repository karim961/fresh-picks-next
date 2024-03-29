import { ButtonContainer, ButtonBox, ButtonText } from './styles';
import { ReactElement } from 'react';
import Link from 'next/link';

type ButtonProps = {
  url?: string;
  text: string;
  handleClick?: any;
  alternative?: boolean;
  isDisabled?: boolean;
};

const Button = ({
  text,
  handleClick,
  url,
  alternative = false,
  isDisabled = false,
}: ButtonProps): ReactElement<any> => {
  return (
    <ButtonContainer>
      {handleClick ? (
        <ButtonBox
          onClick={handleClick}
          alternative={alternative}
          isDisabled={isDisabled}
        >
          <ButtonText>{text}</ButtonText>
        </ButtonBox>
      ) : url ? (
        <Link href={url} passHref>
          <ButtonBox alternative={alternative} isDisabled={isDisabled}>
            <ButtonText>{text}</ButtonText>
          </ButtonBox>
        </Link>
      ) : (
        <ButtonBox alternative={alternative} isDisabled={isDisabled}>
          <ButtonText>{text}</ButtonText>
        </ButtonBox>
      )}
    </ButtonContainer>
  );
};
export default Button;
