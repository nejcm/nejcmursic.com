import {get} from '@nejcm/js-helpers';
import React from 'react';
import website from '../../../config/website';
import {
  Email,
  Facebook,
  Github,
  Linkedin,
  Stackoverflow,
  Twitter,
} from '../Icons';

export interface SocialProps {
  className?: string;
  color?: string;
}

const iconMap = {
  linkedin: Linkedin,
  github: Github,
  stackoverflow: Stackoverflow,
  facebook: Facebook,
  twitter: Twitter,
};

const Social: React.SFC<SocialProps> = ({className, color}) => {
  return (
    <>
      {Object.keys(website.social).map((key: any) => {
        const link = get(website.social, `${key}.link`);
        if (!link || get(website.social, `${key}.disabled`, false)) {
          return null;
        }
        const Component = get(iconMap, key);
        return (
          <a
            key={key}
            href={link}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className={`${key} ${className || ''}`}
          >
            <Component color={color || get(website.social, `${key}.color`)} />
          </a>
        );
      })}
      <a
        href={`mailto:${website.email}`}
        target="_blank"
        rel="nofollow noopener noreferrer"
        className={`email ${className || ''}`}
      >
        <Email color={color || '#999'} />
      </a>
    </>
  );
};

export default Social;
