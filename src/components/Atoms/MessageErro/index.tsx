import React, { ComponentProps } from "react";
import * as S from "./styles";

interface IMessageErroProps extends ComponentProps<"p"> {}

export const MessageErro = (props: IMessageErroProps) => {
  return <S.MyMessageErro {...props} />;
};
