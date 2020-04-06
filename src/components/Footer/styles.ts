import styled from '@emotion/styled';
import theme from '../../../config/theme';

export const Wrapper = styled.footer`
  background-color: ${theme.colors.bg_dark_color_light};
  color: ${theme.colors.white};

  h3 {
    color: ${theme.colors.white};
    margin-bottom: 0.25rem;
  }
  .icons {
    > * {
      font-size: 1.75rem;
      margin: 0.5rem 0.75rem 0.5rem 0;
      transition: opacity 0.3s ease-in-out;

      &:hover {
        opacity: 0.8;
      }
    }
  }
  .credits {
    font-size: 0.9rem;
    text-align: right;
  }

  @media (max-width: ${theme.breakpoints.sm}px) {
    .icons {
      margin-bottom: 2rem;
    }
  }
`;

export const Bottom = styled.div`
  padding: 1rem 0;
  border-top: solid 1px rgba(255, 255, 255, 0.1);
  text-align: center;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
`;
