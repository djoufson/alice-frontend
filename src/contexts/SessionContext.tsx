"use client";

import { aliceApi } from "@/lib/AliceApi";
import UserResponse from "@/types/ApiResponses/UserResponse";
import { createContext, useEffect, useState } from "react";
interface SessionContextType {
  user: UserResponse | null;
  setUser: (user: UserResponse) => void;
}

const SessionContext = createContext<SessionContextType>({
  user: null,
  setUser: () => {},
});
export const SessionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<UserResponse | null>(null);
  const fetchUser = async () => {
    try {
      const res = await aliceApi.getCurrentUser();
      if (res.isSuccess) {
        setUser(res.value);
      } else {
        setUser(null);
      }
    } catch {
      setUser(null);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <SessionContext.Provider value={{ user, setUser }}>
      {children}
    </SessionContext.Provider>
  );
};

export default SessionContext;
