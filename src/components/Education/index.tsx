import {get} from '@nejcm/js-helpers';
import React from 'react';
import resume from '../../../content/resume.js';
import {Link} from '../Icons';
import Section from '../Section';
import Timeline from '../Timeline';
import {Content, Wrapper} from './styles';

export interface EducationProps {}
export interface EducationType {
  id: number;
  institution: string;
  title: string;
  time: string;
  content?: string;
  link?: string;
}

const education = get(resume, 'education');
const Education: React.SFC<EducationProps> = () => {
  return (
    <Wrapper>
      <h2 className="l">Education</h2>
      <Section size="md">
        <Timeline>
          {education.map((edu: EducationType) => (
            <Timeline.Section
              key={edu.id}
              sectionTitle={
                <div>
                  <div>
                    <strong>{edu.institution}</strong>
                  </div>
                  <i>{edu.time}</i>
                </div>
              }
            >
              <h3>{edu.title}</h3>
              <Content>{edu.content}</Content>
              {edu.link ? (
                <i>
                  <a
                    href={edu.link}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    <Link className="link" />
                    {edu.link}
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

export default Education;
