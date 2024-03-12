import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100dvh;
  display: flex;
`;

export const LogoBar = styled.img`
  width: 159px;
  height: 29px;
  display: block;
`;

export const Header = styled.header`
  width: 100%;
  height: 84px;
  width: 100%;
  margin-bottom: 1.25rem;

  border-bottom: 1px solid #bbc2d1;
  padding: 0 34px;
`;

export const Bar = styled.div`
  width: 126px;
  min-height: 100dvh;
  background: #0f2356;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 4px -140px 9px 0px rgba(15, 35, 86, 0.24);
`;

export const Headerbar = styled.div`
  display: flex;
  flex-direction: column;
  height: max-content;
  align-items: center;
  gap: 0.5rem 0;
  margin-bottom: 2rem;

  p {
    color: #ecf0f8;
    text-align: center;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1rem; /* 133.333% */

    span {
      color: #54acf2;
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    background: transparent;
    outline: none;
    border: none;
  }
`;

export const ImgProfile = styled.img`
  width: 46px;
  height: 46px;
  border: 50%;
`;

export const WrapperHeaderContent = styled.div`
  ${({ theme: { screen } }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    max-width: calc(${screen["2xl"]} - 126px);
  `}
`;

export const Main = styled.main`
  width: 100%;
`;

export const Nav = styled.nav``;
export const MenuList = styled.ul``;
export const MenuListItem = styled.li`
  cursor: pointer;
`;

export const Container = styled.div`
  ${({ theme: { screen } }) => css`
    padding: 0 32px;
    width: 100%;
    max-width: calc(${screen["2xl"]} - 126px);
  `}
`;
