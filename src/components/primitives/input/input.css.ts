import { style } from '@vanilla-extract/css';
import { theme, animation, breakpoints } from '../../../themes/main.css';

export const root = style([
  animation,
  {
    border: `1px solid ${theme.color.black}`,
    padding: '14px 24px',
    backgroundColor: theme.color.white,
    borderRadius: '26px',
    minHeight: 44,
    '@media': {
      [breakpoints.desktop]: {
        borderRadius: '8px',
      },
    },
  },
]);
