export const handleScroll = ( id: string ): void => {
  const sectionId = document.getElementById( id );
  if ( sectionId ) {
    window.scrollTo( { top: sectionId.offsetTop, behavior: 'smooth' } );
  }
};
