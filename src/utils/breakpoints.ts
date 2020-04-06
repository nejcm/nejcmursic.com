export const mediaQueryMax = (bp: string): string =>
  `@media (max-width: ${bp})`;
export const mediaQueryMin = (bp: string): string =>
  `@media (min-width: ${bp})`;
export const mediaQueryBoth = (minBp: string, maxBp: string): string =>
  `@media (min-width: ${minBp}) and (max-width: ${maxBp})`;

export const desktopOnly = `@media (min-width: 1024px)`;
export const mobileOnly = `@media (max-width: 1023px)`;
