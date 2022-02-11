import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      [key: string]: string;
    };

    fontSizes: {
      regular: number;
      caption: number;
      h1: number;
      h2: number;
      h3: number;
      h4: number;
      h5: number;
      h6: number;
    };

    fonts: { [key: string]: string };

    // Grid Theme
    flexboxgrid: {
      // Defaults
      gridSize: number; // columns
      gutterWidth: number; // rem
      outerMargin: number; // rem
      mediaQuery: string;
      container: {
        sm: number; // rem
        md: number; // rem
        lg: number; // rem
      };
      breakpoints: {
        xs: number; // em
        sm: number; // em
        md: number; // em
        lg: number; // em
      };
    };
  }
}

const theme = {
  colors: {
    // #C73E1D
    //#DA261D
    primaryText: '#22181C',
    primary: '#137547',
    // secondary: '#99C24D',
    // secondary: '#ABE188',
    secondary: '#A8C256',
    white: '#fcfaf9',
    snow: '#fff',
    grey: '#dedddb',
    lightGrey: '#f4f8ff',

    white25: 'rgba(255, 255, 255, 0.25)',
    white75: 'rgba(255, 255, 255, 0.75)',
    // accent: '#DA261D',
    // accent: '#C73E1D',
    accent: '#D1462F',
  },

  fontSizes: {
    regular: 1, // 16px
    caption: 0.875, // 14px
    h1: 3, //48px
    h2: 2.5, // 32px
    h3: 1.875, // 30px
    h4: 1.625, // 26px
    h5: 1.375, // 22px
    h6: 1.125, // 18px
  },

  fonts: { Lato: "'Lato', sans-serif" },

  // Grid Theme
  flexboxgrid: {
    // Defaults
    gridSize: 12, // columns
    gutterWidth: 3, // rem
    outerMargin: 1.5, // rem
    mediaQuery: 'only screen',
    container: {
      sm: 48, // rem
      md: 63, // rem
      lg: 74, // rem
    },
    breakpoints: {
      xs: 0, // em
      sm: 48, // em
      md: 64, // em
      lg: 75, // em
    },
  },
};

export default theme;
