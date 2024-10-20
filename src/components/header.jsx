import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="w-full bg-gray-800 text-white p-4 flex justify-between items-center">
      {/* Barra de búsqueda */}
      <input
        type="text"
        placeholder="Artistas, canciones, podcasts..."
        className="bg-gray-700 px-4 py-2 rounded-lg w-2/3"
      />
      
      {/* Botones de iniciar sesión y registrarse */}
      <div className="flex items-center space-x-3">
        <Link to="/login" className="bg-transparent text-white">Iniciar sesión</Link>
        <Link to="/register" className="bg-purple-600 px-4 py-2 rounded-lg text-white">Registrarse</Link>
      </div>
    </div>
  );
};

export default Header;
