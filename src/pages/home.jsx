import Sidebar from '../components/sidebar';
import Header from '../components/header';
import MainContent from '../components/maincontent';

const Home = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <MainContent />
      </div>
    </div>
  );
};

export default Home;
