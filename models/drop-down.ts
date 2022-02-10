import { Key } from 'react';

export type DropDownProps = {
  __component?: string;
  id?: Key;
  url?: string;
  label: string;
  page?: {
    id: number;
    name: string;
    link: string;
  };
  items?: Array<{
    id?: number;
    label: string;
    url: string;
  }>;
};

export type ListDropDownProp = {
  dropDownContent: Array<DropDownProps>;
};

export type NestedProps = {
  children?: JSX.Element;
  items: Array<{
    id?: number;
    label: string;
    url: string;
  }>;
};
