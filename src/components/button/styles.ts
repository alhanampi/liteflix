import styled from 'styled-components';

export const ButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid var(--primary-white);
  background-color: transparent;
  color: var(--primary-white);
  height: 3em;
  width: 15em;
  font-family: 'Bebas Neue';
  font-weight: 400;
  font-size: 1.2em;
  margin: 1em;
  text-shadow: 2px 2px 1px var(--hover-grey);
  
  &.var {
    border: none;
    background-color: var(--primary-grey);
  }

  :hover {
    font-weight: 700;
    background-color: var(--hover-white);
    transition: 0.2s ease;
  }

  :disabled {
    cursor: default;
    background-color: var(--hover-white-intense);
    color: var(--primary-white);
    border: none;
  }

  :hover:disabled {
    font-weight: inherit;
  }
`;
