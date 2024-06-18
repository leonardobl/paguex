import { darken } from "polished";
import styled, { css } from "styled-components";

export const FormDateFilter = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr 1.2fr 1fr;
  width: max-content;
  gap: 0 1rem;
  margin-bottom: 3rem;
  grid-template-areas: "dataIni dataFim cidade button";

  > :nth-child(1) {
    grid-area: dataIni;
    width: 170px;
  }

  > :nth-child(2) {
    grid-area: dataFim;
    width: 170px;
  }

  > :nth-child(3) {
    grid-area: cidade;
  }

  > :nth-child(4) {
    grid-area: button;
    display: flex;
    align-items: end;
  }
`;

export const Label = styled.label`
  color: #1d1d1b;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem; /* 125% */
  display: block;
  margin-bottom: 0.5rem;
`;

export const WrapperListCards = styled.div`
  ${({ theme: { screen } }) => css`
    display: flex;
    justify-content: space-between;
    margin-bottom: 3.38rem;
    gap: 0 0.625rem;

    @media (min-width: ${screen["2xl"]}) {
      gap: 0 1rem;
    }
  `}
`;

export const ListCards = styled.div`
  ${({ theme: { screen } }) => css`
    display: flex;
    gap: 0.625rem;

    @media (min-width: ${screen["2xl"]}) {
      gap: 1rem;
    }
  `}
`;

export const Card = styled.div`
  width: 8.63319rem;
  height: 5.98838rem;

  border-radius: 0.25rem;
  background: #f6f6f6;
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0.85em 0.6rem;

  &.active {
    background: #1d1d1b;

    > span {
      color: #fff;
    }
  }

  > p {
    color: #e84e1b;
    text-align: center;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.25rem;
  }

  > span {
    color: #1d1d1b;
    text-align: center;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.25rem;
  }
`;

export const CardVistoria = styled.div`
  padding: 1rem;
  max-width: 31.9375rem;
  width: 100%;
  height: 18.5rem;
  border-radius: 0.25rem;

  border-radius: 0.25rem;
  background: #f6f6f6;
  box-shadow: 4px 4px 6px 0px rgba(0, 0, 0, 0.2);
`;
export const CardProducao = styled.div`
  padding: 1rem;
  width: 100%;
  max-width: 47.125rem;
  height: 18.5625rem;

  border-radius: 0.25rem;
  background: #f6f6f6;
  box-shadow: 4px 4px 6px 0px rgba(0, 0, 0, 0.2);

  box-shadow: 4px 4px 9px 0px rgba(19, 35, 77, 0.2);
`;

export const FlexWrapperGraficos = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
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

export const ExportButton = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  gap: 0 0.76rem;
  margin-bottom: 2rem;

  color: #0f2356;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem; /* 125% */
`;

export const Table = styled.div`
  margin-bottom: 2rem;

  > div {
  }

  > div + div {
    margin-top: 1.25rem;
  }
`;

export const TableHead = styled.div`
  background: #1d1d1b;

  border-radius: 0.25rem;

  box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.2);

  width: 100%;
  height: 3.5rem;
  display: grid;
  padding: 0 8px;
  grid-template-columns: 1.2fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 0.5fr;
  align-items: center;

  h4 {
    color: #fff;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.5rem;
    letter-spacing: 0.03rem;
  }
`;

export const TableRow = styled.div`
  border-radius: 0.25rem;
  background: #f6f6f6;
  box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.2);

  width: 100%;
  height: 3.5rem;
  display: grid;
  padding: 0 8px;
  grid-template-columns: 1.2fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 0.5fr;
  align-items: center;

  &:hover {
    background: ${darken(0.03, "#f6f6f6")};
  }

  p {
    color: #a3a3a3;
    font-family: "Noto Sans";
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5rem; /* 150% */
    letter-spacing: 0.03rem;
  }
`;
