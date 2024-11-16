import { useForm } from "react-hook-form";
import { useState } from "react";

function App() {
  const [showPassword, setShowPassword] = useState(false); 
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    alert("Ingresando a tu perfil....");
    reset();
  });

  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="main-grid">
        <div className="box-1">
          <h5 className="text">¿No tienes cuenta?</h5>
          <button className="solicitud">Solicítala aquí</button>
        </div>
      </div>

      <div className="form-container">
        <h1>¡Hola!</h1>
        <h3>Ingresa tus datos para iniciar sesión</h3>

        <div className="input-container">
          <input
            type="email"
            {...register("correo", {
              required: { value: true, message: "Correo es requerido" },
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                message: "Correo no válido",
              },
            })}
            placeholder=" "
          />
          <label htmlFor="correo">Correo</label>
          {errors.correo && <span>{errors.correo.message}</span>}
        </div>

        <div className="input-container password-container">
          <input
            type={showPassword ? "text" : "password"}
            {...register("password", {
              required: { value: true, message: "Contraseña es requerida" },
              minLength: {
                value: 8,
                message: "Debe tener al menos 8 caracteres",
              },
            })}
            placeholder=" "
          />
          <label htmlFor="password">Contraseña</label>

          <img
            src={showPassword ? "/icons/eye-icon.svg" : "/icons/eye-icon.svg"}
            alt="Toggle Password Visibility"
            className="toggle-password"
            onClick={togglePasswordVisibility}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>

        <div className="box-2">
          <div className="box-child">
            <input type="checkbox" {...register("recordar")} />
            <h5>Recordar datos</h5>
          </div>
          <h5 className="forgot-password">¿Olvidaste tu contraseña?</h5>
        </div>

        <button className="submit-button" type="submit">Ingresar</button>
      </div>
    </form>
  );
}

export default App;
