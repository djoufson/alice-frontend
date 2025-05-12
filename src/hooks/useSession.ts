import SessionContext from "@/contexts/SessionContext";
import { AppRoutes } from "@/utils/AppRoutes";
import { useContext } from "react";

export const useSession = () => {
  const { user, setUser } = useContext(SessionContext);
  if (!user) {
    return { user: null, setUser: () => {} };
  }
  return { user, setUser };
};
