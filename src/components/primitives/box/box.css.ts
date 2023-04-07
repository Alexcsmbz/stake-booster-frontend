import { style, styleVariants } from '@vanilla-extract/css';
import { breakpoints, theme } from '../../../themes/main.css';

export const grid = style({ display: 'grid', justifyContent: 'start' });

export const block = style({ display: 'block' });

export const flow = styleVariants({
  vertical: [grid, { gridAutoFlow: 'row' }],
  horizontal: [grid, { gridAutoFlow: 'column' }],
});

export const gap = styleVariants({
  xs: { gap: theme.space.xs },
  sm: { gap: theme.space.sm },
  md: { gap: theme.space.md },
  lg: { gap: theme.space.lg },
  xl: { gap: theme.space.xl },
  xxl: { gap: theme.space.xl },
  xxxl: { gap: theme.space.xl },
  xxxxl: { gap: theme.space.xl },
});

export const align = styleVariants({
  center: { alignItems: 'center' },
  start: { alignItems: 'start' },
  end: { alignItems: 'end' },
  baseline: { alignItems: 'baseline' },
});

export const justify = styleVariants({
  center: { justifyContent: 'center' },
  start: { justifyContent: 'start' },
  end: { justifyContent: 'end' },
  'space-between': { justifyContent: 'space-between' },
});

export const adaptivePaddings = style({
  paddingLeft: theme.space.md,
  paddingRight: theme.space.md,
  '@media': {
    [breakpoints.mobile]: {
      paddingLeft: theme.space.md,
      paddingRight: theme.space.md,
    },
    [breakpoints.desktop]: {
      paddingLeft: theme.space.xl,
      paddingRight: theme.space.xl,
    },
  },
});

export const verticalPaddings = styleVariants({
  xs: {
    paddingTop: theme.space.xs,
    paddingBottom: theme.space.xs,
  },
  sm: {
    paddingTop: theme.space.sm,
    paddingBottom: theme.space.sm,
  },
  md: {
    paddingTop: theme.space.md,
    paddingBottom: theme.space.md,
  },
  lg: {
    paddingTop: theme.space.lg,
    paddingBottom: theme.space.lg,
  },
  xl: {
    paddingTop: theme.space.xl,
    paddingBottom: theme.space.xl,
  },
});
