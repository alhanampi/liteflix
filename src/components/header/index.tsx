/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { FC, useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { VscAdd } from 'react-icons/vsc';
import { HiMenuAlt3 } from 'react-icons/hi';
import { BsBell } from 'react-icons/bs';
import { IoMdClose } from 'react-icons/io';
import {
  HeaderContainer, Left, Logo, Right, ReturnText,
} from './styles';
import Dropdown from '../dropdown';
import { LiteFlixContext } from '@/context';

export interface IHeader {
  mainPage?: boolean;
}

const Header: FC = ( { mainPage } ) => {
  const router = useRouter();
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
        {mainPage && (
          <p onClick={ addMovie }>
            <VscAdd />
            Agregar película
          </p>
        )}
      </Left>

      <Right>
        {showOptionsModal && (
          <IoMdClose
            size={ 35 }
            onClick={ () => setShowOptionsModal( !showOptionsModal ) }
            className="closeButton show"
          />
        )}
        {mainPage ? (
          <>
            <HiMenuAlt3 size={ 35 } onClick={ showCloseButton } />
            <BsBell size={ 35 } />
          </>
        ) : (
          <ReturnText onClick={ () => router.back() }>Volver al home!</ReturnText>
        )}

        <img src="/images/user.jpg" alt="avatar" />
      </Right>

      {showOptionsModal && <Dropdown />}
    </HeaderContainer>
  );
};

export default Header;
