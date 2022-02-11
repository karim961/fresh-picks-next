/* eslint-disable import/no-cycle */
import React, { ReactElement } from 'react';

export const getLink = ({ url, page }: { [key: string]: any }): string => {
  return (page ? page.link : url) || '#';
};

export const getListData = (
  data: string,
): Array<{ label: string; value: string }> => {
  if (!data) {
    return [];
  }
  const dataArray = data.split('\n');
  return dataArray.length > 0
    ? dataArray.map((x) => ({ label: x, value: x }))
    : [];
};

export const switchComponent = (
  key: string,
  params: Object,
): ReactElement<any> => {
  switch (key) {
    // case HERO_BANNER:
    //   return <>test</>;

    default:
      return <></>;
  }
};
