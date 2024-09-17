import styled from "styled-components";

export const MyFormAnalysis = styled.form`
  display: grid;
  gap: 0 16px;
  width: 100%;
  max-width: 72.4375rem;
  grid-template-columns: repeat(6, 1fr) 0.5fr;

  > :nth-child(7) {
    display: flex;
    align-items: end;
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  color: #9d9d9d;
  font-family: "Noto Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
`;
