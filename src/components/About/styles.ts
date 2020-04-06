import styled from '@emotion/styled';
import theme from '../../../config/theme';

export const Wrapper = styled.div``;

export const Content = styled.div`
  font-size: 1.1rem;
  @media (max-width: ${theme.breakpoints.sm}px) {
    text-align: justify;
  }
`;

export const BackgroundImage = styled.img`
  position: absolute;
  width: 80%;
  max-width: none;
  margin: -10% 10%;
  z-index: 0;
  opacity: 0.18;

  @media (max-width: ${theme.breakpoints.sm}px) {
    width: 75%;
    margin: -33% 3%;
  }
`;

export const SocialWrapper = styled.div`
  position: relative;
  min-height: 350px;

  a {
    position: absolute;
    display: inline-block;
    line-height: 0;
    font-size: 7.5rem;
    text-align: center;
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: scale(1.15);
    }

    svg {
      background-color: #fff;
      border-radius: 50%;
    }

    &:nth-of-type(1) {
      left: 13%;
      top: 0;
    }
    &:nth-of-type(2) {
      left: 2%;
      bottom: 18%;
    }
    &:nth-of-type(3) {
      right: 22%;
      top: 12%;
    }
    &:nth-of-type(4) {
      right: 5%;
      bottom: 13%;
    }
    &:nth-of-type(5) {
      left: 33%;
      bottom: 0;
    }
  }

  @media (max-width: ${theme.breakpoints.md}px) {
    min-height: 270px;

    a {
      font-size: 5.5rem;
    }
  }
  @media (max-width: ${theme.breakpoints.sm}px) {
    min-height: 0;

    a {
      font-size: 2.75rem;
      position: relative;
      top: 0 !important;
      left: 0 !important;
      right: 0 !important;
      bottom: 0 !important;
      margin: 1rem 1rem 1rem 0;
    }
  }
`;
