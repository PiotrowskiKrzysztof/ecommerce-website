import styled, { keyframes } from "styled-components";
import { border, BorderProps } from "styled-system";

const circleAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div<BorderProps>`
  content: " ";
  display: block;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  border: 1rem solid;
  ${border};
  animation-name: ${circleAnimation};
  animation-duration: 0.5s;
  animation-iteration-count: infinite;
`;

export default Loader;
