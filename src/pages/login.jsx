import { useForm } from 'react-hook-form';
import '../styles.css'; // Importamos los estilos globales

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log('Datos enviados:', data); // Simulamos el envío
  };

  return (
    <div className="login-split-container">
      {/* Imagen del lado derecho */}
      <div className="login-image-container">
        <img
          src="https://blog.symphoniclatino.com/wp-content/uploads/2019/05/Fotolia_45452813_Subscription_Monthly_L21.jpg" /* Reemplaza esta URL con la imagen que desees */
          alt="Login Image"
        />
      </div>

      {/* Formulario del lado izquierdo */}
      <div className="login-form-container">
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
    </div>
  );
};

export default Login;
