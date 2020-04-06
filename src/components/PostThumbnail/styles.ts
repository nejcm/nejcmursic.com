import styled from '@emotion/styled';
import theme from '../../../config/theme';

export const Article = styled.article`
  > a {
    color: ${(props: {theme: {dark: number}}) =>
      props.theme.dark ? theme.colors.gray : theme.colors.body_color};
  }

  header {
    margin-bottom: 1rem;
    h3 {
      margin: 0;
    }
    small {
      position: relative;
      top: -2px;
      color: ${theme.colors.gray_darkest};
    }
  }

  footer {
    .read-more {
      span {
        transition: margin 0.3s ease;
        margin-left: 0.3rem;
      }
    }
  }

  &:hover {
    header {
      h3 {
        color: ${theme.colors.primary};
      }
    }
    footer {
      .read-more {
        color: ${theme.colors.primary};
        span {
          margin-left: 1rem;
        }
      }
    }
  }
`;
