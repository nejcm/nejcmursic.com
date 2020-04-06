import React from 'react';
import Page404 from '../components/404';
import Layout from '../components/Layout';
import SEO from '../components/Seo';

interface Props {}

const title = '404: Not Found';
const NotFoundPage = ({}: Props) => {
  return (
    <Layout>
      <SEO title={title} />
      <Page404 />
    </Layout>
  );
};

export default NotFoundPage;
