import { FaHome, FaSearch, FaPlus } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="text-2xl font-bold mb-10">Kodigo Music</div>
      <ul className="space-y-6">
        <li className="flex items-center space-x-3 p-2">
          <FaHome /> <span>Inicio</span>
        </li>
        <li className="flex items-center space-x-3 p-2">
          <FaSearch /> <span>Explorar</span>
        </li>
      </ul>
      <div className="mt-10">
        <h3 className="mb-4">Playlists</h3>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center">
          <FaPlus className="mr-2" /> Crear una playlist
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
