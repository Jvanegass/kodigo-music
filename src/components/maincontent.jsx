const categories = [
    { name: 'Nuevos lanzamientos', color: 'bg-teal-600' },
    { name: 'Charts', color: 'bg-purple-500' },
    { name: 'Women\'s Voices', color: 'bg-pink-500' },
    { name: 'Deezer Next', color: 'bg-purple-600' },
    { name: 'Fiesta', color: 'bg-pink-600' },
    { name: 'Hacer deporte', color: 'bg-blue-900' },
    { name: 'Chill', color: 'bg-pink-500' },
    { name: 'AnimeVerse', color: 'bg-blue-600' },
    { name: 'Lofi', color: 'bg-green-600' },
    { name: 'La Navidad', color: 'bg-red-600' }
  ];
  
  const MainContent = () => {
    return (
      <div className="main-content">
        <h2 className="text-3xl font-bold mb-6">Todos los canales</h2>
        <div className="grid-container">
          {categories.map((category, index) => (
            <div key={index} className="grid-item">
              {category.name}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default MainContent;
  