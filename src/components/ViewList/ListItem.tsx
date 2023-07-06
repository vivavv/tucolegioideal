import { useMemo } from "react";
import { Settings, Suitcase, User } from "./icons";

interface ListItemProps {
  icon: "student" | "user" | "settings";
  title: string;
  active: boolean;
  onClick: () => void;
}

export const ListItem: React.FC<ListItemProps> = ({
  icon,
  title,
  active,
  onClick,
}) => {
  const iconClass = `w-5 h-5 lg:w-7 lg:h-7 ${
    active ? "fill-[#263238]" : "fill-white group-hover:fill-[#263238]"
  }`;

  const icons = useMemo(() => {
    return {
      student: <Suitcase className={iconClass} />,
      user: <User className={iconClass} />,
      settings: <Settings className={iconClass} />,
    };
  }, [iconClass]);

  return (
    <div
      className={`flex items-center gap-x-7 cursor-pointer py-5 rounded-[14px] w-full pl-4 lg:pl-16 group  transition-all ease-in-out duration-150 hover:font-bold ${
        active
          ? "bg-white font-bold text-[#263238]"
          : "text-white hover:bg-white hover:text-[#263238]"
      }`}
      onClick={onClick}
    >
      <div>{icons[icon]}</div>
      <div className="text-lg lg:text-2xl w-32 lg:w-56">{title}</div>
    </div>
  );
};
