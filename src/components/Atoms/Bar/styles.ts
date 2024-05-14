import styled, { css } from "styled-components";

export const MainBar = styled.div`
  ${({ theme: { colors } }) => css`
    height: 4.5625rem;
    background-color: ${colors["gray-300"]};
    padding: 0 20px;
  `}
`;
