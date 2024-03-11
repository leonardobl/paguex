import React, { ComponentProps } from "react";
import * as S from "./styles";

interface IMainButton extends ComponentProps<"button"> {}

export const Button = (props: IMainButton) => {
  return <S.MainButton {...props} />;
};
