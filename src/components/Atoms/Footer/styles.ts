import styled, { css } from "styled-components";

export const MainFooter = styled.footer`
  ${({ theme: { colors } }) => css`
    height: 4.5625rem;
    background-color: ${colors["gray-100"]};
    padding: 0 20px;
  `}
`;
