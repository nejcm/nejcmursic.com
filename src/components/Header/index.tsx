import {Link} from 'gatsby';
import React, {ReactNode} from 'react';
import Headroom from 'react-headroom';
import theme from '../../../config/theme';
import website from '../../../config/website';
import logo from '../../../static/images/logo_square.png';
import Container from '../Container';
import {Wave} from '../Icons';
import {useTheme} from '../Theme';
import {Flex, Title, Wrapper} from './styles';

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  headerTitle?: ReactNode;
  headerBackground?: string;
}

const Header: React.SFC<HeaderProps> = ({
  headerTitle,
  headerBackground,
  ...rest
}) => {
  const {dark, toggle} = useTheme();
  const switchTitle = dark ? 'Deactivate dark mode' : 'Activate dark mode';

  return (
    <Wrapper background={headerBackground} {...rest}>
      <div className="top">
        <Headroom>
          <div className="nav-bar">
            <Container size={Container.sizes.lg}>
              <Flex>
                <div className="left">
                  <Link to="/">
                    <img
                      className="logo"
                      src={logo}
                      width="auto"
                      height={48}
                      alt={website.siteTitle}
                    />
                  </Link>
                </div>
                <div className="right menu">
                  {/* <Link to={'/blog'} className="inverse">
                  Blog
                </Link> */}
                  <a
                    href={`/${website.cv}`}
                    target="_blank"
                    className="inverse"
                    rel="nofollow noopener noreferrer"
                  >
                    CV
                  </a>
                  <button
                    className="none theme-toggler"
                    aria-label={switchTitle}
                    title={switchTitle}
                    onClick={() => toggle()}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={dark ? 'dark' : 'light'}
                      viewBox="0 0 20 20"
                      width="1em"
                      height="1em"
                    >
                      <mask id="moon-mask-nool">
                        <rect fill="#fff" x="0" y="0" width="20" height="20" />
                        <circle
                          fill={theme.colors.bg_dark_color}
                          cx="26"
                          cy="1"
                          r="8"
                        />
                      </mask>
                      <circle
                        mask='url("#moon-mask-nool")'
                        cx="10"
                        cy="10"
                        r="5"
                      />
                      <g>
                        <circle cx="18" cy="10" r="1.5" />
                        <circle cx="14" cy="16.9282" r="1.5" />
                        <circle cx="6" cy="16.9282" r="1.5" />
                        <circle cx="2" cy="10" r="1.5" />
                        <circle cx="6" cy="3.0718" r="1.5" />
                        <circle cx="14" cy="3.0718" r="1.5" />
                      </g>
                    </svg>
                  </button>
                </div>
              </Flex>
            </Container>
          </div>
        </Headroom>
      </div>
      {headerTitle ? (
        <>
          <Title>
            <Container size={Container.sizes.lg}>{headerTitle}</Container>
          </Title>
          <Wave />
        </>
      ) : null}
    </Wrapper>
  );
};

export default Header;
