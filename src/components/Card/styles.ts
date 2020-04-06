import styled from '@emotion/styled';
import theme from '../../../config/theme';

export const Wrapper = styled.div`
  padding: 1.25rem;
  border-radius: ${theme.border_radius};
  border: solid 1px rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.05);
  background-color: ${(props: {theme: {dark: number}}) =>
    props.theme.dark ? theme.colors.bg_dark_color_hover : theme.colors.white};
  margin-bottom: 1.25rem;
`;
