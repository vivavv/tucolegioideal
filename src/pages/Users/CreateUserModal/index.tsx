import { Close } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";
import { Select } from "../../../components/Select";
import {
  emailValidation,
  nameValidation,
  passwordValidation,
  programValidation,
  userValidation,
} from "./validation";
import { User, backend } from "../../../services/backend";

interface CreateUserModalProps {
  onClose: () => void;
}

export const CreateUserModal: React.FC<CreateUserModalProps> = ({
  onClose,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isDirty },
  } = useForm({
    defaultValues: {
      role: "",
      username: "",
      name: "",
      email: "",
      password: "",
      program: "",
    },
    mode: "onSubmit",
  });

  const onSubmit = async (data: User) => {
    const user = data.role === "Admin" ? { ...data, program: "" } : data;

    backend.createUser(user);
    onClose();
  };

  const role = watch("role");

  return (
    <div className="flex flex-col items-center gap-y-8 bg-white py-8 px-16 2xl:py-16 rounded-[10px] z-[1500] shadow-lg absolute left-1 top-2 lg:top-4 lg:left-1/4 w-[98%] lg:w-[55%]">
      <h2 className="font-bold text-2xl lg:text-5xl mt-4 lg:mt-0 mb-2 lg:mb-8 text-center">
        Crear nuevo usuario
      </h2>
      <Close
        sx={{
          fontSize: "28px",
          position: "absolute",
          top: 20,
          right: 25,
          cursor: "pointer",
          transition: "ease-in-out 200ms all",
          ":hover": {
            color: "#64748b",
          },
        }}
        onClick={onClose}
      />
      <form
        className="flex flex-col gap-y-4 flex-1 w-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Select
          id="role"
          label="Rol"
          options={[
            { label: "Profesor", value: "Profesor" },
            { label: "Admin", value: "Admin" },
          ]}
          {...register("role")}
        />
        <Input
          id="user"
          label="Usuario"
          variant="primary"
          errors={errors.username}
          {...register("username", userValidation)}
        />
        <Input
          id="name"
          label="Nombre"
          variant="primary"
          errors={errors.name}
          {...register("name", nameValidation)}
        />
        <Input
          id="email"
          label="Correo"
          variant="primary"
          errors={errors.email}
          {...register("email", emailValidation)}
        />
        <Input
          id="password"
          label="Contraseña"
          variant="primary"
          errors={errors.password}
          password
          {...register("password", passwordValidation)}
        />
        {role === "Profesor" && (
          <Input
            id="program"
            label="Programa"
            variant="primary"
            errors={errors.program}
            {...register("program", programValidation)}
          />
        )}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-x-12">
          <div
            className="text-lg lg:text-2xl font-bold text-[#23B8E3] cursor-pointer transition-colors duration-200 ease-in-out hover:text-[#1897bb]"
            onClick={onClose}
          >
            Cancelar
          </div>
          <Button type="submit" disabled={isSubmitting || !isDirty}>
            Crear usuario
          </Button>
        </div>
      </form>
    </div>
  );
};
