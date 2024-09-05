import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

import {
  deleteLocalStorage,
  setLocalStorage,
} from "../helper/LocalStorageInstance";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState(null); // Pode ser usado para lista de usuários no futuro
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const loggedUser = localStorage.getItem("logged");
    if (loggedUser) {
      setIsLogged(true);
      setUser({ email: loggedUser });
    }
  }, []);

  const login = async (data) => {
    let foundUser = null;

    if (data.email === "email@email.com" && data.password === "batatagarcia") {
      foundUser = { email: data.email };
    }

    if (foundUser) {
      setUser(foundUser);
      setIsLogged(true);
      setLocalStorage("logged", foundUser.email);
      toast.success("Bem Vindo!", {
        position: "bottom-right",
        theme: "colored",
        autoClose: 2000,
      });
      window.location.href = "/";
    } else {
      toast.error("Senha ou Email incorreto! Tente novamente", {
        position: "top-center",
        theme: "colored",
        autoClose: 2000,
      });
    }
  };

  const logout = () => {
    setIsLogged(false);
    setUser(null);
    deleteLocalStorage("logged");
    window.location.href = "/";
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        users,
        setUser,
        setUsers,
        isLogged,
        setIsLogged,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
