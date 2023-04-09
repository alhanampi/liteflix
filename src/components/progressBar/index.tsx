import { FC } from 'react';
import { Cancelar, CargandoContainer, ProgressBarContainer } from './styles';

export interface IProgressBar {
  completed: number;
  color: string;
  cancelUpload: any;
}

const ProgressBar: FC<IProgressBar> = ( { completed, color, cancelUpload } ) => (
  <>
    <CargandoContainer>
      Cargando
      {' '}
      <span>{`${completed}%`}</span>
    </CargandoContainer>
    <ProgressBarContainer color={ color } completed={ completed }>
      <div className="progress" />
    </ProgressBarContainer>
    {completed < 100 && (
      <Cancelar onClick={ cancelUpload }>
        <p>Cancelar</p>
      </Cancelar>
    )}
  </>
);

export default ProgressBar;
