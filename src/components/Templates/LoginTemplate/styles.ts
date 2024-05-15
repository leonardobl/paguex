import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: ${(props) => props.theme.screen["2xl"]};
  display: flex;
  align-items: center;

  h1 {
    color: #1d1d1b;
    font-size: 4.375rem;
    font-style: normal;
    font-weight: 700;
    line-height: 4.375rem;
    margin-bottom: 1.25rem;
  }

  p {
    color: #a3a3a3;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.25rem;
    margin-bottom: 3rem;
  }
`;

export const LeftSide = styled.div`
  > img {
    display: block;
  }
`;

export const RigthSide = styled.div`
  padding: 0 6.8rem;

  button.button-forgot {
    color: ${(props) => props.theme.colors["gray-100"]};
    text-align: center;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.25rem;
    border: none;
    display: block;
    background-color: transparent;
    margin-top: 1rem;
    margin-left: auto;
  }

  button.send {
    width: 100%;
    height: 2.25rem;
    padding: 0.625rem 2.5625rem;
    border-radius: 0.25rem;
    background: #e84e1b;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;

    color: #fff;
    text-align: center;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25rem;

    &:active {
      background: #761b0e;
    }
  }
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas: "cpf" "senha" "button";
  gap: 2rem 0;
`;

export const Label = styled.label`
  color: #1d1d1b;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
  display: block;
  margin-bottom: 0.5rem;
`;
