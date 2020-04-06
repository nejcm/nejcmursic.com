import styled from '@emotion/styled';
import theme from '../../../config/theme';

export const Wrapper = styled.div`
  a svg {
    font-size: 0.85rem;
    margin-right: 0.8rem;
  }
  @media (max-width: ${theme.breakpoints.sm}px) {
    text-align: justify;
  }
`;

export const Content = styled.p`
  @media (max-width: ${theme.breakpoints.sm}px) {
    text-align: justify;
  }
`;
