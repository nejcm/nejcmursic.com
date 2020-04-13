import React from 'react';
import Page404 from '../components/404';
import Layout from '../components/Layout';
import SEO from '../components/Seo';

const title = '404: Not Found';
const NotFoundPage = () => {
  return (
    <Layout headerBackground="transparent">
      <SEO title={title} />
      <Page404 />
    </Layout>
  );
};

export default NotFoundPage;
