import { FindInPage } from "@mui/icons-material";

export const EmptyList = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-8 py-20">
      <FindInPage sx={{ fontSize: "120px", color: "#94dcf1" }} />
      <div className="font-semibold text-gray-400 text-2xl">
        No se encontraron resultados
      </div>
    </div>
  );
};
