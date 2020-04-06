import Typography from 'typography';

export const font =
  'Calibri, Candara, Segoe, Segoe UI, Optima, Arial, sans-serif';
export const codeFont =
  'Consolas, "Courier New", Courier, "Lucida Sans Typewriter", "Lucida Typewriter", monospace;';
export const serifFont = 'Georgia, Times, "Times New Roman", serif';

interface Props {
  rhythm: (x: number) => string;
}

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.5,
  headerLineHeight: 1.33,
  headerFontFamily: font.split(','),
  bodyFontFamily: font.split(','),
  headerColor: '#FAFAFA',
  bodyColor: '#FAFAFA',

  overrideStyles: ({rhythm}: Props) => ({
    body: {
      fontVariantLigatures: 'none',
    },
    'h1 code, h2 code, h3 code, h4 code, h5 code, h6 code': {
      fontSize: 'inherit',
    },
    'h1,h2,h3,h4,h5,h6': {
      lineHeight: 1,
    },
    'h1,h2,h3,h4': {
      lineHeight: 1.25,
      marginBottom: rhythm(0.4),
      letterSpacing: '-0.03rem',
      fontWeight: 600,
      fontFamily: codeFont,
    },
    strong: {
      fontWeight: 600,
    },
    p: {
      marginBottom: '1rem',
    },
    img: {
      marginBottom: 0,
    },
  }),
});
// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
