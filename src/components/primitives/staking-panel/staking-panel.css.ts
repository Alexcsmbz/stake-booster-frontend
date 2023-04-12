import { style } from '@vanilla-extract/css';
import { breakpoints, theme } from '../../../themes/main.css';

export const root = style({
  background: theme.color.white,
  border: `1px solid ${theme.color.black}`,
  borderRadius: '16px',
  padding: '35px 20px',
  //   '@media': {
  //     [breakpoints.desktop]: {
  //       padding: `${theme.space.md} 0`,
  //       borderRadius: '12px',
  //     },
  //   },
});
