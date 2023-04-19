import { FC } from 'react';
import { IButton } from '@/interfaces';
import { ButtonContainer } from './styles';

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
