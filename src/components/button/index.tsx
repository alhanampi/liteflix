import React, { FC } from "react";
import { ButtonContainer } from "./styles";

export interface IButton {
  text: string;
  icon?: JSX.Element;
  onClick?: any;
  variation: boolean;
  disabled?: boolean;
  classN?: string;
}

const Button: FC<IButton> = ({ icon, text, onClick, variation, disabled, classN }) => {
  return (
    <>
      <ButtonContainer
        onClick={onClick}
        className={variation ? "var" : "" + classN}
        disabled={disabled}
      >
        {icon}
        {text}
      </ButtonContainer>
    </>
  );
};

export default Button;
