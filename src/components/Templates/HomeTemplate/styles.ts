import { darken } from "polished";
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
  gap: 0 1rem;
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
  max-width: 31.9375rem;
  width: 100%;
  height: 18.5rem;
  border-radius: 0.25rem;
  border: 1px solid #bbc2d1;
  background: #ecf0f8;
  box-shadow: 4px 4px 9px 0px rgba(19, 35, 77, 0.2);
`;
export const CardProducao = styled.div`
  padding: 1rem;
  width: 100%;
  max-width: 47.125rem;
  height: 18.5625rem;
  border-radius: 0.25rem;
  border: 1px solid var(--INPUT, #bbc2d1);
  background: var(--PAGX3, #ecf0f8);
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
    border-radius: 0.25rem;
    background: #ecf0f8;
    box-shadow: 0px 4px 9px 0px rgba(15, 35, 86, 0.2);
    width: 100%;
    height: 3.5rem;
    display: grid;
    padding: 1rem;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1.5fr 2fr 0.5fr;
    place-items: center;
  }

  > div + div {
    margin-top: 1.25rem;
  }
`;

export const TableHead = styled.div`
  h4 {
    color: #0f2356;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.5rem; /* 150% */
    letter-spacing: 0.03rem;
  }
`;

export const TableRow = styled.div`
  &:hover {
    background: ${darken(0.03, "#ecf0f8")};
  }

  p {
    color: #8b9eb2;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5rem; /* 150% */
    letter-spacing: 0.03rem;
  }
`;
