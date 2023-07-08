import { SelectHTMLAttributes, forwardRef } from "react";
import { InputLabel, MenuItem, Select as MuiSelect } from "@mui/material";
import { FieldError } from "react-hook-form";

type Option = {
  label: string;
  value: string;
};

/* eslint-disable @typescript-eslint/no-explicit-any */
interface SelectProps extends SelectHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  options: Option[];
  errors?: FieldError;
}

export const Select = forwardRef<HTMLInputElement, SelectProps>(
  ({ id, label, options, errors, ...rest }, ref) => {
    const borderColorClass = errors ? "#ef4444" : "#92C8D8";

    return (
      <div className="flex flex-col gap-y-4 w-full ">
        <InputLabel
          htmlFor={id}
          style={{
            color: "#000000",
            fontWeight: 600,
            fontSize: "18px",
          }}
        >
          {label}
        </InputLabel>
        <MuiSelect
          id={id}
          variant="outlined"
          inputRef={ref}
          MenuProps={{
            style: { zIndex: 5001 },
          }}
          sx={{
            borderRadius: "10px",
            "& fieldset.MuiOutlinedInput-notchedOutline": {
              borderColor: borderColorClass,
            },
            "& input.MuiInputBase-input": {
              zIndex: 5000,
            },
          }}
          {...(rest as any)}
        >
          {options.map((option, index) => (
            <MenuItem key={index} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </MuiSelect>
        <div className="text-sm text-red-400">{errors?.message}</div>
      </div>
    );
  }
);
