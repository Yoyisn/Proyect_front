import { useAuth } from "../Context/AuthContext";
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";

import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import Logo from "../assets/assets/images/image.png";
import Footer from "../Components/Footer";


function TechRegisterPage() {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const { sigupTecnico, isAuthenticated, errors: registerErrors } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/techProfile");
  }, [isAuthenticated]);

  return (
    <>
      <h1 className="flex font-abc text-6xl translate-y-[140px] justify-center">
        {" "}
        <Link to="/"> ServiTech </Link>{" "}
        <img
          className="flex h-[60px]"
          src={Logo}
          alt="Logo Servitecnicos"
        />
      </h1>
      <div className="flex h-[calc(100vh-100px)] items-center justify-center">
        <div className="bg-Darkred max-w-md p-10 shadow-inner hover:shadow-lg shadow-black hover:shadow-black mt-10 rounded-md">
          {registerErrors.map((error, i) => {
            <div key={i} className="bg-Softorange p-2 text-black text-center">
              {" "}
              {error}{" "}
            </div>;
          })}

          <h1 className="text-3xl font-bold my-2"> Registro Tecnico </h1>

          <form
            onSubmit={handleSubmit(async (values) => {
              sigupTecnico(values);
            })}
          >
            <input
              className="w-full  bg-Grayishblue text-black px-4 py-2 rounded-md my-2"
              type="text"
              placeholder="Nombre Completo"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <p className="text-Softorange"> Your name is required </p>
            )}

            <input
              className="w-full  bg-Grayishblue text-black px-4 py-2 rounded-md my-2"
              type="email"
              placeholder="correo"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="text-Softorange"> Email is required </p>
            )}

            <input
              className="w-full  bg-Grayishblue text-black px-4 py-2 rounded-md my-2"
              type="password"
              placeholder="Contraseña"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className="text-Softorange"> Password is required </p>
            )}

            <input
              className="w-full  bg-Grayishblue text-black px-4 py-2 rounded-md my-2"
              type="number"
              placeholder="Numero Movil"
              maxLength={10}
              {...register("number", { required: true })}
            />
            {errors.number && (
              <p className="text-Softorange"> Number is required </p>
            )}

            <label> Sube tu hoja de vida </label>
            <input
              className="w-full  bg-Grayishblue text-black px-4 py-2 rounded-md my-2"
              type="file"
              {...register("file")}
            />

            <button className="bg-Grayishblue hover:bg-Brown hover:text-Grayishblue text-black px-4 py-2 rounded-md my-2">
              {" "}
              Register{" "}
            </button>
          </form>

          <Link to="/techLogin">
            <p className="flex gap-x-2 justify-between">
              <strong>Already have an Technical account? log with me</strong>
            </p>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TechRegisterPage;