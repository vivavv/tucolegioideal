import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export const Settings = () => {
  return (
    <div className="flex flex-col  gap-y-6 w-80 lg:w-[450px] h-full">
      <Input id="user" label="Programa" variant="primary" />

      <Input id="user" label="Usuario" variant="primary" />
      <Input id="name" label="Nombre" variant="primary" />
      <Input id="email" label="Correo" variant="primary" />
      <Input id="password" label="Contraseña" variant="primary" password />
      <div className="flex items-center justify-center gap-x-6 lg:gap-x-12 2xl:mt-5">
        <div className="text-lg lg:text-2xl font-bold text-[#23B8E3] cursor-pointer transition-colors duration-200 ease-in-out hover:text-[#1897bb]">
          Cancelar
        </div>
        <Button onClick={() => console.log("save!")}>Guardar</Button>
      </div>
    </div>
  );
};
