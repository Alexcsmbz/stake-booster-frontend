import { style } from '@vanilla-extract/css';
import { breakpoints, theme } from '../../../themes/main.css';

export const root = style({
  padding: '20px 24px',
  display: 'grid',
  gap: theme.space.xl,
  '@media': {
    [breakpoints.desktop]: {
      display: 'block',
    },
  },
});

export const links = style({
  display: 'none',
  '@media': {
    [breakpoints.desktop]: {
      display: 'block',
    },
  },
});

export const mobileLinks = style({
  display: 'block',
  padding: '14px 18px',
  borderTop: `1px solid ${theme.color['blue-4']}`,
  borderBottom: `1px solid ${theme.color['blue-4']}`,
  '@media': {
    [breakpoints.desktop]: {
      display: 'none',
    },
  },
});
