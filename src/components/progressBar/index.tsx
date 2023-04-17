import { FC } from 'react';
import { Cancelar, CargandoContainer, ProgressBarContainer } from './styles';
import { IProgressBar } from '@/interfaces';

const ProgressBar: FC<IProgressBar> = ( { completed, color, cancelUpload } ) => (
  <>
    <CargandoContainer>
      Cargando
      &nbsp;
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
