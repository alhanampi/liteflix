import styled from 'styled-components';

export const MyMoviesMain = styled.div`
 @media (max-width: 600px) and (orientation: portrait) {
    margin-top: 12em;
    
 }
`;

export const MyMoviesContainer = styled.div`
  display: flex;
  width: 100%;

  ul {
   bottom: -1em;
  }
`;

export const Title = styled.h2`
  padding-left: 2em;

  @media (max-width: 600px) and (orientation: portrait) {
    padding-top: 2em;
  }
`;
