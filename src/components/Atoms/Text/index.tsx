import React, { ComponentProps } from "react";
import * as S from "./styles";

interface IMainTextProps extends ComponentProps<"p"> {}

export const Text = (props: IMainTextProps) => {
  return <S.MainText {...props} />;
};
