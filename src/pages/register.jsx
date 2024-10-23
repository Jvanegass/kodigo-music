import { useForm } from 'react-hook-form';
import '../index.css';

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log('Datos enviados:', data);
  };

  return (
    <div className="login-split-container">
      {/* Formulario centrado */}
      <div className="login-form-container">
        <form onSubmit={handleSubmit(onSubmit)} className="login-form">
          {/* Campo de nombre */}
          <div className="form-group">
            <input
              {...register('firstName', { required: 'El nombre es obligatorio' })}
              placeholder="Nombre"
              className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
            />
            {errors.firstName && <span className="error-message">{errors.firstName.message}</span>}
          </div>

          {/* Campo de apellido */}
          <div className="form-group">
            <input
              {...register('lastName', { required: 'El apellido es obligatorio' })}
              placeholder="Apellido"
              className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
            />
            {errors.lastName && <span className="error-message">{errors.lastName.message}</span>}
          </div>

          <div className="form-group">
            <input
              {...register('email', {
                required: 'El correo es obligatorio',
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: 'Correo no válido',
                }
              })}
              placeholder="Correo electrónico"
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            />
            {errors.email && <span className="error-message">{errors.email.message}</span>}
          </div>

          <div className="form-group">
            <input
              {...register('password', {
                required: 'La contraseña es obligatoria',
                minLength: {
                  value: 6,
                  message: 'La contraseña debe tener al menos 6 caracteres',
                }
              })}
              type="password"
              placeholder="Contraseña"
              className={`form-control ${errors.password ? 'is-invalid' : ''}`}
            />
            {errors.password && <span className="error-message">{errors.password.message}</span>}
          </div>

          <button type="submit" className="btn-submit">Registrarse</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
