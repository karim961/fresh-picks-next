export interface HeaderProps {
  logo: { [key: string]: any };
  address: string;
  email: string;
  phoneNumber: string;
}

export interface FooterProps {
  title: string;
  description: string;
  social_links: Array<{
    _id: string;
    icon: string;
    url: string;
  }>;
}

export interface PageWrapperData {
  header?: HeaderProps;
  footer?: FooterProps;
}

export interface PageWrapperProps {
  children?: JSX.Element;
  pageWrapperData: PageWrapperData;
}
