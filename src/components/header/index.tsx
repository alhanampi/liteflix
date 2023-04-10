/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { FC, useContext, useState } from 'react';
import { VscAdd } from 'react-icons/vsc';
import { HiMenuAlt3 } from 'react-icons/hi';
import { BsBell } from 'react-icons/bs';
import { IoMdClose } from 'react-icons/io';
import {
  HeaderContainer, Left, Logo, Right,
} from './styles';
import Dropdown from '../dropdown';
import { LiteFlixContext } from '@/context';

const Header: FC = () => {
  const { handleModal } = useContext( LiteFlixContext );

  const [showClose, setShowClose] = useState<boolean>( false );
  const [showOptionsModal, setShowOptionsModal] = useState<boolean>( false );

  const showCloseButton = () => {
    setShowClose( !showClose );
    setShowOptionsModal( !showOptionsModal );
  };

  const addMovie = ( e: any ) => {
    e.preventDefault();
    handleModal();
  };

  return (
    <HeaderContainer>
      <Left>
        <Logo>
          Lite
          {' '}
          <span> flix </span>
        </Logo>
        <p onClick={ addMovie }>
          <VscAdd />
          Agregar película
        </p>
      </Left>

      <Right>
        {showOptionsModal && (
          <IoMdClose
            size={ 35 }
            onClick={ () => setShowOptionsModal( !showOptionsModal ) }
            className="closeButton show"
          />
        )}
        <HiMenuAlt3 size={ 35 } onClick={ showCloseButton } />
        <BsBell size={ 35 } />
        <img src="/images/user.jpg" alt="avatar" />
      </Right>

      {showOptionsModal && <Dropdown />}
    </HeaderContainer>
  );
};

export default Header;
