import React from 'react';
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import MainContent from '../components/maincontent';
import '../styles.css'; 

const Home = () => {
  return (
    <div className="container">
      <Sidebar />
      
      <div className="main-container">
        <Header />
        <MainContent />
      </div>
    </div>
  );
};

export default Home;
