import styled, { css } from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  max-width: 450px;
  width: 100%;

  > h1 {
    color: #1d1d1b;
    font-size: 70px;
    font-style: normal;
    font-weight: 700;
    line-height: 70px;
    margin-bottom: 16px;
  }

  > p {
    color: #a3a3a3;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    margin-bottom: 48px;

    > span {
      font-weight: 700;
    }
  }
`;
