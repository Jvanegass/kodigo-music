const MainContent = () => {
    const playlists = [
      { name: 'Pop Hits', description: 'Las mejores canciones pop del momento' },
      { name: 'Relaxing Music', description: 'Relájate con estas canciones' },
      // Agrega más playlists...
    ];
  
    return (
      <div className="flex-1 p-5 bg-gray-100">
        <h2 className="text-2xl font-bold mb-4">Recomendaciones</h2>
        <div className="grid grid-cols-4 gap-4">
          {playlists.map((playlist, index) => (
            <div key={index} className="bg-white p-3 rounded-lg shadow-md">
              <img
                src={`https://via.placeholder.com/150?text=${playlist.name}`}
                alt={playlist.name}
                className="mb-3 rounded-lg"
              />
              <h3 className="text-lg font-semibold">{playlist.name}</h3>
              <p className="text-sm text-gray-500">{playlist.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default MainContent;
  