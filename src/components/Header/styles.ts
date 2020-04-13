import styled from '@emotion/styled';
import theme from '../../../config/theme';

export const Wrapper = styled.header`
  > .top {
    position: relative;
    z-index: 100;
    background-color: ${(props: {background?: string; theme: {dark: number}}) =>
      props.theme.dark
        ? theme.colors.bg_dark_color_light
        : props.background
        ? props.background
        : theme.colors.primary_light};
  }

  .nav-bar {
    padding: 1.5rem 0;
    border-bottom: solid 1px transparent;
    transition: padding 0.25s ease-in-out, background-color 0.25s ease-in-out;
  }

  .headroom--pinned .nav-bar {
    background-color: ${(props: {theme: {dark: number}}) =>
      props.theme.dark
        ? theme.colors.bg_dark_color_lighter
        : theme.colors.white};
    padding: 0.6rem 0;
    border-bottom-color: rgba(0, 0, 0, 0.08);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
  }

  > svg {
    width: 100%;
    height: auto;
    fill: ${(props: {theme: {dark: number}}) =>
      props.theme.dark
        ? theme.colors.bg_dark_color_light
        : theme.colors.primary_light};
    margin-top: -1px;
    vertical-align: top;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    margin-right: 1.5rem;
  }

  .left {
    display: flex;
    align-items: center;
  }

  .menu {
    a {
      display: inline-block;
      padding: 8px 15px;
      margin-left: 8px;
      font-size: 1.05rem;
      font-weight: bold;
      letter-spacing: 0.2px;
    }
  }

  .right {
    text-align: right;
  }

  .theme-toggler {
    font-size: 1.3rem;
    line-height: 1;
    padding: 5px 10px;
    margin-left: 8px;

    svg {
      transition: all 0.4s ease 0.1s;

      &.dark {
        transform: rotate(40deg);
        mask circle {
          cx: 11;
          cy: 3;
        }
        g circle {
          transform: scale(0);
        }
        > circle {
          r: 8;
        }
      }

      &.light {
        transform: rotate(90deg);
        mask circle {
          cx: 26;
          cy: 1;
        }
        g circle {
          transform: scale(1);
        }
        > circle {
          r: 5;
        }
      }

      > circle,
      g circle {
        transition: all 0.4s ease-in-out;
        transform-origin: center center 0px;
        fill: ${(props: {theme: {dark: number}}) =>
          props.theme.dark
            ? theme.colors.body_dark_color
            : theme.colors.body_color};
      }

      &:hover {
        opacity: 0.75;
      }
    }
  }
`;

export const Title = styled.div`
  padding: 2.5rem 0 1rem 0;
  background-color: ${(props: {theme: {dark: number}}) =>
    props.theme.dark
      ? theme.colors.bg_dark_color_light
      : theme.colors.primary_light};

  h1 {
    margin: 0;
    opacity: 0.9;
  }
`;
