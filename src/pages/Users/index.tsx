import { useState } from "react";
import { Backdrop } from "@mui/material";
import { List } from "./List";
import { Tabs } from "./Tabs";
import { userList } from "./userList";
import { CreateUserModal } from "./CreateUserModal";

export const Users = () => {
  const [selected, setSelected] = useState(0);
  const [open, setOpen] = useState(false);

  const filteredList =
    selected !== 0
      ? userList.filter((user) =>
          selected === 1 ? user.role === "Profesor" : user.role === "Admin"
        )
      : userList;

  return (
    <div className="flex flex-col gap-y-4 h-full">
      <Tabs
        selected={selected}
        onSelect={(value) => setSelected(value)}
        onOpen={() => setOpen(true)}
      />
      <List users={filteredList} />
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={() => setOpen(false)}
      />
      {open && <CreateUserModal onClose={() => setOpen(false)} />}
    </div>
  );
};
