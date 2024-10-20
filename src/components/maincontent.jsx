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
      <div className="flex-1 p-5 bg-gray-100">
        <h2 className="text-3xl font-bold mb-6">Todos los canales</h2>
        <div className="grid grid-cols-3 gap-4">
          {categories.map((category, index) => (
            <div key={index} className={`${category.color} p-6 rounded-lg text-white flex items-center justify-center text-xl font-bold`}>
              {category.name}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default MainContent;
  