/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const FooterContainer = styled.div`
  margin: 3em 8em;
  
  display: flex;
      align-items: center;
    justify-content: space-around;
    `;

export const Left = styled.div`
font-size: 1.5em;
align-items: center;
letter-spacing: 0.1em;
span {
  color: var(--primary-aqua);
  font-weight: 700;
  font-size: 1.6em;
}
`;

export const Right = styled.div`
display: flex;
width: 20%;
justify-content: space-between;
svg{
  margin: 1em;
  color: var(--primary-white);
  cursor: pointer;

  :hover {
    color: var(--primary-aqua);
    margin: 1em;
  }
}`;
