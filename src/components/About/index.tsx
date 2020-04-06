import React from 'react';
import {Col, Row} from 'react-grid-system';
import resume from '../../../content/resume';
import blob from '../../../static/images/blob.svg';
import Container from '../Container';
import Education from '../Education';
import Experience from '../Experience';
import Section from '../Section';
import Social from '../Social';
import {BackgroundImage, Content, SocialWrapper, Wrapper} from './styles';

const About: React.SFC = () => {
  return (
    <Wrapper>
      <Section id="about" size="xl">
        <Container size={Container.sizes.lg}>
          <Row align="center">
            <Col sm={12} md={6} push={{sm: 0, md: 6}} style={{zIndex: 2}}>
              <h2 className="l">About me</h2>
              <Content dangerouslySetInnerHTML={{__html: resume.about}} />
            </Col>
            <Col sm={12} md={6} pull={{sm: 0, md: 6}}>
              <BackgroundImage
                src={blob}
                width="120%"
                height="auto"
                alt="blob"
              />
              <SocialWrapper>
                <div>
                  <Social />
                </div>
              </SocialWrapper>
            </Col>
          </Row>
        </Container>
      </Section>
      <Section size="xxl">
        <Container size={Container.sizes.lg}>
          <div id="education">
            <Education />
          </div>
          <div id="experience">
            <Experience />
          </div>
        </Container>
      </Section>
    </Wrapper>
  );
};

export default About;
