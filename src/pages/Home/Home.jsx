import { Helmet } from 'react-helmet-async';
import Banner from '../../components/Banner/Banner';
import TopScholarships from '../AllScholarships/TopScholarships';
import ExtraSection1 from './ExtraSection1';
import ExtraSection2 from './ExtraSection2';
import WhyChooseUs from './WhyChooseUs';

const Home = () => {
  return (
    <div className="w-full container mx-auto px-0 md:px-8 lg:px-4">
      <Helmet>
        <title>Edu-Track | Home </title>
      </Helmet>
      <main>
        <Banner></Banner>
        <TopScholarships></TopScholarships>
        <ExtraSection1></ExtraSection1>
        <ExtraSection2></ExtraSection2>
        <WhyChooseUs></WhyChooseUs>
      </main>
    </div>
  );
};

export default Home;
