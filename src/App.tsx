import { PropsWithChildren, useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Content } from "./layouts/Content";
import { Navbar } from "./layouts/Navbar";
import { Sidebar } from "./layouts/Sidebar";
import { UserContext } from "./contexts/UserContext";

type AppProps = PropsWithChildren;

export const App: React.FC<AppProps> = ({ children }) => {
  const location = useLocation();
  const { pathname } = location;
  const navigate = useNavigate();
  const { user, deleteUser } = useContext(UserContext);

  useEffect(() => {
    if (!user) {
      deleteUser();
      navigate("/login");
    }
  }, [user, deleteUser, navigate]);

  const title: { [key: string]: string } = {
    "/students": "Alumnos",
    "/users": "Usuarios",
    "/settings": "Configuración",
  };

  return (
    <section className="flex flex-col xl:flex-row w-full h-full">
      <div className="w-full xl:hidden">
        <Navbar />
      </div>
      <div className="hidden xl:block w-1/4">
        <Sidebar />
      </div>
      <Content title={title[pathname]}>{children}</Content>
    </section>
  );
};
