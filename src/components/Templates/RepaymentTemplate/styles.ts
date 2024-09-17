import styled from "styled-components";

export const Container = styled.div``;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  max-width: 35rem;

  &,
  thead,
  thead td,
  tbody td {
    border: 0.5px solid #cbcbcb;
  }
`;
export const TableHead = styled.thead`
  background: #1d1d1b;
  height: 3.625rem;

  td {
    color: #fff;
    text-align: center;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.25rem;
    min-width: 11rem;
  }
`;
export const TableBody = styled.tbody`
  background: #f6f6f6;

  td {
    color: #a3a3a3;
    text-align: center;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.25rem;
    height: 3.625rem;
  }
`;

export const TableFooter = styled.tfoot`
  height: 1.875rem;
  background: #111;

  td {
    color: #fff;
    text-align: center;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25rem;
  }
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: minmax(200px, 1fr) minmax(200px, 1fr) 1.2fr 1.2fr 1.2fr 1.5fr 0.5fr;
  gap: 0 1rem;
  margin-bottom: 3rem;

  > div:last-child {
    display: flex;
    align-items: end;
  }
`;

export const Label = styled.label`
  color: #a3a3a3;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 19px;
  display: block;
  margin-bottom: 0.44rem;
`;
