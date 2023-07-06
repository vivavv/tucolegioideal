import { Student } from ".";

interface RowDetailProps {
  list: Student[];
}

export const RowDetail: React.FC<RowDetailProps> = ({ list }) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between p-8 text-xs text-[#828282] uppercase">
        <div>Alumno</div>
        <div>Fecha de Inscripción</div>
      </div>
      <div className="flex flex-col gap-y-2 max-h-64 overflow-y-auto">
        {list.map((item, index) => (
          <div
            key={index}
            className="flex justify-between w-full bg-[#E8F9FE] py-5 px-8 rounded-[10px] text-sm lg:text-lg"
          >
            <div>{item.name}</div>
            <div>{item.enrollmentDate}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
