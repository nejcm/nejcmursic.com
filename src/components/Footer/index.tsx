import * as React from 'react';
import {Col, Row} from 'react-grid-system';
import theme from '../../../config/theme';
import Container from '../Container';
import Social from '../Social';
import {Bottom, Wrapper} from './styles';

const Footer: React.SFC = () => {
  return (
    <Wrapper>
      <Container size={Container.sizes.lg}>
        <div style={{padding: `${theme.spacer.xl} 0`}}>
          <Row>
            <Col xs={12} sm={6}>
              <h3>Wish to talk?</h3>
              <p>
                Let&#39;s get in touch!{' '}
                <span role="img" aria-label="high five">
                  🖐
                </span>
              </p>
              <div className="icons">
                <Social color="#ccc" />
              </div>
            </Col>
            <Col xs={12} sm={6}>
              <div className="credits">
                <div>
                  Icons made by{' '}
                  <a
                    href="https://www.flaticon.com/authors/freepik"
                    title="Freepik"
                  >
                    Freepik
                  </a>{' '}
                  from{' '}
                  <a href="https://www.flaticon.com/" title="Flaticon">
                    www.flaticon.com
                  </a>
                </div>
                <div>
                  Icons made by{' '}
                  <a
                    href="https://www.flaticon.com/authors/pixel-perfect"
                    title="Pixel perfect"
                  >
                    Pixel perfect
                  </a>{' '}
                  from{' '}
                  <a href="https://www.flaticon.com/" title="Flaticon">
                    www.flaticon.com
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <Bottom>
          © {new Date().getFullYear()}, Nejc Mursic All Rights Reserved
        </Bottom>
      </Container>
    </Wrapper>
  );
};

export default Footer;
