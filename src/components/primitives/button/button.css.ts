import { style } from '@vanilla-extract/css';
import { theme, animation } from '../../../themes/main.css';

export const root = style([
  animation,
  {
    color: theme.color.white,
    padding: `${theme.space.xs} ${theme.space.md}`,
    backgroundColor: theme.color.black,
    borderRadius: theme.space.sm,
    minHeight: 30,
    fontSize: 14,
    selectors: {
      '&:hover, &:focus': {
        backgroundColor: theme.color['gray-2'],
      },
      '&:active': {
        backgroundColor: theme.color.black,
      },
    },
  },
]);
