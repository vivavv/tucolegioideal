import { PropsWithChildren } from "react";

interface ButtonProps extends PropsWithChildren {
  onClick?: () => void;
  type?: "button" | "submit";
  buttonClass?: string;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  buttonClass,
  disabled = false,
}) => {
  return (
    <button
      className={`flex justify-center items-center text-center px-4 lg:px-9 py-4 rounded-[10px]  lg:text-2xl font-bold transion-colors duration-200 ease-in-out text-white bg-[#23B8E3] hover:bg-[#50c7e9] disabled:pointer-events-none disabled:bg-[#c1ebf7] ${buttonClass}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
