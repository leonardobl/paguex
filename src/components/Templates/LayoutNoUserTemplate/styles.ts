import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: ${(props) => props.theme.screen["2xl"]};

  display: flex;
  align-items: center;
  min-height: 100vh;
`;

export const LeftSide = styled.div`
  width: 50%;
  height: 100vh;
  background-image: url("/assets/img/big-brave-620.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right center;

  @media (min-width: 87rem) {
    background-image: url("/assets/img/big-brave-820.png");
  }
`;

export const RightSide = styled.div`
  width: 50%;
`;
