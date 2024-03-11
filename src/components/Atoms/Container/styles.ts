import styled, { css } from "styled-components";

export const MainContainer = styled.main`
  ${({ theme: { padding, screen } }) => css`
    padding: ${padding.mobile};
    width: 100%;
    max-width: ${screen["2xl"]};
    margin: 0 auto;
    flex: 1;

    &[data-padding-second="true"] {
      padding: ${padding.second};
    }

    @media (min-width: ${screen.sm}) {
      padding: ${padding.primary};
    }
  `}
`;
