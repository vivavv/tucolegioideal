import loginImage from "../../assets/login.png";
import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo/LogoDark";

export const Login = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full h-full text-[#263238]">
      <div className="flex flex-col items-center justify-center bg-white h-full lg:w-1/2 ">
        <div className="flex flex-col items-center lg:items-start gap-y-8 w-72 lg:w-96">
          <Logo />
          <h1 className="font-bold text-2xl lg:text-4xl">Inicia sesión</h1>
          <Input label="Usuario" id="user" variant="secondary" />
          <Input
            label="Contraseña"
            password
            id="password"
            variant="secondary"
          />
          <button
            type="submit"
            className="flex justify-center items-center text-center w-full py-5 bg-[#FDCA3D] rounded-[10px] font-bold text-white transion-colors duration-200 ease-in-out hover:bg-[#fdd156]"
          >
            Iniciar Sesión
          </button>
        </div>
      </div>
      <div className="hidden lg:flex flex-col items-center justify-center bg-[#23B8E3] w-1/2 ">
        <img
          src={loginImage}
          alt="login"
          className="w-48 h-48 md:w-96 md:h-96 lg:w-[623px] lg:h-[623px] object-contain"
        />
      </div>
    </div>
  );
};
