import type { NextPage } from 'next';
import IndexAbout from '../components/layout/IndexAbout';
import IndexCallout from '../components/layout/IndexCallout';
import IndexHeader from '../components/layout/IndexHeader';
import IndexProjects from '../components/layout/IndexProjects';

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center py-2 mx-auto mt-4 antialiased max-w-fit">
      <IndexHeader />
      <IndexCallout />
      <IndexAbout />
      <IndexProjects />
    </div>
  );
};

export default Home;
