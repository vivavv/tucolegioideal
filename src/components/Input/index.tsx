import { InputLabel, TextField } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";

interface InputProps {
  id: string;
  label: string;
  password?: boolean;
}

export const Input: React.FC<InputProps> = ({ id, label, password }) => {
  return (
    <div className="flex flex-col gap-y-4 w-full ">
      <InputLabel
        htmlFor={id}
        style={{
          marginLeft: "16px",
          color: "#676161",
          fontWeight: 600,
          fontSize: "18px",
        }}
      >
        {label}
      </InputLabel>
      <TextField
        id={id}
        variant="outlined"
        type={password ? "password" : "text"}
        InputProps={{
          endAdornment: password && <Visibility sx={{ color: "#DEDEDE" }} />,
        }}
      />
    </div>
  );
};
