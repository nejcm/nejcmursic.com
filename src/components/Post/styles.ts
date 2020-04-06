import styled from '@emotion/styled';
import theme from '../../../config/theme';

export const Wrapper = styled.article`
  padding: 0 2rem;

  section {
    margin-bottom: 3rem;
    font-size: 18px;

    h1,
    h2,
    h3,
    h4,
    h5 {
      margin: 2rem 0 1.25rem 0;
      color: ${(props: {theme: {dark: number}}) =>
        props.theme.dark ? theme.colors.primary : theme.colors.body_color};

      > .header-link {
        padding-right: 10px;

        > svg {
          width: 0.8em;
          height: 0.8em;
          fill: ${(props: {theme: {dark: number}}) =>
            props.theme.dark ? theme.colors.primary : theme.colors.gray_darker};
        }
      }
    }
    h2 {
      font-size: 2.2rem;
    }
    h3 {
      font-size: 1.8rem;
    }
    h4 {
      font-size: 1.5rem;
    }
    h5 {
      font-size: 1.25rem;
    }
  }

  .date {
    font-style: italic;
    font-weight: bold;
    color: ${theme.colors.gray_darkest};
  }

  @media (max-width: ${theme.breakpoints.lg}px) {
    padding: 0 1.5rem;
  }
  @media (max-width: ${theme.breakpoints.md}px) {
    padding: 0 1.25rem;
    section {
      text-align: justify;
    }
  }
  @media (max-width: ${theme.breakpoints.xs}px) {
    padding: 0;
  }
`;
