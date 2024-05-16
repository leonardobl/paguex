import styled from "styled-components";

export const Label = styled.label`
  color: #1d1d1b;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  display: block;
  margin-bottom: 6px;
`;

export const Form = styled.form`
  display: flex;

  flex-direction: column;
  gap: 32px 0;

  button {
    color: #fff;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;

    display: flex;
    height: 36px;
    width: 100%;
    padding: 10px 41px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 4px;
    border: none;
    background: ${(props) => props.theme.colors["orange-100"]};

    &:active {
      background: ${(props) => props.theme.colors["orange-300"]};
    }
  }
`;
