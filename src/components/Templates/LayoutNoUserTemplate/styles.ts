import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
`;

export const LogoBar = styled.img`
  width: 159px;
  height: 29px;
  cursor: pointer;
`;

export const LogoFooter = styled.img`
  width: 124px;
  height: 31px;
`;

export const FlexWrapperBar = styled.div`
  ${({ theme: { screen } }) => css`
    margin: 0 auto;
    width: 100%;
    max-width: ${screen["2xl"]};
    display: flex;
    align-items: center;
    height: 100%;
  `}
`;

export const FlexWrapperFooter = styled.div`
  ${({ theme: { screen } }) => css`
    margin: 0 auto;
    width: 100%;
    max-width: ${screen["2xl"]};
    display: flex;
    align-items: center;
    justify-content: end;
    height: 100%;
  `}
`;
