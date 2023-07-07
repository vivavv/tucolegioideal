import { Button } from "../../components/Button";

interface TabsProps {
  selected: number;
  onSelect: (value: number) => void;
}

export const Tabs: React.FC<TabsProps> = ({ selected, onSelect }) => {
  const tabs = ["Todos", "Profesores", "Administradores"];

  return (
    <div className="flex flex-col lg:flex-row items-center gap-y-4 border-b-[1px] border-[#F0F0F0] pb-5">
      <div className="order-2 lg:order-1 flex-1 flex  items-center gap-x-4 lg:gap-x-8 uppercase text-sm ">
        {tabs.map((tab, index) => (
          <div
            className={`cursor-pointer transition-all duration-200 ease-in-out ${
              selected === index
                ? "text-[#28ABE7] font-bold"
                : "text-[#0F0F0F] hover:font-bold hover:text-[#28ABE7]"
            }`}
            key={index}
            onClick={() => onSelect(index)}
          >
            {tab}
          </div>
        ))}
      </div>
      <Button
        onClick={() => console.log("add user")}
        buttonClass="mb-4 order-1 lg:order-2"
      >
        Nuevo Usuario
      </Button>
    </div>
  );
};
