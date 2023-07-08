import { PropsWithChildren, createContext, useState } from "react";
import { User } from "../services/backend";

type UserProvider = PropsWithChildren;

interface UserContextValue {
  user: User | null;
  saveUser: (user: User) => void;
  deleteUser: () => void;
}

export const UserContext = createContext<UserContextValue>({
  user: null,
  saveUser: () => undefined,
  deleteUser: () => undefined,
});

export const UserProvider: React.FC<UserProvider> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const saveUser = (user: User) => setUser(user);

  const deleteUser = () => setUser(null);

  return (
    <UserContext.Provider value={{ user, saveUser, deleteUser }}>
      {children}
    </UserContext.Provider>
  );
};
