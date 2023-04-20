import { FC, useContext } from 'react';
import { LiteFlixContext } from '@/context';
import { BackdropContainer } from './styles';

const Backdrop: FC = () => {
  const { handleModal } = useContext( LiteFlixContext );

  return (
    <BackdropContainer onClick={ handleModal } />
  );
};
export default Backdrop;
