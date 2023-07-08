import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

export const LogoutButton = () => {
  const { deleteUser } = useContext(UserContext);

  return (
    <Link
      className="text-lg lg:text-2xl transition-colors ease-in-out duration-200 cursor-pointer text-white hover:text-[#23B8E3]"
      to="/login"
      onClick={() => deleteUser()}
    >
      Cerrar sesión
    </Link>
  );
};
