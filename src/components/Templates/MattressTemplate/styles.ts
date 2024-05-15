import styled from "styled-components";

export const Container = styled.div`
  max-width: ${(props) => props.theme.screen["2xl"]};
  width: 100%;

  > h2 {
    text-transform: uppercase;
  }

  > p {
    color: #9d9d9d;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25rem;
    margin-bottom: 3rem;
  }
`;

export const WrapperCards = styled.div`
  display: flex;
  gap: 0 2rem;
  margin-bottom: 3rem;

  @media (max-width: ${(props) => props.theme.screen.xl}) {
    gap: 0 1rem;
  }
`;

export const Card = styled.div`
  max-width: 19rem;
  width: 100%;
  height: 6rem;
  border-radius: 0.25rem;
  background: #f6f6f6;
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.2);
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem 0;

  p {
    color: #e84e1b;
    text-align: center;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.25rem;
  }

  span {
    color: #1d1d1b;
    text-align: center;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.25rem;
  }
`;
