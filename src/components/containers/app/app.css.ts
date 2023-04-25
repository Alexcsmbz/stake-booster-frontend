import { globalStyle, globalFontFace, style } from '@vanilla-extract/css';

const effra = 'Effra';

globalFontFace(effra, {
  src: 'url(/public/fonts/effra.ttf)',
  fontWeight: 500,
  fontStyle: 'normal',
  fontDisplay: 'swap',
});

const font = style({
  fontFamily: effra,
});

export const root = style([font]);

globalStyle('body', {
  height: '100%',
  fontSize: 14,
  minWidth: 320,
  margin: 0,
});

globalStyle('html', {
  height: '100%',
  boxSizing: 'border-box',
  backgroundColor: '#E9F2FF',
});

globalStyle('*, *::after, *::before', {
  boxSizing: 'inherit',
});

globalStyle('ul', {
  listStyle: 'none',
  padding: 0,
  margin: 0,
});

globalStyle('a', {
  textDecoration: 'none',
  color: '#000',
});

globalStyle('button', {
  margin: 0,
  padding: 0,
  border: 0,
  backgroundColor: 'transparent',
  cursor: 'pointer',
});

globalStyle('input', {
  padding: 0,
  margin: 0,
  border: 0,
  outline: 0,
  backgroundColor: 'transparent',
});

globalStyle('p, h3', {
  margin: 0,
});
