import React, { ComponentProps } from "react";
import { Container } from "../../Atoms/Container";
import * as S from "./styles";
import { Outlet } from "react-router-dom";
import { Bar } from "../../Atoms/Bar";

interface ILayoutProps extends ComponentProps<"div"> {
  children?: React.ReactNode;
  paddingSecond?: boolean;
}

export const LayoutTemplateNoUser = ({
  children,
  paddingSecond,
  ...rest
}: ILayoutProps) => {
  return (
    <S.Wrapper {...rest}>
      <Bar>
        <S.FlexWrapperBar>
          <S.LogoBar
            src={`/assets/svg/paguex-logo.svg`}
            alt="logo da empresa"
          />
        </S.FlexWrapperBar>
      </Bar>
      <Container data-padding-second={paddingSecond}>
        {children}
        <Outlet />
      </Container>
    </S.Wrapper>
  );
};
