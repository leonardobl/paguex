import React, { ComponentProps } from "react";
import * as S from "./styles";

interface ITitle extends ComponentProps<"h1"> {}

export const Title = (props: ITitle) => {
  return <S.MainTitle {...props} />;
};
