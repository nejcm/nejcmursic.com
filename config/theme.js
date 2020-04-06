import {darken} from 'polished';
import {font} from '../src/utils/typography';

const primary = '#096464';
const primary_dark = `${darken(0.05, primary)}`;

const colors = {
  primary: primary,
  secondary: '#EDF2F2',
  primary_light: '#D0E0E0',
  primary_dark: primary_dark,
  gray_darkest: '#909090',
  gray_darker: '#AAA',
  gray_dark: '#D0D0D0',
  gray: '#EEE',
  gray_light: '#F3F3F3',
  dark: '#707070',
  black: '#000',
  white: '#FFF',
  black_transparent: 'rgba(0,0,0,.1)',
  white_transparent: 'rgba(255,255,255,.15)',
  body_color: '#333',
  body_dark_color: '#EEE',
  bg_color: '#FAFAFA',
  bg_dark_color: '#020B19',
  bg_dark_color_light: '#000F26',
  bg_dark_color_lighter: '#15243C',
  bg_dark_color_hover: '#10203C',
  link_color: primary,
  link_color_hover: primary_dark,
  red: '#DB3056',
  green: '#19A673',
  blue: '#12CAD6',
  teal: '#1EB2A6',
  yellow: '#FFCC00',
};

const theme = {
  colors,
  font,
  border_radius: '2px',
  breakpoints: {
    xs: 400,
    sm: 600,
    md: 900,
    lg: 1200,
  },
  spacer: {
    xs: '.25rem',
    sm: '.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '3rem',
    xxl: '5rem',
  },
};

export default theme;
