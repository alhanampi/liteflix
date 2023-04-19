import { FC } from 'react';
import { ButtonContainer } from './styles';
import { IButton } from '@/interfaces';

const Button: FC<IButton> = ( {
  icon,
  text,
  onClick,
  variation,
  disabled,
  classN,
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
