import { ListItem } from "./ListItem";

export const ViewList = () => {
  return (
    <div className="flex flex-col lg:gap-y-4 flex-1 w-full text-left">
      <ListItem
        title="Alumnos"
        icon="student"
        active
        onClick={() => {
          console.log("a");
        }}
      />
      <ListItem
        title="Usuarios"
        icon="user"
        active={false}
        onClick={() => {
          console.log("a");
        }}
      />
      <ListItem
        title="Configuración"
        icon="settings"
        active={false}
        onClick={() => {
          console.log("a");
        }}
      />
    </div>
  );
};
