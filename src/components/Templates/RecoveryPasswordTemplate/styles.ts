import styled, { css } from "styled-components";

export const Container = styled.div``;

export const Label = styled.label`
  ${({ theme: { colors } }) => css`
    color: #8b9eb2;
    text-align: center;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.25rem; /* 125% */

    span {
      color: ${colors.red};
    }
  `}
`;

export const Form = styled.form`
  margin: 0 auto;
  display: flex;
  width: 22.125rem;
  flex-direction: column;
  gap: 3rem;
  align-items: stretch;

  button {
    margin: 0 auto;
  }
`;
