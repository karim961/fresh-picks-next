const cmsBaseUrl = process.env.NEXT_PUBLIC_CMS_BASE_URL || '';
const URLS = {
  PRODUCTS_URL: `${cmsBaseUrl}/products?slug=`,
  NEWS_URL: `${cmsBaseUrl}/news?slug=`,
  CATS_URL: `${cmsBaseUrl}/categories?slug=`,
};

const HEADERS = {
  JSON: 'application/json',
};

const TEXT = {
  HOME: 'Home',
  PRODUCTS: 'Products',
  ABOUT: 'About',
  CONTACT: 'Contact',
  QUALITY: 'Quality Assurance',
  SERVER_ERROR_CODE: '503',
  SERVER_ERROR: "Looks like we're having some server issues.",
  ADDRESS_TITLE: 'Our Location',
  TOP_SELECTIONS: 'Our Top Selections',
  EMAIL_TITLE: 'Email Address',
  PHONE_TITLE: 'Get In Touch',
  ADDRESS: 'Example, Address',
  READ_MORE: 'Read more',
  LETS_TALK: "Let's Talk",
  START_CONVERSATION: 'Start the conversation',
  LETS_TALK_TEXT:
    'For your inquiries, comments or suggestions, please contact us',
  MONTHS: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  MONTHS_SHORT: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
};

export { URLS, HEADERS, TEXT };
