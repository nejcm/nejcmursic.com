import styled from '@emotion/styled';
import theme from '../../../config/theme';

export const Wrapper = styled.div`
  background-color: ${(props: {theme: {dark: number}}) =>
    props.theme.dark
      ? theme.colors.bg_dark_color_light
      : theme.colors.primary_light};
  overflow: hidden;

  .left {
    z-index: 2;
  }
  .right {
    align-self: flex-end;
  }
`;

export const HeroContent = styled.div`
  margin: 4rem 0;

  h2,
  h3 {
    font-weight: 300;
  }
  h3 {
    margin-bottom: 2.5rem;
  }
  a {
    margin-right: 1rem;
    button {
      min-width: 100px;
    }
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  text-align: right;
  padding-top: 3rem;
  z-index: 0;
  margin: 0 -1.25rem;

  img {
    width: auto;
    height: auto;
    max-height: 450px;
    max-width: none;
  }

  @media (max-width: ${theme.breakpoints.sm}px) {
    img {
      max-height: 350px;
      opacity: 0.7;
    }
  }
  @media (max-width: ${theme.breakpoints.xs}px) {
    padding-top: 0;

    img {
      margin-top: -150px;
      max-height: 300px;
      opacity: 0.7;
    }
  }
`;
