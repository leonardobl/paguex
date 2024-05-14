import styled from "styled-components";

export const MainButton = styled.button`
  display: flex;
  width: 6rem;
  height: 2.25rem;
  padding: 0.625rem 2.5625rem;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 0.25rem;
  background: #e84e1b;

  color: #fff;
  text-align: center;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem;

  transition: all 0.2s linear;

  &:active {
    background: #761b0e;
  }

  &:disabled {
    background: #a3a3a3;
    cursor: default;
  }
`;
