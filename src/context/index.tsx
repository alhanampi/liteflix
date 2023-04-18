/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useState } from 'react';

interface ILiteFlixContext {
  showModal: boolean;
  showDropdownCont: boolean;
  showPopularCont: boolean;
  handleModal: () => void;
  handleDropdown: ( value: any ) => void;
  handlePopular: ( value: any ) => void;
}

export const LiteFlixContext = createContext<ILiteFlixContext>( {
  showModal: false,
  showDropdownCont: false,
  showPopularCont: false,
  handleModal: () => {},
  handleDropdown: () => false,
  handlePopular: () => false,
} );

export const LiteFlixProvider = ( {
  children,
}: {
  children: React.ReactNode;
} ) => {
  const [showModal, setShowModal] = useState<boolean>( false );
  // dropdown and popular are in the context in case they need to be called in more places than one
  const [showDropdownCont, setshowDropdownCont] = useState<boolean>( false );
  const [showPopularCont, setshowPopularCont] = useState<boolean>( false );

  const handleModal = () => {
    setShowModal( !showModal );
  };

  const handleDropdown = ( value: boolean ) => {
    setshowDropdownCont( value );
  };

  const handlePopular = () => {
    setshowPopularCont( !showPopularCont );
  };

  return (
    <LiteFlixContext.Provider
      value={ {
        showModal,
        showDropdownCont,
        showPopularCont,
        handleModal,
        handleDropdown,
        handlePopular,
      } }
    >
      {children}
    </LiteFlixContext.Provider>
  );
};
