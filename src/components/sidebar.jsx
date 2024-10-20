const Sidebar = () => {
    return (
      <div className="fixed top-0 left-0 h-screen w-64 bg-gray-900 text-white p-5 shadow-lg">
        <div className="text-2xl font-bold mb-10 text-center">Kodigo Music</div>
        <ul className="space-y-6">
          <li className="flex items-center space-x-3 p-2 hover:bg-gray-700 rounded-lg transition duration-300 ease-in-out">
            <span>Inicio</span>
          </li>
          <li className="flex items-center space-x-3 p-2 hover:bg-gray-700 rounded-lg transition duration-300 ease-in-out">
            <span>Explorar</span>
          </li>
        </ul>
        <div className="mt-10">
          <h3 className="text-white mb-4">Playlists</h3>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center">
            Crear una playlist
          </button>
        </div>
      </div>
    );
  };
  
  export default Sidebar;
  