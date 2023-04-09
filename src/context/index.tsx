/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useState } from 'react';

interface ILiteFlixContext {
  showModal: boolean;
  handleModal: () => void;
}

export const LiteFlixContext = createContext<ILiteFlixContext>( {
  showModal: false,
  handleModal: () => {},
} );

export const LiteFlixProvider = ( { children }: { children: React.ReactNode } ) => {
  const [showModal, setShowModal] = useState<boolean>( false );
  const handleModal = () => {
    setShowModal( !showModal );
  };
  return (
    <LiteFlixContext.Provider value={ { showModal, handleModal } }>
      {children}
    </LiteFlixContext.Provider>
  );
};
