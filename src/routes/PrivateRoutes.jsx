import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/Auth.context";
import { getLocalStorage } from "../helper/LocalStorageInstance";

export const PrivateRoutes = ({ children }) => {
  const { isLogged } = useContext(AuthContext);
  const loggedUser = getLocalStorage("logged");

  return isLogged || loggedUser ? children : <Navigate to={"/login"} />;
};

PrivateRoutes.propTypes = {
  children: PropTypes.node,
};
