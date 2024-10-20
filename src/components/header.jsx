import { FaSearch, FaUser } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="w-full bg-gray-800 text-white flex justify-between p-4">
      <div className="flex items-center space-x-3">
        <FaSearch />
        <input
          type="text"
          placeholder="Buscar"
          className="bg-gray-700 px-3 py-2 rounded-lg text-white outline-none"
        />
      </div>
      <div className="flex items-center space-x-3">
        <span>Usuario</span>
        <FaUser />
      </div>
    </div>
  );
};

export default Header;
