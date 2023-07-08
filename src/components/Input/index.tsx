import { InputHTMLAttributes, forwardRef, useState } from "react";
import { InputLabel, TextField } from "@mui/material";
import { PasswordIcon } from "./PasswordIcon";
import { FieldError } from "react-hook-form";

/* eslint-disable @typescript-eslint/no-explicit-any */
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  variant: "primary" | "secondary";
  defaultValue?: string;
  errors?: FieldError;
  password?: boolean;
  disabled?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      label,
      variant,
      defaultValue = "",
      password = false,
      disabled = false,
      errors,
      ...rest
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);

    const borderColorClass = errors
      ? "#ef4444"
      : variant === "primary"
      ? "#92C8D8"
      : "#E5E5E5";

    return (
      <div className="flex flex-col gap-y-4 w-full ">
        <InputLabel
          htmlFor={id}
          style={{
            marginLeft: variant === "primary" ? "0px" : "16px",
            color: variant === "primary" ? "#000000" : "#676161",
            fontWeight: 600,
            fontSize: "18px",
          }}
        >
          {label}
        </InputLabel>
        <TextField
          id={id}
          variant="outlined"
          type={password && !showPassword ? "password" : "text"}
          inputRef={ref}
          {...(rest as any)}
          disabled={disabled}
          InputProps={{
            defaultValue: defaultValue,
            endAdornment: (
              <PasswordIcon
                password={password}
                showPassword={showPassword}
                onChange={(value) => setShowPassword(value)}
              />
            ),
            sx: {
              borderRadius: "10px",
              "& fieldset.MuiOutlinedInput-notchedOutline": {
                borderColor: borderColorClass,
                background: disabled ? "#d1d5db" : "white",
              },
              "& input.MuiInputBase-input": {
                zIndex: 5000,
              },
            },
          }}
        />
        <div className="text-sm text-red-400">{errors?.message}</div>
      </div>
    );
  }
);
