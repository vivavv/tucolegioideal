import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { ListItem } from "./ListItem";
import { UserContext } from "../../contexts/UserContext";

interface ViewListProp {
  onClick?: () => void;
}

export const ViewList = ({ onClick }: ViewListProp) => {
  const { user } = useContext(UserContext);

  const location = useLocation();
  const { pathname } = location;

  return (
    <div className="flex flex-col lg:gap-y-4 flex-1 w-full text-left">
      <ListItem
        title="Alumnos"
        icon="student"
        route="/students"
        active={pathname === "/students"}
        onClick={onClick}
      />
      {user?.role === "Admin" && (
        <ListItem
          title="Usuarios"
          icon="user"
          route="/users"
          active={pathname === "/users"}
          onClick={onClick}
        />
      )}
      <ListItem
        title="Configuración"
        icon="settings"
        route="/settings"
        active={pathname === "/settings"}
        onClick={onClick}
      />
    </div>
  );
};
