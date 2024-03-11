import styled from "styled-components";

export const Container = styled.div``;

export const Form = styled.form`
  max-width: 22.125rem;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 3rem 0;

  button#submit {
    margin: 0 auto;
  }
`;
export const Label = styled.label`
  color: #8b9eb2;
  display: block;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem; /* 125% */
  margin-bottom: 0.5rem;
`;

export const ForgotButton = styled.button`
  color: #8b9eb2;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1rem; /* 133.333% */
  text-align: end;
  display: block;
  margin-top: 1rem;
  margin-left: auto;
  background: transparent;
  outline: none;
  border: none;
`;
