import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Close } from "@mui/icons-material";

interface CreateUserModalProps {
  onClose: () => void;
}

export const CreateUserModal: React.FC<CreateUserModalProps> = ({
  onClose,
}) => {
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
      <div className="flex flex-col gap-y-4 flex-1 w-full">
        <Input id="user" label="Usuario" variant="primary" />
        <Input id="name" label="Nombre" variant="primary" />
        <Input id="email" label="Correo" variant="primary" />
        <Input id="password" label="Contraseña" variant="primary" password />
        <Input id="program" label="Programa" variant="primary" />
      </div>
      <div className="flex items-center justify-center gap-x-6 lg:gap-x-12">
        <div
          className="text-lg lg:text-2xl font-bold text-[#23B8E3] cursor-pointer transition-colors duration-200 ease-in-out hover:text-[#1897bb]"
          onClick={onClose}
        >
          Cancelar
        </div>
        <Button onClick={onClose}>Crear usuario</Button>
      </div>
    </div>
  );
};
