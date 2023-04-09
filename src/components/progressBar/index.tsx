import { FC } from "react";
import { Cancelar, CargandoContainer, ProgressBarContainer } from "./styles";

export interface IProgressBar {
  completed: number;
  color: string;
}

const ProgressBar: FC<IProgressBar> = ({ completed, color }) => {
  return (
    <>
      <CargandoContainer>
        Cargando {" "}
        <span>{`${completed}%`}</span>
      </CargandoContainer>
      <ProgressBarContainer color={color} completed={completed}>
        <div className="progress"></div>
      </ProgressBarContainer>
      {completed < 100 && (
        <Cancelar>
          <p>Cancelar</p>
        </Cancelar>
      )}
    </>
  );
};

export default ProgressBar;
