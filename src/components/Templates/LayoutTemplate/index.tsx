import React, { ComponentProps } from "react";
import * as S from "./styles";
import { Outlet } from "react-router-dom";
import { useLayout } from "./useLayout";

interface ILayoutProps extends ComponentProps<"div"> {
  children?: React.ReactNode;
  paddingSecond?: boolean;
}

export const LayoutTemplate = ({
  children,
  paddingSecond,
  ...rest
}: ILayoutProps) => {
  const { firstName, handleLogout, navigate } = useLayout();
  return (
    <S.Wrapper {...rest}>
      <S.Bar>
        <S.Headerbar>
          <S.ImgProfile
            src="/assets/svg/profile.svg"
            alt="foto perfil ususario"
          />

          <p>
            Olá, <span>{firstName}</span>
          </p>

          <button onClick={handleLogout}>
            Logout
            <img src="/assets/svg/logout.svg" alt="icone logout" />
          </button>
        </S.Headerbar>
        <S.Nav>
          <S.MenuList>
            <S.MenuListItem>
              <img
                src="/assets/svg/graficos.svg"
                alt="icone grafico"
                onClick={() => navigate("/")}
              />
            </S.MenuListItem>
          </S.MenuList>
        </S.Nav>
      </S.Bar>
      <S.Main>
        <S.Header>
          <S.WrapperHeaderContent>
            <h2>Relatórios</h2>
            <S.LogoBar src="/assets/img/logo-brave.png" alt="Logo empresa" />
          </S.WrapperHeaderContent>
        </S.Header>
        <S.Container>
          {children}
          <Outlet />
        </S.Container>
      </S.Main>
    </S.Wrapper>
  );
};
