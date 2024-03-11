import React, { ComponentProps } from "react";
import * as S from "./styles";

interface IMainContainerProps extends ComponentProps<"main"> {}

export const Container = (props: IMainContainerProps) => {
  return <S.MainContainer {...props} />;
};
