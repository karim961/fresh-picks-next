const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopM: '1280px',
  laptopL: '1440px',
  desktop: '1920px',
  desktopL: '2560px',
};

export const sizeInPixels = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tabletS: 605,
  tablet: 768,
  laptop: 1024,
  laptopM: 1280,
  laptopL: 1440,
  desktop: 1920,
  desktopL: 2560,
};

export const device = Object.freeze({
  mobile: `only screen and (max-width: ${size.mobileL})`,
  tablet: `only screen and (max-width: ${size.tablet}) and (min-width: ${size.mobileL})`,
  laptop: `only screen and (min-width: ${size.tablet})`,
});

export default size;
