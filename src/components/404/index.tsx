import styled from '@emotion/styled';
import {Link} from 'gatsby';
import React from 'react';
import {Col, Row} from 'react-grid-system';
import theme from '../../../config/theme';
import website from '../../../config/website';
import Card from '../../components/Card';
import Container from '../../components/Container';
import {Message, Resume} from '../../components/Icons';

const Wrapper = styled.div`
  .top,
  .bottom {
    padding: ${theme.spacer.xl} 0;
  }
  .top {
    .text {
      z-index: 2;
    }
    .image {
      z-index: 0;

      > img {
        box-shadow: 0px 0px 50px 50px
          ${(props: {theme: {dark: number}}) =>
            props.theme.dark ? theme.colors.bg_dark_color : theme.colors.white};
      }
    }
  }
  svg {
    fill: ${(props: {theme: {dark: number}}) =>
      props.theme.dark ? theme.colors.gray_dark : theme.colors.body_color};
  }
`;

const max = 4;
const num = Math.floor(Math.random() * max) + 1;
// eslint-disable-next-line @typescript-eslint/no-var-requires
const image = require(`../../assets/images/404_${num}.png`);

const NotFoundPage = () => {
  return (
    <Container size={Container.sizes.lg}>
      <Wrapper>
        <Row className="top" align="center">
          <Col className="text" xs={12} sm={6} style={{marginBottom: 24}}>
            <h1>Ooops! The page you were looking for does not exist.</h1>
            <p>
              You may have misstyped the address or the page may have moved.
            </p>
            <Link to="/">
              <button>Go to homepage</button>
            </Link>
          </Col>
          <Col xs={12} sm={6} className="image">
            <img src={image} alt="404" />
          </Col>
        </Row>
        <Row className="bottom">
          <Col xs={12} md={6}>
            <Card>
              <h3>
                <Message style={{marginRight: 12}} />
                Get in touch
              </h3>
              <p>Say hi and shot me a message.</p>
              <a
                href={`mailto:${website.email}`}
                target="_blank"
                rel="noreferrer noopener"
              >
                Email me →
              </a>
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <Card>
              <h3>
                <Resume style={{marginRight: 12}} />
                My resume
              </h3>
              <p>Check out my CV.</p>
              <a
                href={`/${website.cv}`}
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                Open →
              </a>
            </Card>
          </Col>
        </Row>
      </Wrapper>
    </Container>
  );
};

export default NotFoundPage;
