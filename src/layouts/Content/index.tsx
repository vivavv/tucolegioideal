import { PropsWithChildren } from "react";

interface ContentProps extends PropsWithChildren {
  title: string;
}

export const Content: React.FC<ContentProps> = ({ title, children }) => (
  <div className="flex-1 flex flex-col items-center gap-y-8 lg:gap-y-16 px-4 lg:px-16 py-9 2xl:py-14">
    <h1 className="font-bold text-2xl lg:text-5xl text-[#121835]">{title}</h1>
    <div className="flex items-center justify-center w-full max-h-full overflow-y-auto custom-scrollbar">
      {children}
    </div>
  </div>
);
