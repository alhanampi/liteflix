/* eslint-disable react/require-default-props */
import { FC } from 'react';
import { ButtonContainer } from './styles';

export interface IButton {
  text: string;
  icon?: JSX.Element;
  onClick?: any;
  variation: boolean;
  disabled?: boolean;
  classN?: string;
}

const Button: FC<IButton> = ( {
  icon, text, onClick, variation, disabled, classN,
} ) => (
  <ButtonContainer
    onClick={ onClick }
    className={ variation ? `var ${classN}` : `${classN}` }
    disabled={ disabled }
  >
    {icon}
    &nbsp;
    {text}
  </ButtonContainer>
);

export default Button;
