import React, { ComponentProps } from "react";
import { Container } from "../../Atoms/Container";
import * as S from "./styles";
import { Outlet } from "react-router-dom";

interface ILayoutProps extends ComponentProps<"div"> {
  children?: React.ReactNode;
  paddingSecond?: boolean;
}

export const LayoutTemplate = ({
  children,
  paddingSecond,
  ...rest
}: ILayoutProps) => {
  return (
    <S.Wrapper {...rest}>
      <S.Bar>
        <S.Headerbar>
          <S.ImgProfile
            src="/assets/svg/profile.svg"
            alt="foto perfil ususario"
          />

          <p>
            Olá, <span>Leonardo</span>
          </p>

          <button>
            Logout
            <img src="/assets/svg/logout.svg" alt="icone logout" />
          </button>
        </S.Headerbar>
        <S.Nav>
          <S.MenuList>
            <S.MenuListItem>
              <img src="/assets/svg/graficos.svg" alt="icone grafico" />
            </S.MenuListItem>
          </S.MenuList>
        </S.Nav>
      </S.Bar>
      <S.Main>
        <S.Header>
          <S.WrapperHeaderContent>
            <h2>Relatórios</h2>
            <S.LogoBar src="/assets/svg/logo-paguex.svg" alt="Logo empresa" />
          </S.WrapperHeaderContent>
        </S.Header>
        <Container data-padding-second={paddingSecond}>
          {children}
          <Outlet />
        </Container>
      </S.Main>
    </S.Wrapper>
  );
};
