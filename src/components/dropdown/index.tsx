import { FC, useContext } from 'react';
import { VscAdd } from 'react-icons/vsc';
import { LiteFlixContext } from '@/context';
import { DropdownContainer } from './styles';

const Dropdown: FC = () => {
  const { handleModal, handleClose } = useContext( LiteFlixContext );

  const addMovie = ( e: any ) => {
    e.preventDefault();
    handleModal();
    handleClose( false );
  };

  const handleSectionClick = ( id: string ): void => {
    const sectionId = document.getElementById( id );
    if ( sectionId ) {
      window.scrollTo( { top: sectionId.offsetTop, behavior: 'smooth' } );
    }
  };

  return (
    <>
      <DropdownContainer>
        <ul>
          <li>Inicio</li>
          <li
            onClick={ (): void => handleSectionClick( 'series' ) }
            onKeyDown={ ( event ): void => {
              if ( event.key === 'Enter' || event.key === ' ' ) {
                handleSectionClick( 'series' );
              }
            } }
          >
            Series
          </li>
          <li>Películas</li>
          <li
            onClick={ (): void => handleSectionClick( 'latest' ) }
            onKeyDown={ ( event ): void => {
              if ( event.key === 'Enter' || event.key === ' ' ) {
                handleSectionClick( 'latest' );
              }
            } }
          >
            Agregadas recientemente
          </li>
          <li
            onClick={ (): void => handleSectionClick( 'populares' ) }
            onKeyDown={ ( event ): void => {
              if ( event.key === 'Enter' || event.key === ' ' ) {
                handleSectionClick( 'populares' );
              }
            } }
          >
            populares
          </li>
          <li
            onClick={ () => handleSectionClick( 'misPeliculas' ) }
            onKeyDown={ ( event ) => {
              if ( event.key === 'Enter' || event.key === ' ' ) {
                handleSectionClick( 'misPeliculas' );
              }
            } }
          >
            mis películas
          </li>
          <li>mi lista</li>
          <li className="add" onClick={ addMovie }>
            <VscAdd className="icon" />
            &nbsp;
            <span>Agregar película</span>
          </li>
          <li>Cerrar sesión</li>
        </ul>
      </DropdownContainer>
    </>
  );
};

export default Dropdown;
