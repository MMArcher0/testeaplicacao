import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";
import { IUser } from "../../Interfaces/IUser";

interface AuthenticationContextType {
  authentication: string | null;
  setAuthentication: React.Dispatch<React.SetStateAction<string | null>>;
  logout: () => void;
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
}

const AuthenticationContext = createContext<AuthenticationContextType>(
  null as any
);

interface AuthenticationProviderProps {
  children?: ReactNode | ReactNode[];
}

export const AuthenticationProvider = ({
  children,
}: AuthenticationProviderProps) => {
  const [authentication, setAuthentication] = useState<string | null>(
    localStorage.getItem("user")
  );
  const [user, setUser] = useState<IUser | null>(null);

  const logout = () => setAuthentication(null);

  useEffect(() => {
    localStorage.setItem("user", authentication ?? "");
  }, [authentication]);

  return (
    <AuthenticationContext.Provider
      value={{
        authentication,
        setAuthentication,
        logout,
        user,
        setUser,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export const useAuthenticationContext = () => useContext(AuthenticationContext);
