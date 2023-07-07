import { PropsWithChildren } from "react";

interface ButtonProps extends PropsWithChildren {
  onClick: () => void;
  buttonClass?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  buttonClass,
}) => {
  return (
    <button
      className={`flex justify-center items-center text-center px-4 lg:px-9 py-4 rounded-[10px]  lg:text-2xl font-bold transion-colors duration-200 ease-in-out text-white bg-[#23B8E3] hover:bg-[#50c7e9] ${buttonClass}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
