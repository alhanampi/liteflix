// eslint-disable-next-line import/prefer-default-export
export const scrollToElement = ( id: string ) => {
  if ( typeof window !== 'undefined' ) {
    const element = document.getElementById( id );
    if ( element ) {
      window.scrollTo( {
        behavior: 'smooth',
        top: element.offsetTop,
      } );
    }
  }
};
