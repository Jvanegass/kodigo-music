import { useForm } from 'react-hook-form';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('username', { required: true })} placeholder="Nombre de usuario" />
      {errors.username && <span>Este campo es obligatorio</span>}
      
      <input {...register('password', { required: true })} placeholder="Contraseña" />
      {errors.password && <span>Este campo es obligatorio</span>}
      
      <button type="submit">Iniciar sesión</button>
    </form>
  );
};

export default Login;
