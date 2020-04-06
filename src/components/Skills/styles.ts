import styled from '@emotion/styled';
import theme from '../../../config/theme';

export const Wrapper = styled.div`
  .group {
    margin-bottom: 2.5rem;
  }
  .skill {
    margin-bottom: 0.75rem;
  }

  @media (max-width: ${theme.breakpoints.sm}px) {
    .other {
      text-align: justify;
    }
  }
`;
