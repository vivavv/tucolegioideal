import { useEffect, useMemo, useState } from "react";
import { Backdrop } from "@mui/material";
import { List } from "./List";
import { Tabs } from "./Tabs";
import { CreateUserModal } from "./CreateUserModal";
import { User, backend } from "../../services/backend";
import { EmptyList } from "./List/EmptyList";

export const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selected, setSelected] = useState(0);
  const [open, setOpen] = useState(false);

  const getUsers = async () => {
    const users = await backend.getUsers();

    setUsers(users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const filteredList = useMemo(() => {
    return selected !== 0
      ? users.filter((user) =>
          selected === 1 ? user.role === "Profesor" : user.role === "Admin"
        )
      : users;
  }, [users, selected]);

  return (
    <div className="flex flex-col gap-y-4 h-full">
      <Tabs
        selected={selected}
        onSelect={(value) => setSelected(value)}
        onOpen={() => setOpen(true)}
        hasUsers={users.length > 0}
      />
      {filteredList.length > 0 ? (
        <List users={filteredList} onUserDelete={() => getUsers()} />
      ) : (
        <EmptyList />
      )}
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={() => setOpen(false)}
      />
      {open && (
        <CreateUserModal
          onClose={() => {
            setOpen(false);
            getUsers();
          }}
        />
      )}
    </div>
  );
};
