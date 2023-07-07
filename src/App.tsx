import { Content } from "./layouts/Content";
import { Navbar } from "./layouts/Navbar";
import { Sidebar } from "./layouts/Sidebar";
import { Settings } from "./pages/Settings";

export const App = () => {
  return (
    <div className="flex flex-col xl:flex-row w-full h-full">
      <div className="w-full xl:hidden">
        <Navbar />
      </div>
      <div className="hidden xl:block w-1/4">
        <Sidebar />
      </div>
      <Content title="Configuración">
        <Settings />
      </Content>
    </div>
  );
};
