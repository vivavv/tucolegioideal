import { useLocation } from "react-router-dom";
import { ListItem } from "./ListItem";

export const ViewList = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className="flex flex-col lg:gap-y-4 flex-1 w-full text-left">
      <ListItem
        title="Alumnos"
        icon="student"
        route="/students"
        active={pathname === "/students"}
      />
      <ListItem
        title="Usuarios"
        icon="user"
        route="/users"
        active={pathname === "/users"}
      />
      <ListItem
        title="Configuración"
        icon="settings"
        route="/settings"
        active={pathname === "/settings"}
      />
    </div>
  );
};
