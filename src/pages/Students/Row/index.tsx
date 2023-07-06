import React, { useState } from "react";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { RowDetail } from "./RowDetail";
import { TableCell, TableRow } from "@mui/material";

export interface Student {
  name: string;
  enrollmentDate: string;
}

interface RowProps {
  name: string;
  total: number;
  list: Student[];
}

export const Row: React.FC<RowProps> = ({ name, total, list }) => {
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <tr className="flex justify-between items-center pl-4 pr-4 lg:pr-8 border-b-[1px] border-[#92C8D8]">
        <td>
          <div className="flex items-center gap-x-10 md:gap-x-28 lg:w-2/3 text-xs lg:text-lg font-bold py-6">
            <div className="lg:w-72">{name}</div>
            <div className="text-right">{total}</div>
          </div>
        </td>
        <td>
          {total > 0 && (
            <IconButton
              aria-label="expand row"
              size="small"
              sx={{ color: "black" }}
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          )}
        </td>
      </tr>
      <tr>
        <td>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <RowDetail list={list} />
          </Collapse>
        </td>
      </tr>
    </React.Fragment>
  );
};
