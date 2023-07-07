import { Link } from "react-router-dom";

export const LogoutButton = () => (
  <Link
    className="text-lg lg:text-2xl transition-colors ease-in-out duration-200 cursor-pointer text-white hover:text-[#23B8E3]"
    to="/login"
  >
    Cerrar sesión
  </Link>
);
