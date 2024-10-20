import { useForm } from 'react-hook-form';
import '../styles/styles.css'; // Importamos los estilos globales

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log('Datos enviados:', data); // Simulamos el envío
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Iniciar Sesión</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="login-form">
        {/* Campo de nombre de usuario */}
        <div className="form-group">
          <input
            {...register('username', { required: 'El nombre de usuario es obligatorio' })}
            placeholder="Nombre de usuario"
            className={`form-control ${errors.username ? 'is-invalid' : ''}`}
          />
          {errors.username && <span className="error-message">{errors.username.message}</span>}
        </div>
        
        {/* Campo de contraseña */}
        <div className="form-group">
          <input
            {...register('password', { required: 'La contraseña es obligatoria' })}
            type="password"
            placeholder="Contraseña"
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
          />
          {errors.password && <span className="error-message">{errors.password.message}</span>}
        </div>
        
        {/* Botón de envío */}
        <button type="submit" className="btn-submit">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default Login;
