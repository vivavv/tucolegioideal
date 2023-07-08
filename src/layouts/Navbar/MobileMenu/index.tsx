import React from "react";
import { CloseButton } from "./CloseButton";
import { LogoOwl } from "../../../components/Logo/LogoOwl";
import { ViewList } from "../../../components/ViewList";
import { LogoutButton } from "../../../components/LogoutButton";

export const MobileMenu: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`w-full absolute overflow-hidden bg-[#263238] h-screen -mt-2 transition-all duration-200 ${
        isOpen ? "right-0" : "right-full"
      }`}
    >
      <div
        className={`${
          isOpen ? "right-0" : "right-full"
        } transition-all bg-[#263238] duration-200 h-screen w-full max-w-screen fixed top-0 p-4 bg-blueGray-200 z-[6000] flex items-center justify-between`}
      >
        <div className="flex flex-col items-center gap-y-12 w-full min-h-full">
          <div className="flex items-center justify-between w-full">
            <LogoOwl />
            <CloseButton onClose={onClose} />
          </div>
          <div className="flex-1 self-start w-full">
            <ViewList onClick={onClose} />
          </div>
          <LogoutButton />
        </div>
      </div>
    </div>
  );
};
