const categories = [
    { name: 'Nuevos lanzamientos', color: '#1DB954' },
    { name: 'Charts', color: '#E91E63' },
    { name: 'Women\'s Voices', color: '#9C27B0' },
    { name: 'Deezer Next', color: '#673AB7' },
    { name: 'Fiesta', color: '#FF5722' },
    { name: 'Hacer deporte', color: '#3F51B5' },
    { name: 'Chill', color: '#00BCD4' },
    { name: 'AnimeVerse', color: '#03A9F4' },
    { name: 'Lofi', color: '#4CAF50' },
    { name: 'La Navidad', color: '#F44336' }
  ];
  
  const MainContent = () => {
    return (
      <div className="main-content">
        <h2 className="text-3xl font-bold mb-6">Todos los canales</h2>
        <div className="grid-container">
          {categories.map((category, index) => (
            <div key={index} className="grid-item" style={{ backgroundColor: category.color }}>
              {category.name}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default MainContent;
  