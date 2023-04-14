import { createTheme, style } from '@vanilla-extract/css';

export const [themeClass, theme] = createTheme({
  color: {
    black: '#000000',
    white: '#ffffff',
    'blue-1': '#E9F2FF',
    'blue-2': '#D9E5EE',
    'blue-3': '#243C4E',
    'blue-4': '#D8E3F2',
    'gray-1': '#8B8B8B',
    'gray-2': '#373737',
    'gray-3': '#3E3E3E',
    'gray-4': '#777777',
    'gray-5': '#4E4E4E',
    'gray-6': '#6C6C6C',
    'gray-7': '#727272',
    'gray-8': '#E3E3E3',
  },
  animation: {
    main: 'all 100ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
  space: {
    xs: '6px',
    sm: '8px',
    md: '10px',
    lg: '24px',
    xl: '28px',
    xxl: '36px',
    xxxl: '42px',
    xxxxl: '62px',
  },
} as const);

export const animation = style({
  transition: theme.animation.main,
});

export const hidden = style({
  clip: 'rect(0 0 0 0)',
  position: 'absolute',
  width: 0,
  height: 0,
  opacity: 0,
});

export const breakpoints = {
  mobile: '(min-width: 768px)',
  desktop: '(min-width: 1024px)',
} as const;

export type Space = keyof typeof theme.space;
