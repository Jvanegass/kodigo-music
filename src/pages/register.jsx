const Register = () => {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-white">
          <h2 className="text-2xl mb-6">Crear una cuenta</h2>
          <input
            type="text"
            placeholder="Nombre completo"
            className="bg-gray-700 px-4 py-2 rounded-lg mb-4 w-full"
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            className="bg-gray-700 px-4 py-2 rounded-lg mb-4 w-full"
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="bg-gray-700 px-4 py-2 rounded-lg mb-4 w-full"
          />
          <button className="bg-purple-600 px-4 py-2 rounded-lg w-full">
            Registrarse
          </button>
        </div>
      </div>
    );
  };
  
  export default Register;
  