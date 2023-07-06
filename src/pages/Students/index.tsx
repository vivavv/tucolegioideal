import { Paper, Table, TableBody, TableContainer } from "@mui/material";
import { Row } from "./Row";
import { rows } from "./rows";

export const Students = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex items-center justify-between gap-x-4 uppercase px-2 lg:px-8 w-full">
        <div className="flex items-center gap-x-10 md:gap-x-28 flex-1 text-xs text-[#828282]">
          <div className="">Programa</div>
          <div className="">Total de Inscritos</div>
        </div>
        <div className="text-right text-xs text-[#828282]">Detalle</div>
      </div>
      <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
        <Table aria-label="collapsible table">
          <TableBody>
            {rows.map((row) => (
              <Row
                key={row.name}
                name={row.name}
                total={row.total}
                list={row.list}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
