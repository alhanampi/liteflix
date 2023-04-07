import React, { FC } from "react";
import { ButtonContainer } from "./styles";

export interface IButton {
  text: string;
  icon?: JSX.Element;
  onClick?: any;
  variation: boolean;
}

const Button: FC<IButton> = ({ icon, text, onClick, variation }) => {
  return (
    <>
      <ButtonContainer onClick={onClick} className={variation ? "var" : ""}>
        {icon}
        {text}
      </ButtonContainer>
    </>
  );
};

export default Button;
