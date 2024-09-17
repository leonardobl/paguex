import React, { ComponentProps } from "react";
import * as S from "./styles";
import { Outlet } from "react-router-dom";
import { useLayout } from "./useLayout";

interface ILayoutProps extends ComponentProps<"div"> {
  children?: React.ReactNode;
  paddingSecond?: boolean;
  title: string;
}

export const LayoutTemplate = ({
  children,
  paddingSecond,
  title,
  ...rest
}: ILayoutProps) => {
  const { firstName, handleLogout, navigate, NavLink } = useLayout();
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
            <S.MenuListItem title="Geral">
              <NavLink to={"/relatorio-geral"}>
                <img src="/assets/svg/icon-relatorio.svg" alt="icone grafico" />
              </NavLink>
            </S.MenuListItem>
            <S.MenuListItem title="Dashboard de Tendência">
              <NavLink to={"/relatorio-tendencia"}>
                <img src="/assets/svg/icon-graph1.svg" alt="icone grafico" />
              </NavLink>
            </S.MenuListItem>
            <S.MenuListItem>
              <NavLink to={"/relatorio-produtividade-vistoriador"}>
                <img src="/assets/svg/icon-graph2.svg" alt="icone grafico" />
              </NavLink>
            </S.MenuListItem>

            <S.MenuListItem>
              <NavLink to={"/relatorio-colchao"}>
                <img src="/assets/svg/icon-graph3.svg" alt="icone grafico" />
              </NavLink>
            </S.MenuListItem>

            <S.MenuListItem>
              <NavLink to={"/relatorio-reembolso"}>
                <img
                  src="/assets/svg/icon-reembolso.svg"
                  alt="icone reembolso"
                />
              </NavLink>
            </S.MenuListItem>

            <S.MenuListItem>
              <NavLink to={"/relatorio-produtividade-servico"}>
                <img src="/assets/svg/engrenagem.svg" alt="icone engrenagem" />
              </NavLink>
            </S.MenuListItem>

            <S.MenuListItem>
              <NavLink to={"/relatorio-analitico-reembolso"}>
                <img
                  src="/assets/svg/icon-analitico-reembolso.svg"
                  alt="icone reembolso"
                />
              </NavLink>
            </S.MenuListItem>
          </S.MenuList>
        </S.Nav>
      </S.Bar>
      <S.Main>
        <S.Header>
          <S.WrapperHeaderContent>
            <h2>{title}</h2>
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
