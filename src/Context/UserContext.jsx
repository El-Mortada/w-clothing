import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { onAuthStateChangedUser } from "../Utilities/Firebase/Firebase";

export const UserContext = createContext(null);

export default function UserContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedUser((user) => {
      setCurrentUser(user);
      console.log(user);
    });

    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
}
