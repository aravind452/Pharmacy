import { createContext, useContext, useEffect, useState } from "react";

const UserDetailsContext = createContext();

export function UserDetailsContextProvider({ children }) {
  const [userDetails, setUserDetails] = useState("");

  useEffect(() => {
    function getUsers() {
      const users = [
        {
          user_id: "dsjghdsv",
          name: "John",
          email: "abcd@gmail.com",
        },
        {
          user_id: "ds54hdsv",
          name: "Anirudh",
          email: "dabc@gmail.com",
        },
        {
          user_id: "cs54hdsv",
          name: "Adithya",
          email: "cdab@gmail.com",
        },
        {
          user_id: "958hdsv",
          name: "Arun",
          email: "bcda@gmail.com",
        },
      ];

      setUserDetails(users);
    }

    getUsers();
  }, []);

  return (
    <UserDetailsContext.Provider value={{ userDetails }}>
      {children}
    </UserDetailsContext.Provider>
  );
}

export function useUserDetails() {
  return useContext(UserDetailsContext);
}
