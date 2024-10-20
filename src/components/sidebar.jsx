import { FaHome, FaSearch, FaMusic } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-5">
      <div className="text-2xl font-bold mb-10">Kodigo Music</div>
      <ul className="space-y-6">
        <li className="flex items-center space-x-3">
          <FaHome /> <span>Inicio</span>
        </li>
        <li className="flex items-center space-x-3">
          <FaSearch /> <span>Buscar</span>
        </li>
        <li className="flex items-center space-x-3">
          <FaMusic /> <span>Tu Biblioteca</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
