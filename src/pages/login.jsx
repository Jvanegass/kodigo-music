import { useForm } from 'react-hook-form';
import '../index.css'; 

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log('Datos enviados:', data); 
  };

  return (
    <section className="login-split-container">
    
      <section className="login-form-container">
        <form onSubmit={handleSubmit(onSubmit)} className="login-form">
          
          <div className="form-group">
            <input
              {...register('username', { required: 'El nombre de usuario es obligatorio' })}
              placeholder="Nombre de usuario"
              className={`form-control ${errors.username ? 'is-invalid' : ''}`}
            />
            {errors.username && <span className="error-message">{errors.username.message}</span>}
          </div>
          
          <div className="form-group">
            <input
              {...register('password', { required: 'La contraseña es obligatoria' })}
              type="password"
              placeholder="Contraseña"
              className={`form-control ${errors.password ? 'is-invalid' : ''}`}
            />
            {errors.password && <span className="error-message">{errors.password.message}</span>}
          </div>
          
          <button type="submit" className="btn-submit">Iniciar sesión</button>
        </form>
      </section>
    </section>
  );
};

export default Login;
