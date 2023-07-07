import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Alert, Snackbar } from "@mui/material";
import loginImage from "../../assets/login.png";
import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo/LogoDark";
import { backend } from "../../services/backend";
import { passwordValidation, userValidation } from "./validation";

interface LoginFormData {
  user: string;
  password: string;
}

export const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = useForm({
    defaultValues: {
      user: "",
      password: "",
    },
    mode: "onSubmit",
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      await backend.login(data.user, data.password);

      navigate("/students");
    } catch (err) {
      console.log("Login error!");

      setErrorMessage("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row w-full h-full text-[#263238]">
      <div className="flex flex-col items-center justify-center bg-white h-full lg:w-1/2 ">
        <div className="flex flex-col items-center lg:items-start gap-y-8 w-80 sm:w-96">
          <Logo />
          <h1 className="font-bold text-2xl lg:text-4xl">Inicia sesión</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center lg:items-start gap-y-8 w-full flex-1"
          >
            <Input
              label="Usuario"
              id="user"
              variant="secondary"
              errors={errors.user}
              {...register("user", userValidation)}
            />
            <Input
              label="Contraseña"
              password
              id="password"
              variant="secondary"
              errors={errors.password}
              {...register("password", passwordValidation)}
            />
            <button
              type="submit"
              disabled={
                isSubmitting || !isDirty || !!errors.password || !!errors.user
              }
              className={`flex justify-center items-center text-center w-full py-5 bg-[#FDCA3D] rounded-[10px] font-bold text-white transion-colors duration-200 ease-in-out hover:bg-[#fdd156] disabled:bg-[#fedf89] disabled:pointer-events-none`}
            >
              Iniciar Sesión
            </button>
            <Snackbar
              open={!!errorMessage}
              autoHideDuration={6000}
              onClose={() => setErrorMessage("")}
            >
              <Alert
                severity="error"
                sx={{ width: "100%" }}
                onClose={() => setErrorMessage("")}
              >
                {errorMessage}
              </Alert>
            </Snackbar>
          </form>
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
