import styled from "styled-components";

export const DropdownContainer = styled.div`
  position: absolute;
  top: 5em;
  right: 0em;
  background-color: var(--primary-grey);
  height: 55vh;
  width: 25%;
  z-index: 15;
  padding: 2% 4%;

  .closeButton {
    margin-top: 3%;
    cursor: pointer;
    z-index: 45;
    position: relative;
    :hover {
      transition: 0.3s ease;
      background-color: var(--hover-white);
    }
  }

  ul {
    padding: 0;
  }

  li {
    font-weight: 300;
    letter-spacing: 5px;
    font-size: 1.3em;
    list-style-type: none;
    padding: 3% 0;
    cursor: pointer;
    :hover {
      background-color: var(--hover-white);
      transition: 0.2s ease;
    }
  }
  .add {
    margin: 9% 0;
    font-weight: 400;
  }
`;
