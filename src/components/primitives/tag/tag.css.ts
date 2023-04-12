import { style } from '@vanilla-extract/css';
import { breakpoints, theme } from '../../../themes/main.css';

export const root = style({
  padding: '18px',
  borderRadius: '26px',
  backgroundColor: theme.color['blue-2'],
  textAlign: 'center',
  '@media': {
    [breakpoints.desktop]: {
      padding: `${theme.space.md} 0`,
      borderRadius: '12px',
    },
  },
});
