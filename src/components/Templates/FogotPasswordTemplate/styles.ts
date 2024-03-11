import styled, { css } from "styled-components";

export const Container = styled.div``;

export const Form = styled.form`
  width: 100%;
  max-width: 40.625rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 3rem;

  button {
    margin: 0 auto;
  }
`;

export const Label = styled.label`
  ${({ theme: { colors } }) => css`
    display: block;
    margin-bottom: 0.5rem;

    color: #8b9eb2;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.25rem; /* 125% */

    > span {
      color: ${colors.red};
    }
  `}
`;
