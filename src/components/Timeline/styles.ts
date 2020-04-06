import styled from '@emotion/styled';
import theme from '../../../config/theme';

export const Wrapper = styled.div`
  .timeline-section {
    display: flex;
    flex-wrap: no-wrap;

    > div {
      &:first-of-type {
        padding: 1rem 1.5rem 1rem 0;
        width: 200px;
        text-align: right;
        line-height: 1.25;
      }

      &:last-of-type {
        position: relative;
        width: 100%;
        padding: 1rem 0 1rem 1.5rem;
        transition: border 0.25s ease;
        border-left: 2px solid
          ${(props: {theme: {dark: number}}) =>
            props.theme.dark ? theme.colors.gray_dark : '#ccc'};

        &:before {
          content: ' ';
          position: absolute;
          left: -7px;
          top: 1.45rem;
          width: 12px;
          height: 12px;
          transition: background-color 0.25s ease;
          background-color: ${(props: {theme: {dark: number}}) =>
            props.theme.dark ? theme.colors.gray_dark : '#ccc'};
          border-radius: 50%;
          z-index: 2;
        }
      }
    }

    @media (max-width: ${theme.breakpoints.md}px) {
      display: block;

      > div {
        &:first-of-type {
          transition: border 0.25s ease;
          border-left: 2px solid
            ${(props: {theme: {dark: number}}) =>
              props.theme.dark ? theme.colors.gray_dark : '#ccc'};
          padding: 1rem 0 0 1.5rem;
          text-align: left;
        }
        &:last-of-type {
          padding: 0.5rem 0 2rem 1.5rem;

          &:before {
            top: 0.95rem;
          }
        }
      }
    }

    &:hover > div {
      border-color: ${theme.colors.primary};
      &:before {
        background-color: ${theme.colors.primary};
      }
    }
  }
`;
