import styled, { keyframes } from 'styled-components';
import { slideInRight } from 'react-animations';

const slideInRightAnimation = keyframes`${slideInRight}`;

export const DetailContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5em;
  flex-direction: row;
  margin: 0em 7em;
  justify-content: space-between;

  @media (max-width: 1280px){
    margin: 0em 4em;
  }

  
  @media (max-width: 1024px)  {
    flex-direction: column;
  }  

  @media (max-width: 600px) and (orientation: portrait) {
    flex-direction: column;
  }  
`;

export const Left = styled.div`
  padding: 3em 4em;

  @media (max-width: 600px) and (orientation: portrait) {
    align-items: center;
    margin: 4em 0;
    justify-content: center;
    text-align: center;
    padding: 0;
  }

  @media (max-width: 420px) and (orientation: portrait) {
    font-size: 0.8em;

    h2 {
      font-size: 3em;
    }

    img {
    max-width: 420px;
  }
  } 

  @media (max-width: 393px) and (orientation: portrait) {
  img {
    max-width: 393px;
  }
  }
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  text-align: end;
  padding: 3em 4em;
  font-size: 1.2em;

  h2 {
    font-size: 5em;
    color: var(--primary-aqua);
    animation: 1s ${slideInRightAnimation};
  }

  p {
    letter-spacing: 0.1em;
    font-size: 1.2em;
  }
  
    @media (max-width: 1280px) {
    font-size: 1em;
  }

  @media (max-width: 600px) and (orientation: portrait) {
    font-size: 0.8em;
    text-align: center;
    h2 {
      font-size: 4em;
    }
  } 

  @media (max-width: 420px) and (orientation: portrait) {
    font-size: 0.8em;
    align-items: center;
    margin: 0;
    justify-content: center;
    text-align: center;
    padding: 0;

    h2 {
      font-size: 3em;
    }
  } 
`;

export const Similar = styled.div`
  padding: 1em 3em;
  h2 {
    font-size: 2em;
    color: var(--primary-aqua);
  }
  @media (max-width: 600px) and (orientation: portrait) {
    h2 {
      text-align: center;
    }
  }
  @media (max-width: 420px) and (orientation: portrait) {
    padding: 0;
    
    h2 {
      padding: 0 1em;
    }

  } 
`;
