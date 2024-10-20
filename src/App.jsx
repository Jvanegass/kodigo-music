import Sidebar from './components/sidebar';
import Header from './components/header';
import MainContent from './components/maincontent';

function App() {
  return (
    <div className="flex">
      {/* Sidebar fijo */}
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        {/* Header fijo en la parte superior */}
        <Header />

        {/* Contenido principal con margen a la izquierda y arriba */}
        <MainContent />
      </div>
    </div>
  );
}

export default App;
