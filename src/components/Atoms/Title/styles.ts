import styled, { css } from "styled-components";

export const MainTitle = styled.h1`
  ${({ theme: { colors, margin, screen, textSize } }) => css`
    color: ${colors.blueMain};
    text-align: center;
    font-style: normal;
    font-weight: 900;
    letter-spacing: 0.06rem;
    text-transform: uppercase;
    line-height: 2rem;
    font-size: ${textSize.titleMobile};
    margin-bottom: ${margin.titleMobile};

    @media (min-width: ${screen.sm}) {
      line-height: 3rem;
      font-size: ${textSize.title};
      margin-bottom: ${margin.title};
    }
  `}
`;
