/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { FC, useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { VscAdd } from 'react-icons/vsc';
import { HiMenuAlt3 } from 'react-icons/hi';
import { BsBell } from 'react-icons/bs';
import { IoMdClose, IoMdHome } from 'react-icons/io';
import Link from 'next/link';
import {
  HeaderContainer, Left, Logo, Right, ReturnText,
} from './styles';
import Dropdown from '../dropdown';
import { LiteFlixContext } from '@/context';
import { IHeader } from '@/interfaces';

const Header: FC<IHeader> = ( { mainPage } ) => {
  const router = useRouter();
  const {
    handleModal, handleDropdown, showDropdownCont, showPopularCont,
  } = useContext( LiteFlixContext );

  const [showClose, setShowClose] = useState<boolean>( false );
  const [showOptionsModal, setShowOptionsModal] = useState<boolean>( false );

  const showCloseButton = () => {
    setShowClose( !showClose );
    setShowOptionsModal( !showOptionsModal );
    handleDropdown( true );
  };

  const addMovie = ( e: { preventDefault: () => void } ) => {
    e.preventDefault();
    handleModal();
    handleDropdown( false );
    if ( showDropdownCont ) {
      console.log( 'drop:', showDropdownCont );
      handleDropdown( false );
      setShowClose( false );
      console.log( 'showDropdownCont:', showDropdownCont, 'showPopularCont', showPopularCont );
    }
  };

  return (
    <HeaderContainer>
      <div className="desktop">
        <Left>
          <Link href="/">
            <Logo>
              Lite
              <span> flix </span>
            </Logo>
          </Link>
          {mainPage && (
            <p onClick={ addMovie }>
              <VscAdd />
              Agregar película
            </p>
          )}
        </Left>

        <Right>
          {showOptionsModal && showDropdownCont && (
            <IoMdClose
              size={ 35 }
              onClick={ () => setShowOptionsModal( !showOptionsModal ) }
              className="closeButton show"
            />
          )}
          {mainPage ? (
            <>
              <HiMenuAlt3
                size={ 35 }
                onClick={ showCloseButton }
                className={ `"iconHeader" ${showOptionsModal && 'hide'}` }
              />
              <BsBell size={ 35 } className="iconHeader" />
            </>
          ) : (
            <ReturnText onClick={ () => router.back() }>
              <IoMdHome />
            </ReturnText>
          )}

          <img src="/images/user.jpg" alt="avatar" />
        </Right>

        {showOptionsModal && showDropdownCont && <Dropdown />}
      </div>
      <div className="mobile">
        <Right>
          {mainPage ? (
            <div className="options">
              <HiMenuAlt3
                size={ 35 }
                onClick={ showCloseButton }
                className={ showOptionsModal ? 'dropButton' : '' }
              />
              {showOptionsModal && (
                <IoMdClose
                  size={ 35 }
                  onClick={ () => setShowOptionsModal( !showOptionsModal ) }
                  className="closeButton show"
                />
              )}
            </div>
          ) : (
            <ReturnText onClick={ () => router.back() }>
              <IoMdHome />
            </ReturnText>
          )}
          <Link href="/">
            <Logo>
              Lite
              <span> flix </span>
            </Logo>
          </Link>
          <img src="/images/user.jpg" alt="avatar" />
          {showOptionsModal && <Dropdown />}
        </Right>
      </div>
    </HeaderContainer>
  );
};

export default Header;
