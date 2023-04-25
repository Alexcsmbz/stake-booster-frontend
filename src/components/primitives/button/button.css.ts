import { style, styleVariants } from '@vanilla-extract/css';
import { theme, animation } from '../../../themes/main.css';

export const root = style([
  animation,
  {
    padding: `${theme.space.xs} ${theme.space.md}`,
    borderRadius: theme.space.sm,
    fontSize: 14,
  },
]);

export const size = styleVariants({
  small: { minHeight: 30 },
  medium: { minHeight: 40 },
});

export const type = styleVariants({
  primary: {
    color: theme.color.white,
    backgroundColor: theme.color.black,
    selectors: {
      '&:hover, &:focus': {
        backgroundColor: theme.color['gray-2'],
      },
      '&:active': {
        backgroundColor: theme.color.black,
      },
    },
  },
  secondary: {
    color: theme.color.black,
    backgroundColor: theme.color.white,
    border: `1px solid ${theme.color.black}`,
    selectors: {
      '&:hover, &:focus': {
        color: theme.color['gray-2'],
        border: `1px solid ${theme.color['gray-2']}`,
      },
      '&:active': {
        color: theme.color.black,
        border: `1px solid ${theme.color.black}`,
      },
    },
  },
});
