import {get} from '@nejcm/js-helpers';
import React from 'react';
import {Col, Row} from 'react-grid-system';
import theme from '../../../config/theme';
import resume from '../../../content/resume.js';
import Container from '../Container';
import Progress from '../Progress';
import Section from '../Section';
import {useTheme} from '../Theme';
import {Wrapper} from './styles';

export interface SkillsProps {}

const skills: Array<any> = get(resume, 'skills');
const other: Array<string> = get(resume, 'other');
const Skills: React.SFC<SkillsProps> = () => {
  const {dark} = useTheme();
  if (!skills) {
    return null;
  }

  return (
    <Section
      id="skills"
      size="xxl"
      background={
        dark ? theme.colors.bg_dark_color_light : theme.colors.gray_light
      }
    >
      <Container size={Container.sizes.lg}>
        <Wrapper>
          <h2 className="l">Skills</h2>
          <div>
            {Object.keys(skills).map((key: any) => (
              <div key={key} className="group">
                <h3>{key}</h3>
                <Row gutterWidth={40}>
                  {Object.keys(skills[key]).map((subKey) => (
                    <Col className="skill" key={subKey} xs={12} sm={6} md={4}>
                      {subKey}
                      <Progress
                        value={skills[key][subKey]}
                        color={theme.colors.primary}
                        background="#ccc"
                      />
                    </Col>
                  ))}
                </Row>
              </div>
            ))}
            <div className="group other">
              <p>Also worked with other tools, libraries, frameworks like:</p>
              <i>{other.join(', ')}, ...</i>
            </div>
          </div>
        </Wrapper>
      </Container>
    </Section>
  );
};

export default Skills;
