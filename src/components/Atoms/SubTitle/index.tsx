import React, { ComponentProps } from "react";
import * as S from "./styles";

interface ISubTitleProps extends ComponentProps<"h2"> {}

export const SubTitle = (props: ISubTitleProps) => {
  return <S.MySubTitle {...props} />;
};
