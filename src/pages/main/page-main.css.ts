import { style } from '@vanilla-extract/css';
import { breakpoints } from '../../themes/main.css';

export const root = style({
  maxWidth: '1056px',
  margin: '0 auto',
});

export const tagsContainer = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(199px, 1fr))',
  columnGap: '14px',
  rowGap: '18px',
});

export const searchPanel = style({
  display: 'grid',
  gridAutoFlow: 'row',
  gap: 23,
  '@media': {
    [breakpoints.desktop]: {
      display: 'grid',
      alignItems: 'start',
      justifyContent: 'start',
      gridAutoFlow: 'column',
      gridTemplateColumns: 'auto 1fr',
      gap: 41,
    },
  },
});

export const radioContainer = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(91px, 1fr))',
  columnGap: 7,
  rowGap: 9,
  '@media': {
    [breakpoints.desktop]: {
      columnGap: 24,
      rowGap: 12,
    },
  },
});
