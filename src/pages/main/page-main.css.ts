import { style } from '@vanilla-extract/css';
import { breakpoints, theme } from '../../themes/main.css';
import { rootStyles as stakingPanelRootStyles } from '../../components/primitives/staking-panel/staking-panel.css';

export const root = style({
  maxWidth: '1056px',
  margin: '0 auto',
});

export const tagsContainer = style({
  marginBottom: 43,
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
  marginBottom: 46,
  '@media': {
    [breakpoints.desktop]: {
      columnGap: 24,
      rowGap: 12,
    },
  },
});

export const tilesContainer = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
  columnGap: 7,
  rowGap: 9,
  marginBottom: 40,
  '@media': {
    [breakpoints.desktop]: {
      display: 'none',
    },
  },
});

export const controlsContainer = style({
  marginBottom: 50,
});

export const buttonAsLink = style({
  width: 'fit-content',
  textDecoration: 'underline',
  marginBottom: 30,
});

export const table = style({
  marginBottom: 36,
  '@media': {
    [breakpoints.desktop]: {
      marginBottom: 0,
    },
  },
});

export const tokensContainer = style({
  marginBottom: 36,
});

export const h1 = style({
  marginBottom: theme.space.xl,
  '@media': {
    [breakpoints.desktop]: {
      marginBottom: 19,
    },
  },
});

export const description = style({
  marginBottom: 37,
  '@media': {
    [breakpoints.desktop]: {
      marginBottom: 47,
    },
  },
});

export const stakingPanelLayout = style({
  display: 'grid',
  gridAutoFlow: 'row',
  justifyContent: 'stretch',
  '@media': {
    [breakpoints.desktop]: {
      alignItems: 'start',
      gridTemplateColumns: 'repeat(3, minmax(222px, 1fr))',
      gridAutoFlow: 'column',
      gap: 64,
    },
  },
});

export const stakingPanelBackground = style({
  justifyContent: 'stretch',
  background: 'transparent',
  border: 'none',
  borderRadius: 0,
  padding: 0,
  '@media': {
    [breakpoints.desktop]: {
      ...stakingPanelRootStyles,
      padding: '17px 26px 28px 27px',
    },
  },
});
