import React, { ComponentProps } from "react";
import * as S from "./styles";

interface ILayoutProps extends ComponentProps<"div"> {
  children?: React.ReactNode;
}

export const LayoutNoUserTemplate = ({ children, ...rest }: ILayoutProps) => {
  return (
    <S.Wrapper {...rest}>
      <S.LeftSide />
      <S.RightSide>{children}</S.RightSide>
    </S.Wrapper>
  );
};
