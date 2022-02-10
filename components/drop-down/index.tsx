import Link from 'next/link';
import Nested from './nested';
import { ReactElement } from 'react';
import { DropDownProps } from '../../models/drop-down';

const getLink = ({
  url,
  page,
  label,
}: {
  [key: string]: any;
}): ReactElement<any> => {
  const link = (page ? page.link : url) || '#';

  return page ? (
    <Link href={link}>
      <a>{label}</a>
    </Link>
  ) : (
    <a href={link}>{label}</a>
  );
};

const DropDown = ({
  id,
  url,
  page,
  label,
  items,
}: DropDownProps): ReactElement<DropDownProps> => {
  return (
    <li key={id}>
      {items && items.length > 0 ? (
        <Nested items={items}>
          <>{getLink({ url, page, label })}</>
        </Nested>
      ) : (
        <div>{getLink({ url, page, label })}</div>
      )}
    </li>
  );
};
export default DropDown;
