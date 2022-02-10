export interface HeaderProps {
  logo: { [key: string]: any };
  address: string;
  email: string;
  phoneNumber: string;
}

export interface PageWrapperData {
  header?: HeaderProps;
  footer?: HeaderProps;
}

export interface PageWrapperProps {
  children?: JSX.Element;
  pageWrapperData: PageWrapperData;
}
