import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100dvh;
  display: flex;
`;

export const LogoBar = styled.img`
  width: 159px;
  /* height: 29px; */
  display: block;
`;

export const Header = styled.header`
  width: 100%;
  height: 84px;
  margin-bottom: 3rem;

  border-bottom: 1px solid ${(props) => props.theme.colors.borderColor};
`;

export const Bar = styled.div`
  min-width: 120px;
  max-width: 120px;
  width: 100%;
  min-height: 100dvh;
  background: ${(props) => props.theme.colors.black};
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 4px -140px 9px 0px rgba(15, 35, 86, 0.24);
`;

export const Headerbar = styled.div`
  display: flex;
  width: 100%;
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
      color: #e84e1b;
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    background: transparent;
    outline: none;
    border: none;
    color: #a3a3a3;
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
    padding: 0 16px;
    max-width: calc(${screen["2xl"]} - 126px);

    > h2 {
      color: #1d1d1b;
      text-align: center;
      font-family: "Noto Sans";
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 20px; /* 100% */
    }
  `}
`;

export const Main = styled.main`
  width: 100%;
`;

export const Nav = styled.nav``;

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px 0;
`;

export const MenuListItem = styled.li`
  > a {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    width: 50px;
    height: 50px;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.36);
    background-color: #e84e1b;
  }

  > a.active {
    background-color: #761b0e;
  }
`;

export const Container = styled.div`
  ${({ theme: { screen } }) => css`
    padding: 0 16px;
    width: 100%;
    max-width: calc(${screen["2xl"]} - 126px);

    @media (min-width: ${screen["2xl"]}) {
      padding: 0 20px;
    }
  `}
`;
