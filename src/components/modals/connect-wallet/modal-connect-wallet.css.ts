import { style } from '@vanilla-extract/css';
import { breakpoints } from '../../../themes/main.css';

export const root = style({
  width: 346,
  '@media': {
    [breakpoints.desktop]: {
      width: 342,
    },
  },
});

export const content = style({
  display: 'grid',
  gridAutoFlow: 'row',
  gap: 15,
  marginBottom: 31,
  '@media': {
    [breakpoints.desktop]: {
      marginBottom: 21,
    },
  },
});

export const wallet = style({
  height: 58,
  paddingLeft: 33,
  borderRadius: 17,
  backgroundColor: '#E4E4E4',
  paddingRight: 15,
  cursor: 'pointer',
  '@media': {
    [breakpoints.desktop]: {
      borderRadius: 13,
    },
  },
});

export const activeWallet = style([
  wallet,
  {
    backgroundColor: '#D9E5EE',
  },
]);

export const button = style({
  padding: '5px 15px',
  borderRadius: 25,
  backgroundColor: '#D9D9D9',
  color: '#6B6B6B',
});

export const activeButton = style([
  button,
  {
    backgroundColor: '#CADEED',
    color: '#4E89B6',
  },
]);
