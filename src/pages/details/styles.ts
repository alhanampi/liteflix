import styled from 'styled-components';

export const DetailContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5em;
  flex-direction: row;

  @media (max-width: 600px) and (orientation: portrait) {
    flex-direction: column;
  }  
`;

export const Left = styled.div`
  padding: 0 4em;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  text-align: end;
  padding: 0 4em;
  font-size: 1.2em;

  h2 {
    font-size: 5em;
    color: var(--primary-aqua);
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
`;

export const Similar = styled.div`
  padding: 1em 3em;
  h2 {
    font-size: 2em;
    color: var(--primary-aqua);
  }
`;
