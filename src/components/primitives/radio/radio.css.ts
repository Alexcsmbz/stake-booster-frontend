import { globalStyle, style } from '@vanilla-extract/css';
import { theme, animation, breakpoints } from '../../../themes/main.css';

export const label = style({
  padding: '14px 20px',
  border: `1px solid ${theme.color.black}`,
  backgroundColor: theme.color.white,
  borderRadius: '26px',
  minHeight: 44,
  textAlign: 'center',
  '@media': {
    [breakpoints.desktop]: {
      borderRadius: '8px',
    },
  },
});

export const root = style([
  animation,
  {
    display: 'none',
  },
]);

globalStyle('input:checked + label', {
  backgroundColor: theme.color.black,
  color: theme.color.white,
});

globalStyle('input:disabled + label', {
  backgroundColor: theme.color.white,
  border: `1px solid ${theme.color['gray-6']}`,
  color: theme.color['gray-6'],
});
