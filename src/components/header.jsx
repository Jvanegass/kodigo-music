import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <input
        type="text"
        placeholder="Buscar canciones, artistas..."
        className="bg-gray-700 px-4 py-2 rounded-lg"
        style={{ width: '60%' }}
      />
      <div>
        <Link to="/login" className="bg-transparent text-white">Iniciar sesión</Link>
        <Link to="/register" className="bg-purple-600 px-4 py-2 rounded-lg text-white ml-4">Registrarse</Link>
      </div>
    </div>
  );
};

export default Header;
