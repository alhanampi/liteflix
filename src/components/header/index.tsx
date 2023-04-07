import { FC, useState } from "react";
import { HeaderContainer, Left, Logo, Right } from "./styles";
import { VscAdd } from "react-icons/vsc";
import { HiMenuAlt3 } from "react-icons/hi";
import { BsBell } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import Dropdown from "../dropdown";

const Header: FC = ({ onClose }: any) => {
  const [showClose, setShowClose] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const showCloseButton = () => {
    setShowClose(!showClose);
    setShowModal(!showModal);
  };

  const addMovie = (e: any) => {
    e.preventDefault();
    console.log("click");
  };

  return (
    <HeaderContainer>
      <Left>
        <Logo>
          Lite <span> flix </span>
        </Logo>
        <p onClick={addMovie}>
          <VscAdd />
          Agregar película
        </p>
      </Left>

      <Right>
        <IoMdClose
          size={25}
          onClick={onClose}
          className={`closeButton ${showClose ? "show" : ""}`}
        />
        <HiMenuAlt3 size={25} onClick={showCloseButton} />
        <BsBell size={25} />
        <img src="/images/user.jpg" />
      </Right>

      {/* ver donde poner esto */}
      {showModal && <Dropdown />}
    </HeaderContainer>
  );
};

export default Header;
