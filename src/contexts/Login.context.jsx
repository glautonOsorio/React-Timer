import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const LoginContext = createContext();

export const LoginContextProvider = ({ children }) => {
  const [login, setLogin] = useState(true); // Controla se o estado atual é o de login ou registro

  const showLogin = () => {
    setLogin(true); // Alterna para a tela de login
  };

  const showRegister = () => {
    setLogin(false); // Alterna para a tela de registro
  };

  return (
    <LoginContext.Provider value={{ login, showLogin, showRegister }}>
      {children}
    </LoginContext.Provider>
  );
};

LoginContextProvider.propTypes = {
  children: PropTypes.node, // Aceita qualquer tipo de nó JSX
};
