import styled, { css } from "styled-components";

export const FormDateFilter = styled.form`
  display: grid;
  grid-template-columns: repeat(3, 10rem);
  width: max-content;
  gap: 0 1rem;
  margin-bottom: 3rem;

  > div:has(> button) {
    display: flex;
    align-items: end;
  }
`;

export const Label = styled.label`
  color: #8b9eb2;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem; /* 125% */
  display: block;
  margin-bottom: 0.5rem;
`;

export const WrapperListCards = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3.38rem;
`;

export const ListCards = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Card = styled.div`
  width: 10rem;
  height: 6rem;
  border-radius: 0.25rem;
  border: 1px solid #bbc2d1;
  background: #ecf0f8;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  &.active {
    background: #0f2356;

    > span {
      color: #54acf2;
    }
  }

  > p {
    color: #f17f26;
    text-align: center;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.25rem; /* 125% */
  }

  > span {
    color: #0f2356;
    text-align: center;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.25rem; /* 83.333% */
  }
`;

export const CardVistoria = styled.div`
  padding: 1rem;
  width: 31.9375rem;
  height: 18.5rem;
  border-radius: 0.25rem;
  border: 1px solid #bbc2d1;
  background: #ecf0f8;
  box-shadow: 4px 4px 9px 0px rgba(19, 35, 77, 0.2);
`;

export const FlexWrapperGraficos = styled.div``;

export const LegendCard = styled.p<{ bgColor: string }>`
  ${({ bgColor }) => css`
    color: #8b9eb2;
    text-align: center;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 500;
    line-height: 0.875rem; /* 116.667% */
    display: flex;
    gap: 0.25rem;
    align-items: center;

    &::before {
      width: 0.75rem;
      height: 0.6875rem;
      display: block;
      content: "";
      background-color: ${bgColor};
    }
  `}
`;

export const WrapperLegend = styled.legend`
  display: flex;
  gap: 0 1rem;
`;

export const TitleCard = styled.h2`
  color: #f17f26;
  text-align: center;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25rem; /* 125% */
  text-transform: uppercase;
`;
