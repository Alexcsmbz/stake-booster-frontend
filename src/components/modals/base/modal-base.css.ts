import { style } from '@vanilla-extract/css';
import { breakpoints, theme } from '../../../themes/main.css';

export const root = style({
  display: 'grid',
  gridAutoColumns: 'rows',
  gap: 30,
  position: 'fixed',
  zIndex: 10,
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  borderRadius: '18px',
  border: `1px solid ${theme.color.black}`,
  backgroundColor: theme.color.white,
  padding: '23px 28px',
  '@media': {
    [breakpoints.desktop]: {
      borderRadius: '5px',
      border: `1px solid #E7E7E7`,
    },
  },
});

export const titleStyles = style({
  fontSize: 23,
  '@media': {
    [breakpoints.desktop]: {
      fontSize: 25,
    },
  },
});
