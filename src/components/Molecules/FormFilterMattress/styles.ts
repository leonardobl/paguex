import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  max-width: 50rem;
  display: flex;
  gap: 0 1rem;

  > div:not(:last-child) {
    flex: 1;
  }

  > div:last-child {
    display: flex;
    align-items: end;
  }
`;

export const Label = styled.label`
  color: #a3a3a3;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.1875rem;
  margin-bottom: 0.38rem;
  display: block;
`;
