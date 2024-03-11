import styled from "styled-components";

export const MainButton = styled.button`
  display: flex;
  width: 8rem;
  height: 2.75rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 0.25rem;
  border: none;
  background: linear-gradient(180deg, #2556cc 0%, #0f2356 100%);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2);

  color: #fff;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;

  &[data-variant-light="true"] {
    background: #2556cc;
  }
`;
