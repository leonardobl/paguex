import React, { ComponentProps } from "react";
import * as S from "./styles";

interface IBarProps extends ComponentProps<"div"> {}

export const Bar = (props: IBarProps) => {
  return <S.MainBar {...props} />;
};
