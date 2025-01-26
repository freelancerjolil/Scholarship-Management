import { Helmet } from 'react-helmet-async';
import Banner from '../../components/Banner/Banner';
import TopScholarships from '../AllScholarships/TopScholarships';

const Home = () => {
  return (
    <div className="w-full container mx-auto px-0 md:px-8 lg:px-4">
      <Helmet>
        <title>Edu-Track | Home </title>
      </Helmet>
      <main>
        <Banner></Banner>
        <TopScholarships></TopScholarships>
      </main>
    </div>
  );
};

export default Home;
