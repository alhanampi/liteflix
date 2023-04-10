/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { FC, useContext } from 'react';
import { VscAdd } from 'react-icons/vsc';
import { DropdownContainer } from './styles';
import { LiteFlixContext } from '@/context';

const Dropdown: FC = () => {
  const { handleModal } = useContext( LiteFlixContext );

  const addMovie = ( e: any ) => {
    e.preventDefault();
    handleModal();
  };

  const handleSectionClick = ( id: string ): void => {
    const sectionId = document.getElementById( id );
    if ( sectionId ) {
      window.scrollTo( { top: sectionId.offsetTop, behavior: 'smooth' } );
    }
  };

  return (
    <DropdownContainer>
      <ul>
        <li>Inicio</li>
        <li>Series</li>
        <li>Películas</li>
        <li>Agregadas recientemente</li>
        <li>populares</li>
        {/* cambiar a a o button */}
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
          <VscAdd size={ 16 } />
          Agregar película
        </li>
        <li>Cerrar sesión</li>
      </ul>
    </DropdownContainer>
  );
};

export default Dropdown;
