import React from 'react';
import website from '../../config/website';
import About from '../components/About';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Skills from '../components/Skills';

interface Props {
  location: Location;
}

const Home = ({location}: Props) => {
  return (
    <Layout location={location}>
      <SEO title={website.siteTitle} suffix={false} />
      <Hero />
      <About />
      <Skills />
    </Layout>
  );
};

export default Home;
