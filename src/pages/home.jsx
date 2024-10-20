import React from 'react';
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import MainContent from '../components/maincontent';
import '../styles.css'; // Asegúrate de importar el archivo CSS

const Home = () => {
  return (
    <div className="container">
      {/* Sidebar Fijo */}
      <Sidebar />
      
      {/* Contenedor Principal */}
      <div className="main-container">
        <Header />
        <MainContent />
      </div>
    </div>
  );
};

export default Home;
