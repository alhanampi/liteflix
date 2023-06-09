import { FC, useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { VscAdd } from 'react-icons/vsc';
import { HiMenuAlt3 } from 'react-icons/hi';
import { BsBell } from 'react-icons/bs';
import { IoMdClose, IoMdHome } from 'react-icons/io';
import Link from 'next/link';
import { LiteFlixContext } from '@/context';
import { IHeader } from '@/interfaces';
import {
  HeaderContainer, Left, Logo, Right, ReturnText,
} from './styles';
import Dropdown from '../dropdown';

const Header: FC<IHeader> = ( { mainPage } ) => {
  const router = useRouter();
  const { handleModal, handleDropdown, showDropdownCont } = useContext( LiteFlixContext );

  const [showClose, setShowClose] = useState<boolean>( false );

  const showCloseButton = () => {
    setShowClose( !showClose );
    handleDropdown( true );
  };

  const addMovie = () => {
    handleModal();
    handleDropdown( false );
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
          {showDropdownCont && (
            <IoMdClose
              size={ 35 }
              onClick={ () => handleDropdown( false ) }
              className="closeButton show"
            />
          )}
          {mainPage ? (
            <>
              <HiMenuAlt3
                size={ 35 }
                onClick={ showCloseButton }
                className={ `"iconHeader" ${showDropdownCont && 'hide'}` }
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

        {showDropdownCont && <Dropdown />}
      </div>
      <div className="mobile">
        <Right>
          {mainPage ? (
            <div className="options">
              <HiMenuAlt3
                size={ 35 }
                onClick={ showCloseButton }
                className={ showDropdownCont ? 'dropButton' : '' }
              />
              {showDropdownCont && (
                <IoMdClose
                  size={ 35 }
                  onClick={ () => handleDropdown( false ) }
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
          {showDropdownCont && <Dropdown />}
        </Right>
      </div>
    </HeaderContainer>
  );
};

export default Header;
