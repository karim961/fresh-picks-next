import { ReactElement } from 'react';
import { IconWrapper, InfoContainer, InfoDetails } from './styles';
import { H5 } from '../../../styles/text';

interface InfoBlockProps {
  icon: string;
  title: string;
  text: string;
  url?: string;
}

const InfoBlock = ({
  icon,
  title,
  text,
  url,
}: InfoBlockProps): ReactElement<InfoBlockProps> => {
  return (
    <InfoContainer>
      <IconWrapper>
        <i className={icon} />
      </IconWrapper>
      <InfoDetails>
        <H5>{title}</H5>
        {url ? <a href={url}>{text}</a> : <p>{text}</p>}
      </InfoDetails>
    </InfoContainer>
  );
};

export default InfoBlock;
