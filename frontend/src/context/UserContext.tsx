import { createContext, FC, ReactNode, useContext } from "react";
import { useState } from "react";

//LocalStorage här

//
interface User {
  userid: string
  username: string
  image?: string
}

interface UserContext {
  user?: User
  loginUser: (user: User) => void
}

const UserContext = createContext<UserContext>({
  user: undefined,
  loginUser: () => { }
})

export const useUserContext = () => useContext(UserContext)

interface UserContextProps {
  children: ReactNode
}
//

//
const UserContextProvider: FC<UserContextProps> = ({ children }) => {
  const [user, setUser] = useState<User>();

  const loginUser = (user: User) => {
    setUser(user)
  }

  return (
    <UserContext.Provider value={{ user: user, loginUser }}>
      {children}
    </UserContext.Provider>
  );
};
//

export default UserContextProvider
