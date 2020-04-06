import { css } from '@emotion/core';
import theme from '../../../config/theme';
import reset from '../../utils/reset';

export const globalStyles = (dark: number | undefined) => css`
  ${reset};
  html,
  body {
    background-color: ${
      dark ? theme.colors.bg_dark_color : theme.colors.bg_color
    };
    color: ${dark ? theme.colors.body_dark_color : theme.colors.body_color};
  }
  body .gatsby-resp-image-image {
    background-color: rgba(0, 0, 0, 0.1) !important;
    box-shadow: none !important;
  }
  hr {
    margin: 50px 0;
    border: none;
    border-top: 1px solid ${theme.colors.black_transparent};
    background: none;
  }
  em {
    font-weight: normal;
    font-style: italic;
  }
  strong,
  b {
    font-weight: bold;
    em {
      font-weight: bold;
    }
  }
  input,
  textarea {
    border-radius: ${theme.border_radius};
    border: 1px solid
      ${dark ? theme.colors.white_transparent : theme.colors.black_transparent};
    padding: 5px 10px;
    ::placeholder {
      opacity: 0.5;
    }
  }
  button,
  .button {
    border-radius: ${theme.border_radius};
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    padding: 8px 15px;
    cursor: pointer;
    border: 1px solid ${theme.colors.primary};
    transition: all 0.25s ease-in-out;
    :hover:not(:disabled) {
      background: ${theme.colors.primary_dark};
      border-color: ${theme.colors.primary_dark};
      color: ${theme.colors.white};
    }
    :focus {
      outline: none;
    }
    :disabled {
      opacity: 0.7;
      cursor: auto;
    }

    &.link {
      border: none;
      background-color: transparent;
      color: ${theme.colors.primary};
      &:hover:not(:disabled) {
        background-color: transparent;
        color: ${theme.colors.primary_dark};
      }
    }

    &.none {
      border: none;
      background-color: transparent;
      color: ${dark ? theme.colors.body_dark_color : theme.colors.body_color};
      &:hover:not(:disabled) {
        background-color: transparent;
      }
    }
  }
  code {
    padding: 3px 5px;
    background: #f3f8fa;
    color: ${dark ? theme.colors.body_dark_color : theme.colors.body_color};
    border-radius: ${theme.border_radius};
  }
  a {
    &.inverse {
      color: ${dark ? theme.colors.body_dark_color : theme.colors.body_color};

      &:hover {
        color: ${theme.colors.primary};
      }
    }
    &.secondary {
      color: ${theme.colors.dark};

      &:hover {
        color: ${dark ? theme.colors.gray : theme.colors.black};
      }
    }
    code {
      color: ${theme.colors.primary};
    }
    svg.link * {
      fill: ${theme.colors.primary};
    }
    &:hover svg.link * {
      fill: ${theme.colors.primary_dark};
    }
  }
  pre {
    background-color: #061826 !important;
    border-radius: ${theme.border_radius};
    font-size: 16px;
    padding: 10px;
    overflow-x: auto;
    /* Track */
    ::-webkit-scrollbar {
      width: 100%;
      height: 5px;
      border-radius: 0 0 5px 5px;
    }
    ::-webkit-scrollbar-track {
      background: #061826;
      border-radius: 0 0 4px 4px;
      border: 1px solid rgba(0, 0, 0, 0.2);
    }
    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #808080;
      border-radius: ${theme.border_radius};
    }
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${dark ? theme.colors.body_dark_color : theme.colors.body_color};
  }
  h1.secondary,
  h2.secondary,
  h3.secondary,
  h4.secondary,
  h5.secondary,
  h6.secondary {
    color: ${theme.colors.primary};
    letter-spacing: 0.15px;
    font-weight: normal;
  }
  h1.l {
    font-size: 3rem;
  }
  h2.l {
    font-size: 2.2rem;
  }
  h3.l {
    font-size: 1.75rem;
  }
  h4.l {
    font-size: 1.5rem;
  }
  li {
    > p, > div {
      display: inline-block;
    }
  }
`;
