import styled from "styled-components";

export const Container = styled.div`
  max-width: 420px;
  width: 100%;
  margin: auto;

  > h1 {
    color: #1d1d1b;
    font-size: 70px;
    font-style: normal;
    font-weight: 700;
    line-height: 70px;
    text-align: start;
    margin-bottom: 20px;
  }

  > p {
    color: #a3a3a3;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    margin-bottom: 48px;

    > span {
      font-weight: 700;
    }
  }
`;
