import { style } from '@vanilla-extract/css';
import { theme } from '../../../themes/main.css';

export const root = style({
  padding: '16px 14px',
  border: `1px solid ${theme.color['gray-8']}`,
  borderRadius: '20px',
});
