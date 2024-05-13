import React from "react";
import { useSessionStorage } from "../../../hooks/useSessionStorage";
import { cleanStorage } from "../../../utils/cleanStorage";
import { useContextSite } from "../../../context/Context";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

export const useLayout = () => {
  const [usuario, setUsuario] = useSessionStorage("Usuario");
  const firstName = usuario?.nome?.split(" ")[0];
  const { setIsLoad, setTokenContext } = useContextSite();
  const navigate = useNavigate();

  function handleLogout() {
    setIsLoad(true);

    cleanStorage();
    setTokenContext("");

    setTimeout(() => {
      navigate("/login");
      setIsLoad(false);
    }, 1000);
  }
  return { firstName, handleLogout, navigate, NavLink };
};
