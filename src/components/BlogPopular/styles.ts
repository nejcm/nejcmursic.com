import styled from '@emotion/styled';
import theme from '../../../config/theme';

export const Wrapper = styled.div`
  h4 {
    font-size: 1.1rem;
    display: inline;

    a {
      color: ${(props: {theme: {dark: number}}) =>
        props.theme.dark ? theme.colors.gray : theme.colors.body_color};
    }

    &:hover {
      text-decoration: underline;
    }
  }
`;
