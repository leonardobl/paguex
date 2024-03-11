import React from "react";
import { useNavigate } from "react-router-dom";

export const useLayoutNoUser = () => {
  const navigate = useNavigate();

  return { navigate };
};
