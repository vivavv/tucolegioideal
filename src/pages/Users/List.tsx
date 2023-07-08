import { User, backend } from "../../services/backend";
import { DeleteIcon } from "./icon";

interface ListProps {
  users: User[];
  onUserDelete: () => void;
}

export const List: React.FC<ListProps> = ({ users, onUserDelete }) => {
  const columns = ["Usuario", "Nombre", "Correo", "Rol", ""];

  const onDelete = async (user: User) => {
    await backend.deleteUser(user);
    onUserDelete();
  };

  return (
    <div className="flex flex-col gap-y-5 pt-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        {columns.map((column, index) => (
          <div
            key={index}
            className="font-bold text-[#828282] text-sm uppercase"
          >
            {column}
          </div>
        ))}
      </div>
      {/* Items */}
      <div className="flex flex-col gap-y-3">
        {users.map((user, index) => (
          <div
            className="flex items-center justify-between px-2 lg:px-0 lg:pl-3 lg:pr-6 py-5 text-xs lg:text-lg bg-[#E8F9FE] rounded-[10px] "
            key={index}
          >
            <div className="w-1/5">{user.username}</div>
            <div className="w-1/5 break-words">{user.name}</div>
            <div className="w-1/5 break-words">{user.email}</div>
            <div>{user.role}</div>
            <DeleteIcon onClick={() => onDelete(user)} />
          </div>
        ))}
      </div>
    </div>
  );
};
