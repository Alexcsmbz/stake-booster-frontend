import { style } from '@vanilla-extract/css';
import { breakpoints } from '../../../themes/main.css';

export const root = style({
  padding: '43px 30px',
  display: 'grid',
  gap: 37,
  '@media': {
    [breakpoints.desktop]: {
      justifyContent: 'start',
      gridAutoFlow: 'column',
      padding: '43px 64px',
      gap: 52,
    },
  },
});

export const links = style({
  marginBottom: 27,
  '@media': {
    [breakpoints.desktop]: {
      order: 1,
      marginBottom: 0,
    },
  },
});

export const linkLogo = style({
  '@media': {
    [breakpoints.desktop]: {
      display: 'none',
    },
  },
});
