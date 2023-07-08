import { useContext } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { UserContext } from "../../contexts/UserContext";
import { useForm } from "react-hook-form";
import {
  emailValidation,
  nameValidation,
  passwordValidation,
  userValidation,
} from "./validation";
import { backend } from "../../services/backend";

interface SettingsFormData {
  user: string;
  name: string;
  email: string;
  password: string;
}

export const Settings = () => {
  const context = useContext(UserContext);
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const user = context.user!;
  const saveUser = context.saveUser;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<SettingsFormData>({
    defaultValues: {
      user: user?.username,
      name: user?.name,
      email: user?.email,
      password: user?.password,
    },
    mode: "onSubmit",
  });

  const onSubmit = async (data: SettingsFormData) => {
    const newUser = {
      ...user,
      username: data.user,
      name: data.name,
      email: data.email,
      password: data.password,
    };

    backend.editUser(user?.username as string, newUser);
    saveUser(newUser);
  };

  return (
    <div className="flex flex-col ml-auto mr-auto gap-y-6 w-80 lg:w-[450px] h-full">
      <form onSubmit={handleSubmit(onSubmit)}>
        {user?.role === "Profesor" && (
          <Input
            id="user"
            label="Programa"
            variant="primary"
            defaultValue={user?.program}
            disabled
          />
        )}
        <Input
          id="user"
          label="Usuario"
          variant="primary"
          defaultValue={user?.username}
          errors={errors.user}
          {...register("user", userValidation)}
        />
        <Input
          id="name"
          label="Nombre"
          variant="primary"
          defaultValue={user?.name}
          errors={errors.name}
          {...register("name", nameValidation)}
        />
        <Input
          id="email"
          label="Correo"
          variant="primary"
          defaultValue={user?.email}
          errors={errors.email}
          {...register("email", emailValidation)}
        />
        <Input
          id="password"
          label="Contraseña"
          variant="primary"
          defaultValue={user?.password}
          errors={errors.password}
          password
          {...register("password", passwordValidation)}
        />
        <div className="flex items-center justify-center gap-x-6 lg:gap-x-12 2xl:mt-5">
          <div
            className="text-lg lg:text-2xl font-bold text-[#23B8E3] cursor-pointer transition-colors duration-200 ease-in-out hover:text-[#1897bb]"
            onClick={() => reset()}
          >
            Cancelar
          </div>
          <Button type="submit" disabled={isSubmitting || !isDirty}>
            Guardar
          </Button>
        </div>
      </form>
    </div>
  );
};
