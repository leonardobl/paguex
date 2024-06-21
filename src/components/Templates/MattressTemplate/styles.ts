import styled from "styled-components";

export const Container = styled.div`
  max-width: ${(props) => props.theme.screen["2xl"]};
  width: 100%;

  > h2 {
    text-transform: uppercase;
  }

  > p {
    color: #9d9d9d;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25rem;
    margin-bottom: 3rem;
  }
`;

export const WrapperCards = styled.div`
  display: flex;
  gap: 0 2rem;
  margin-bottom: 3rem;

  @media (max-width: ${(props) => props.theme.screen.xl}) {
    gap: 0 1rem;
  }
`;

export const Card = styled.div`
  max-width: 19rem;
  width: 100%;
  height: 6rem;
  border-radius: 0.25rem;
  background: #f6f6f6;
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.2);
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem 0;

  p {
    color: #e84e1b;
    text-align: center;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.25rem;
  }

  span {
    color: #1d1d1b;
    text-align: center;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.25rem;
  }
`;

export const WrapperFilter = styled.div`
  margin-bottom: 3.63rem;
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  max-width: 40rem;
  margin-bottom: 2rem;

  &,
  thead,
  tbody,
  td {
    border: 0.5px solid #cbcbcb;
  }

  td {
    padding: 1rem;
  }
`;

export const THead = styled.thead`
  background: #1d1d1b;
  height: 3.625rem;

  td {
    color: #fff;
    text-align: center;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.25rem;
  }

  > tr:nth-child(2) {
    td {
      font-size: 0.75rem;
      line-height: 0.875rem;
    }
  }
`;

export const TBody = styled.tbody`
  background: #f6f6f6;

  tr {
    height: 3.625rem;
  }

  td {
    color: #a3a3a3;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.25rem;
  }
`;
