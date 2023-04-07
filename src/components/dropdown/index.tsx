import React from "react";
import { DropdownContainer } from "./styles";
import { VscAdd } from "react-icons/vsc";

const Dropdown = () => {
  return (
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
          {" "}
          <VscAdd size={16} /> Agregar película
        </li>
        <li>Cerrar sesión</li>
      </ul>
    </DropdownContainer>
  );
};

export default Dropdown;
