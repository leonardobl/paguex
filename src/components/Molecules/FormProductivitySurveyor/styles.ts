import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  gap: 0 1rem;
  align-items: end;
  max-width: 40rem;
  width: 100%;

  > div:not(:last-child) {
    flex: 1;
  }

  & > div:last-child {
    margin-bottom: 3px;
  }
`;

export const Label = styled.label`
  color: #a3a3a3;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.1875rem;
  display: block;
  margin-bottom: 0.38rem;
`;
