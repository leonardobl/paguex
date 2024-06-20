import styled from "styled-components";

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
