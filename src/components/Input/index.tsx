import { InputLabel, TextField } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import { useState } from "react";
import { VisibilityOff } from "@mui/icons-material";

interface InputProps {
  id: string;
  label: string;
  variant: "primary" | "secondary";
  password?: boolean;
}

export const Input: React.FC<InputProps> = ({
  id,
  label,
  variant,
  password = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);

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
        sx={{
          input: {
            borderRadius: "10px",
          },
        }}
        InputProps={{
          endAdornment:
            password &&
            (!showPassword ? (
              <Visibility
                sx={{
                  color: "#DEDEDE",
                  cursor: "pointer",
                  transition: "ease-in-out 200ms all",
                  ":hover": {
                    color: "#92C8D8",
                  },
                }}
                onClick={() => setShowPassword(true)}
              />
            ) : (
              <VisibilityOff
                sx={{
                  color: "#DEDEDE",
                  cursor: "pointer",
                  transition: "ease-in-out 200ms all",
                  ":hover": {
                    color: "#92C8D8",
                  },
                }}
                onClick={() => setShowPassword(false)}
              />
            )),
          sx: {
            borderRadius: "10px",
            "& fieldset.MuiOutlinedInput-notchedOutline": {
              borderColor: variant === "primary" ? "#92C8D8" : "#E5E5E5",
            },
          },
        }}
      />
    </div>
  );
};
