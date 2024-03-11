import styled from "styled-components";

export const FormDateFilter = styled.form`
  display: grid;
  grid-template-columns: repeat(3, 10rem);
  width: max-content;
  gap: 0 1rem;
  margin-bottom: 3rem;

  > div:has(> button) {
    display: flex;
    align-items: end;
  }
`;

export const Label = styled.label`
  color: #8b9eb2;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem; /* 125% */
  display: block;
  margin-bottom: 0.5rem;
`;

export const WrapperListCards = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3.38rem;
`;

export const ListCards = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Card = styled.div`
  width: 10rem;
  height: 6rem;
  border-radius: 0.25rem;
  border: 1px solid #bbc2d1;
  background: #ecf0f8;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  &.active {
    background: #0f2356;

    > span {
      color: #54acf2;
    }
  }

  > p {
    color: #f17f26;
    text-align: center;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.25rem; /* 125% */
  }

  > span {
    color: #0f2356;
    text-align: center;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.25rem; /* 83.333% */
  }
`;
