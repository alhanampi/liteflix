import { FC } from 'react';
import { VscAdd } from 'react-icons/vsc';
import { DropdownContainer } from './styles';

const Dropdown: FC = () => (
  <DropdownContainer>
    <ul>
      <li>Inicio</li>
      <li>Series</li>
      <li>Películas</li>
      <li>Agregadas recientemente</li>
      <li>populares</li>
      <li>mis películas</li>
      <li>mi lista</li>
      <li className="add">
        <VscAdd size={ 16 } />
        Agregar película
      </li>
      <li>Cerrar sesión</li>
    </ul>
  </DropdownContainer>
);

export default Dropdown;
