import { LogoClear } from "../../components/Logo/LogoClear";
import { LogoutButton } from "../../components/LogoutButton";
import { ViewList } from "../../components/ViewList";

export const Sidebar = () => {
  return (
    <aside className="flex flex-col items-center text-left pt-9 pb-16 bg-[#263238] h-full text-white">
      <LogoClear />
      {/* User name */}
      <div className="text-2xl text-left my-12 w-full pl-16">
        <span>Hola</span>
        <div className="font-bold">User Name</div>
      </div>
      {/* List */}
      <ViewList />
      {/* Logout */}
      <LogoutButton />
    </aside>
  );
};
