import styled from "styled-components";

export const Form = styled.form`
  display: grid;
  grid-template-columns: minmax(200px, 1fr) minmax(200px, 1fr) 1.2fr 1.2fr 1.2fr 1.5fr 0.5fr;
  gap: 0 1rem;
  margin-bottom: 3rem;

  > div:last-child {
    display: flex;
    align-items: end;
    margin-bottom: 4px;
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
