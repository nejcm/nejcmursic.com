import {get} from 'lodash';
import React from 'react';
import resume from '../../../content/resume';
import {Link} from '../Icons';
import Section from '../Section';
import Timeline from '../Timeline';
import {Content, Wrapper} from './styles';

export interface ExperienceType {
  id: number;
  company: string;
  title: string;
  time: string;
  content?: string;
  link?: string;
}

const experience = get(resume, 'experience');
const Experience: React.SFC = () => {
  return (
    <Wrapper>
      <h2 className="l">Experience</h2>
      <Section size="md">
        <Timeline>
          {experience.map((exp: ExperienceType) => (
            <Timeline.Section
              key={exp.id}
              sectionTitle={
                <div>
                  <div>
                    <strong>{exp.company}</strong>
                  </div>
                  <i>{exp.time}</i>
                </div>
              }
            >
              <h3>{exp.title}</h3>
              <Content>{exp.content}</Content>
              {exp.link ? (
                <i>
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    <Link className="link" />
                    {exp.link}
                  </a>
                </i>
              ) : null}
            </Timeline.Section>
          ))}
        </Timeline>
      </Section>
    </Wrapper>
  );
};

export default Experience;
