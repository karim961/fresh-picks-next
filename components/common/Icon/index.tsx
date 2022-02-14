// @flow

import { SocialIconWrapper } from './styles';
import { ReactElement } from 'react';
import Image from 'next/image';

type SocialIconProps = {
  icon: string;
  url: string;
  color: string;
  hoverColor: string;
  image?: { [key: string]: any };
};

const Icon = ({
  icon,
  url,
  image,
  color,
  hoverColor,
}: SocialIconProps): ReactElement<SocialIconProps> => (
  <SocialIconWrapper href={url} color={color} hoverColor={hoverColor}>
    {image ? (
      <Image
        src={image.url}
        alt={image.alternativeText}
        width={image.width}
        height={image.height}
      />
    ) : (
      <i className={icon} />
    )}
  </SocialIconWrapper>
);

export default Icon;
