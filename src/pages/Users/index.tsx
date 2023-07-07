import { useState } from "react";
import { List } from "./List";
import { Tabs } from "./Tabs";
import { userList } from "./userList";

export const Users = () => {
  const [selected, setSelected] = useState(0);

  const filteredList =
    selected !== 0
      ? userList.filter((user) =>
          selected === 1 ? user.role === "Profesor" : user.role === "Admin"
        )
      : userList;

  return (
    <div className="flex flex-col gap-y-4">
      <Tabs selected={selected} onSelect={(value) => setSelected(value)} />
      <List users={filteredList} />
    </div>
  );
};
