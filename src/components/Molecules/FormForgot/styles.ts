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
    display: flex;
    width: 100%;
    height: 36px;
    padding: 10px 41px;
    justify-content: center;
    align-items: center;
    gap: 10px;

    border-radius: 4px;
    background: ${(props) => props.theme.colors["orange-100"]};
    border: none;

    color: #fff;
    text-align: center;
    font-family: "Noto Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;

    &:active {
      background: ${(props) => props.theme.colors["orange-300"]};
    }
  }
`;

export const Label = styled.label`
  ${({ theme: { colors } }) => css`
    display: block;
    margin-bottom: 0.5rem;

    color: #1d1d1b;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
  `}
`;
