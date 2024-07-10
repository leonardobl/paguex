import styled from "styled-components";

export const Table = styled.table`
  max-width: 78.75rem;
  width: 100%;
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.2);
  background: #f6f6f6;
  border-spacing: 1px;
  background-color: ${(props) => props.theme.colors.borderColor};

  .fixeSize {
    width: 11rem;
    padding: 0.5rem 1.5rem;
  }

  .bg-orange {
    background-color: ${(props) => props.theme.colors["orange-100"]};
  }

  .textSmall {
    font-size: 0.75rem;
  }
`;

export const TableHead = styled.thead`
  background: #1d1d1b;

  > tr {
    color: #fff;
    text-align: center;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;

    > td {
      padding: 0.3rem 0;
    }
  }
`;

export const TableBody = styled.tbody`
  background: #f6f6f6;

  td {
    height: 3rem;
    text-align: center;
    color: #a3a3a3;
    text-align: center;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.25rem;
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width: 55rem;
  margin-bottom: 3rem;

  display: flex;
  align-items: end;
  gap: 0 1rem;

  > div {
    flex: 1;
  }

  > div:last-child {
    display: flex;
    align-items: end;

    > button {
      margin-bottom: 3px;
    }
  }
`;

export const Label = styled.label`
  color: #a3a3a3;
  display: block;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.1875rem;
  margin-bottom: 0.44rem;
`;
