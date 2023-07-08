import { Visibility, VisibilityOff } from "@mui/icons-material";

interface PasswordIconProps {
  password: boolean;
  showPassword: boolean;
  onChange: (value: boolean) => void;
}

export const PasswordIcon: React.FC<PasswordIconProps> = ({
  password,
  showPassword,
  onChange,
}) => {
  return (
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
          zIndex: 5001,
        }}
        onClick={() => onChange(true)}
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
          zIndex: 5001,
        }}
        onClick={() => onChange(false)}
      />
    ))
  );
};
