import { Content } from "./layouts/Content";
import { Navbar } from "./layouts/Navbar";
import { Sidebar } from "./layouts/Sidebar";
import { Students } from "./pages/Students";

export const App = () => {
  return (
    <div className="flex flex-col xl:flex-row w-full h-full">
      <div className="w-full xl:hidden">
        <Navbar />
      </div>
      <div className="hidden xl:block w-1/4">
        <Sidebar />
      </div>
      <Content title="Alumnos Inscritos">
        <Students />
      </Content>
    </div>
  );
};
