import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 72.4375rem;
`;

export const WrapperFilter = styled.div`
  margin-bottom: 3rem;
`;

export const ButtonExport = styled.button`
  all: unset;
  cursor: pointer;
  margin-bottom: 2rem;
  display: flex;
  gap: 0 8px;
  align-items: center;
`;

export const Table = styled.div`
  margin-bottom: 2rem;

  > div + div {
    margin-top: 1.25rem;
  }
`;

export const TableHeader = styled.div`
  border-radius: 0.25rem;
  background: #1d1d1b;
  box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.2);
  display: grid;
  grid-template-columns: repeat(5, 1fr) 0.5fr;
  align-items: center;
  padding: 4px 1rem;
  height: 3.5625rem;

  h3 {
    color: #fff;
    font-family: "Noto Sans";
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.5rem;
    letter-spacing: 0.03rem;
  }
`;

export const TableItem = styled.div`
  border-radius: 0.25rem;
  background: #f6f6f6;
  box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.2);
  align-items: center;
  padding: 4px 1rem;
  display: grid;
  height: 3.5625rem;
  grid-template-columns: repeat(5, 1fr) 0.5fr;

  p {
    color: #a3a3a3;
    font-family: "Noto Sans";
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5rem;
    letter-spacing: 0.03rem;
  }
`;
