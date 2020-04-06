import styled from '@emotion/styled';
import React, {ReactNode} from 'react';
import Layout from '.';
import theme from '../../../config/theme';
import Container from '../Container';
import Section from '../Section';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: no-wrap;

  .main {
    width: 100%;
    margin-right: 3rem;
  }
  .sidebar {
    width: 300px;
    min-width: 300px;

    > div {
      margin-bottom: 4rem;

      h3 {
        margin-bottom: 1.5rem;
      }
    }
  }

  article {
    margin-bottom: 3rem;
  }

  @media (max-width: ${theme.breakpoints.md}px) {
    display: block;

    .main {
      margin: 0 0 5rem 0;
    }
    .sidebar {
      display: ${(props: {hideOnMobile: boolean}) =>
        props.hideOnMobile ? 'none' : 'block'};
      width: 100%;
      min-width: none;
    }
  }
`;

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  headerTitle?: ReactNode;
  sidebar: ReactNode;
  hideOnMobile?: boolean;
}

const SidebarLayout = ({
  headerTitle,
  hideOnMobile = false,
  sidebar,
  children,
}: Props) => (
  <Layout headerTitle={headerTitle}>
    <Container size={Container.sizes.lg}>
      <Section id="posts" size="xl">
        <Wrapper hideOnMobile={hideOnMobile}>
          <div className="main">{children}</div>
          <div className="sidebar">{sidebar}</div>
        </Wrapper>
      </Section>
    </Container>
  </Layout>
);

export default SidebarLayout;
