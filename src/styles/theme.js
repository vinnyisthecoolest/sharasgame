import { extendTheme  } from 'react-drip-form-components';

export const theme = {
  colors: {
    // Purple
    primary: '#673ab7',
    primaryLight: '#9a67ea',
    primaryDark: '#320b86',
    box: '#ffffff',

    // More Purple
    // primary: '#4d2c91',
    // primaryLight: '#b085f5',
    // box: '#7e57c2',


    // Red
    // secondary: '#f44336',

    // Cyan Blue
    secondary: '#00bcd4',

    textS: '#7e57c2', // Purple
    textP: '#ffffff', // white

    red: '#f44336',
    green: '#00c853',
    pink: '#e91e63',
    orange: '#ff6d00',
    grey: '#DFD9E2',
  },
  font: '"Comic Sans MS", cursive, sans-serif',
  // radius: 0,
  rdf: extendTheme({
        /* Specify a custom theme here */
  }),
}

