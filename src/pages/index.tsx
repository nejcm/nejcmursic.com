import website from '../../config/website';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import SEO from '../components/Seo';

interface Props {
  location: Location;
}

const Home = ({location}: Props) => {
  return (
    <Layout location={location}>
      <SEO
        title={website.siteTitle}
        description={website.siteDescription}
        suffix={false}
      />
      <Hero />
    </Layout>
  );
};

export default Home;
