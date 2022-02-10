import {
  StyledTitle,
  StyledDescription,
  StyledHeaderDescription,
} from './styles';
import { ReactElement } from 'react';

type HeaderDescriptionProps = {
  id?: number;
  title: string;
  description: string;
};

const HeaderDescription = ({
  title,
  description,
}: HeaderDescriptionProps): ReactElement<HeaderDescriptionProps> => {
  return (
    <StyledHeaderDescription>
      {description && <StyledDescription>{description}</StyledDescription>}
      {title && <StyledTitle>{title}</StyledTitle>}
    </StyledHeaderDescription>
  );
};

export default HeaderDescription;
