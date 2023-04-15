import styled, { keyframes } from 'styled-components';

const pulseAnimation = keyframes`
  0% {
    transform: scale(0.8);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(0.8);
  }
`;

export const Spinner = styled.div`
  display: grid;
  height: 100vh;

div {
  place-self: center;
  animation: ${pulseAnimation} 1s ease-in-out infinite;
}
`;
