import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const ButtonFilter = styled.button`
  display: flex;
  width: 6rem;
  height: 2.25rem;
  padding: 0.625rem 2.5625rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  flex-shrink: 0;
  border-radius: 0.25rem;
  background: ${(props) => props.theme.colors["orange-100"]};
  border: none;
  margin-bottom: 2rem;

  color: #fff;
  text-align: center;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem;

  &:active,
  &[data-active="true"] {
    background: ${(props) => props.theme.colors["orange-300"]};
  }
`;

export const Filter = styled.form`
  border-radius: 0.25rem;
  background: ${(props) => props.theme.colors.black};
  box-shadow: 4px 4px 6px 0px rgba(0, 0, 0, 0.2);
  width: 15.9375rem;
  padding: 1.7rem;
  display: flex;
  flex-direction: column;
  gap: 1.8rem 0;
  position: absolute;
  z-index: 1;
  top: 50px;

  button {
    margin-left: auto;
  }
`;

export const Label = styled.label`
  color: #a3a3a3;
  text-align: start;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
  margin-bottom: 0.5rem;
  display: block;
`;

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

export const WrapperFilter = styled.div`
  margin-bottom: 3rem;
`;
