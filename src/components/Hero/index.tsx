import {Col, Row} from 'react-grid-system';
import website from '../../../config/website';
import profileImg from '../../assets/images/profile.png';
import Container from '../Container';
import {HeroContent, ImageWrapper, Wrapper} from './styles';

export interface HeroProps {}

const Hero: React.SFC<HeroProps> = () => {
  return (
    <Wrapper>
      <Container size={Container.sizes.lg}>
        <Row align="center">
          <Col className="left" xs={12} sm={8} md={6}>
            <HeroContent>
              <h1>Sloth by day... Developer by night.</h1>
              <h3>Hey there, I'm Nejc - web developer</h3>
              <a
                href={`mailto:${website.email}`}
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                <button>CONTACT ME</button>
              </a>
            </HeroContent>
          </Col>
          <Col className="right" xs={12} sm={4} md={6}>
            <ImageWrapper>
              <img
                src={profileImg}
                width="100%"
                height="auto"
                alt={website.siteTitle}
              />
            </ImageWrapper>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Hero;
