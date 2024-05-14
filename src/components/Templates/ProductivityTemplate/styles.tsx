import styled from "styled-components";

export const Container = styled.div``;

export const ButtonFilter = styled.button`
  display: flex;
  width: 6rem;
  height: 2.25rem;
  padding: 0.625rem 2.5625rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  flex-shrink: 0;
  border-radius: 0.25rem;
  background: ${(props) => props.theme.colors["orange-100"]};
  border: none;
  margin-bottom: 0.6rem;

  color: #fff;
  text-align: center;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem;

  &:active,
  &[data-active="true"] {
    background: ${(props) => props.theme.colors["orange-300"]};
  }
`;

export const Filter = styled.form`
  border-radius: 0.25rem;
  background: ${(props) => props.theme.colors.black};
  box-shadow: 4px 4px 6px 0px rgba(0, 0, 0, 0.2);
  width: 15.9375rem;
  padding: 1.7rem;
  display: flex;
  flex-direction: column;
  gap: 1.8rem 0;

  button {
    margin-left: auto;
  }
`;

export const Label = styled.label`
  color: #a3a3a3;
  text-align: start;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
  margin-bottom: 0.5rem;
  display: block;
`;
