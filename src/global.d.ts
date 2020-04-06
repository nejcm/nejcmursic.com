declare const __PATH_PREFIX__: string;

declare module '@nejcm/js-helpers' {
  export function get(
    obj: Object,
    path: string | Array<string>,
    fallback?: any,
  ): any;
  export function measure2Css(val: string | number): string;
}

declare module 'react-scrollspy';

declare module '*.jpg';
declare module '*.png';
declare module '*.svg';
declare module '*.gif';
declare module '*.json';
