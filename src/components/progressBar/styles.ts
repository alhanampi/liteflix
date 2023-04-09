import styled from 'styled-components';

interface IProgressBarContainerProps {
  color: string;
  completed: number;
}

export const CargandoContainer = styled.div`
  display: block;
  padding: 1em;
  text-align: left;
`;

export const ProgressBarContainer = styled.div<IProgressBarContainerProps>`
  height: 5px;
  width: 100%;
  background-color: var(--primary-white);
  display: flex;
  align-items: center;
  margin-bottom: 1em;

  .progress {
    height: 20px;
    width: ${( props ) => props.completed}%;
    background-color: ${( props ) => props.color};
    border-radius: inherit;
    text-align: center;
  }

  span {
    color: ${( props ) => props.color};
    padding: 5;
  }
`;

export const Cancelar = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 0.5em;

  p {
    margin-right: 0;
    padding: 1em 0;
    letter-spacing: 3px;
    width: 20%;
    cursor: pointer;

    :hover {
      background-color: var(--hover-white);
    }
  }
`;
