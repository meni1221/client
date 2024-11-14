import { createContext, useEffect, useState } from "react";

interface User {
  id?: string;
  name: string;
  password: string;
  org: string;
  loction: string;
}

interface Props {
  children: React.ReactNode;
}

interface UserProps {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
}
export const UserContext = createContext<UserProps>({
  users: [],
  setUsers: () => {},
});

export default function UserProvider({ children }: Props) {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("./data.json")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error data:", error));
  }, []);

  return (
    <>
      <UserContext.Provider value={{ users, setUsers }}>
        {children}
      </UserContext.Provider>
    </>
  );
}
