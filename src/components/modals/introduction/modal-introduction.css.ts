import { style } from '@vanilla-extract/css';
import { breakpoints } from '../../../themes/main.css';

export const root = style({
  width: 346,
  '@media': {
    [breakpoints.desktop]: {
      width: 566,
    },
  },
});

export const content = style({
  marginBottom: 240,
  '@media': {
    [breakpoints.desktop]: {
      marginBottom: 120,
    },
  },
});
