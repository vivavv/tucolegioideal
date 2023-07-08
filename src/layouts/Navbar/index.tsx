import { useContext, useState } from "react";
import { Menu } from "@mui/icons-material";
import { LogoOwl } from "../../components/Logo/LogoOwl";
import { MobileMenu } from "./MobileMenu";
import { UserContext } from "../../contexts/UserContext";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const { user } = useContext(UserContext);

  return (
    <nav className="flex items-center justify-between px-6 xl:hidden bg-[#263238] w-full h-16">
      <Menu sx={{ color: "white" }} onClick={() => setOpen(true)} />
      <div className="flex items-center justify-end gap-x-4 w-full">
        <div className="font-semibold text-white">{user?.name}</div>
        <LogoOwl />
        <MobileMenu isOpen={open} onClose={() => setOpen(false)} />
      </div>
    </nav>
  );
};
