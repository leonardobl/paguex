import React, { ComponentProps } from "react";
import { Container } from "../../Atoms/Container";
import * as S from "./styles";
import { Outlet } from "react-router-dom";
import { Bar } from "../../Atoms/Bar";
import { useLayoutNoUser } from "./useLayoutNoUser";

interface ILayoutProps extends ComponentProps<"div"> {
  children?: React.ReactNode;
  paddingSecond?: boolean;
}

export const LayoutNoUserTemplate = ({
  children,
  paddingSecond,
  ...rest
}: ILayoutProps) => {
  const { navigate } = useLayoutNoUser();

  return (
    <S.Wrapper {...rest}>
      <Bar>
        <S.FlexWrapperBar>
          <S.LogoBar
            src={`/assets/img/logo-brave-white.png`}
            alt="logo da empresa"
            onClick={() => navigate("/")}
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
