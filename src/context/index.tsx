import { createContext, useState } from 'react';

interface ILiteFlixContext {
  showModal: boolean;
  showDropdownCont: boolean;
  showPopularCont: boolean;
  showCloseCont: boolean;
  showBarsCont: boolean;
  handleModal: () => void;
  handleDropdown: ( value: any ) => void;
  handlePopular: ( value: any ) => void;
  handleClose: ( value: any ) => void;
  handleBars: ( value: any ) => void;
}

export const LiteFlixContext = createContext<ILiteFlixContext>( {
  showModal: false,
  showDropdownCont: false,
  showPopularCont: false,
  showCloseCont: false,
  showBarsCont: true,
  handleModal: () => {},
  handleDropdown: () => false,
  handlePopular: () => false,
  handleClose: () => false,
  handleBars: () => true,
} );

export const LiteFlixProvider = ( {
  children,
}: {
  children: React.ReactNode;
} ) => {
  const [showModal, setShowModal] = useState<boolean>( false );
  //  these are in the context as they need to be called in more places than one.
  // This will be used to hide the dropdown when scrolling or adding films
  const [showDropdownCont, setshowDropdownCont] = useState<boolean>( false );
  const [showPopularCont, setshowPopularCont] = useState<boolean>( false );
  const [showCloseCont, setShowCloseCont] = useState<boolean>( false );
  const [showBarsCont, setShowBarsCont] = useState<boolean>( false );

  const handleModal = () => {
    setShowModal( !showModal );
  };

  const handleDropdown = ( value: boolean ) => {
    setshowDropdownCont( value );
  };

  const handlePopular = () => {
    setshowPopularCont( !showPopularCont );
  };

  const handleClose = ( value: boolean ) => {
    setShowCloseCont( value );
  };

  const handleBars = ( value: boolean ) => {
    setShowBarsCont( value );
  };

  return (
    <LiteFlixContext.Provider
      value={ {
        showModal,
        showDropdownCont,
        showPopularCont,
        showCloseCont,
        showBarsCont,
        handleModal,
        handleDropdown,
        handlePopular,
        handleClose,
        handleBars,
      } }
    >
      {children}
    </LiteFlixContext.Provider>
  );
};
