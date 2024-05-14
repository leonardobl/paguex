import styled, { css } from "styled-components";

export const MainText = styled.div`
  ${({ theme: { colors, margin, screen, textSize } }) => css`
    color: ${colors.black};
    text-align: center;
    font-style: normal;
    font-weight: 500;
    line-height: 1.25rem;
    font-size: ${textSize.subTitleMobile};
    margin-bottom: ${margin.titleMobile};

    .textStrong {
      font-weight: 700;
      color: #0f2356;
    }

    @media (min-width: ${screen.sm}) {
      font-size: ${textSize.subTitle};
      margin-bottom: ${margin.title};
      line-height: 2rem;
    }
  `}
`;
