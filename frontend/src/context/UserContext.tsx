import { createContext, FC, ReactNode } from "react";
import { useState } from "react";

interface User {
  privilage: number
  username: string
  image?: string
}

const UserContext = createContext<User | undefined>(undefined)

interface UserContextProps {
  children: ReactNode
}

const UserContextProvider: FC<UserContextProps> = ({ children }) => {
  const [user] = useState<User>();

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider
