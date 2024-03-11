import React, { ComponentProps } from "react";
import * as S from "./styles";

interface IFooterProps extends ComponentProps<"footer"> {}

export const Footer = (props: IFooterProps) => {
  return <S.MainFooter {...props} />;
};
