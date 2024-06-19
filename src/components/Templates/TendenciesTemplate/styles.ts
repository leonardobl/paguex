import styled from "styled-components";

export const Container = styled.div`
  > h2 {
    text-align: start;
  }
`;

export const Card = styled.div`
  width: 47.125rem;
  height: 22rem;
  border-radius: 0.25rem;
  background: #f6f6f6;
  box-shadow: 4px 4px 6px 0px rgba(0, 0, 0, 0.2);
  margin-bottom: 3rem;
`;

export const TableTitle = styled.h3`
  margin-bottom: 2rem;
`;

export const Table = styled.table`
  max-width: 52rem;
  width: 100%;
  margin-bottom: 2rem;

  &,
  th,
  td {
    border-collapse: collapse;
    border: 0.5px solid #cbcbcb;
  }
`;

export const TableHead = styled.thead`
  background: #1d1d1b;
  height: 3rem;

  td {
    color: #fff;
    text-align: center;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.25rem;
  }
`;

export const TableBody = styled.tbody`
  background: #f6f6f6;

  > tr {
    height: 3rem;
  }

  td {
    color: #a3a3a3;
    text-align: center;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.25rem;
  }
`;
