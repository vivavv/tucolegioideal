import { Menu } from "@mui/icons-material";
import { LogoOwl } from "../../components/Logo/LogoOwl";
import { MobileMenu } from "./MobileMenu";
import { useState } from "react";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center justify-between px-6 xl:hidden bg-[#263238] w-full h-16">
      <Menu sx={{ color: "white" }} onClick={() => setOpen(true)} />
      <div className="flex items-center justify-end gap-x-4 w-full">
        <div className="font-semibold text-white">User Name</div>
        <LogoOwl />
        <MobileMenu isOpen={open} onClose={() => setOpen(false)} />
      </div>
    </div>
  );
};
