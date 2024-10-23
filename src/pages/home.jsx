import React from 'react';
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import MainContent from '../components/maincontent';
import '../index.css'; 

const Home = () => {
  return (
    <section className="container">
      <Header />
      
      
      <section className="main-container">
        <Sidebar />
        <MainContent />
      </section>
    </section>
  );
};

export default Home;
