import React, {ReactNode} from 'react';
import {Wrapper} from './styles';

export interface TimelineSectionProps
  extends React.HTMLAttributes<HTMLElement> {
  sectionTitle: ReactNode;
  children: ReactNode;
}

const Timeline: TimelineComponent = (props) => {
  return <Wrapper {...props} />;
};

const Section: React.SFC<TimelineSectionProps> = ({
  sectionTitle,
  children,
  ...rest
}) => {
  return (
    <div className="timeline-section" {...rest}>
      <div>{sectionTitle}</div>
      <div>{children}</div>
    </div>
  );
};

Timeline.Section = Section;

export interface TimelineComponent extends React.SFC {
  Section: typeof Section;
}

export default Timeline;
