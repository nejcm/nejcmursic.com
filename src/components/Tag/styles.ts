import styled from '@emotion/styled';
import theme from '../../../config/theme';

export const Wrapper = styled.span`
  display: inline-block;
  padding: 3px 8px;
  font-size: 0.8em;
  background-color: ${theme.colors.primary_light};
  color: ${theme.colors.primary_dark};
  transition: all 0.3s ease;
  border-radius: ${theme.border_radius};

  &:hover {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
  }
`;

export const List = styled.span`
  span {
    margin: 0 0.5rem 0.5rem 0;
  }
`;
