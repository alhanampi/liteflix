import styled from "styled-components";

export const DropdownContainer = styled.div`
  position: absolute;
  top: 0em;
  right: 0em;
  background-color: var(--primary-grey);
  height: 50%;
  width: 25%;
  z-index: 25;
  padding: 6% 4%;

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
