import { style } from '@vanilla-extract/css';
import { breakpoints, theme } from '../../../themes/main.css';

export const rootStyles = {
  background: theme.color.white,
  border: `1px solid ${theme.color.black}`,
  borderRadius: '16px',
  padding: '35px 20px',
};

export const root = style(rootStyles);

export const title = style({
  textAlign: 'center',
  '@media': {
    [breakpoints.desktop]: {
      textAlign: 'left',
      width: '323px',
    },
  },
});

export const tr = style({
  '@media': {
    [breakpoints.desktop]: {
      display: 'none',
    },
  },
});

export const claimedInfoContainer = style({
  display: 'none',
  '@media': {
    [breakpoints.desktop]: {
      display: 'grid',
      marginBottom: 18,
    },
  },
});

export const header = style({
  position: 'relative',
  display: 'grid',
  gridTemplateColumns: '1fr',
  '@media': {
    [breakpoints.desktop]: {
      gridTemplateColumns: '0.55fr 1fr',
    },
  },
});

export const headerInfo = style({
  display: 'none',
  '@media': {
    [breakpoints.desktop]: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 115px)',
    },
  },
});

export const expandIcon = style({
  display: 'none',
  '@media': {
    [breakpoints.desktop]: {
      position: 'absolute',
      right: 0,
      top: '50%',
      transform: 'translateY(-50%)',
    },
  },
});
