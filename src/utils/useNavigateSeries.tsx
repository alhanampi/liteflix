import { useRouter } from 'next/router';
import { useCallback } from 'react';

export const useNavigateSeries = () => {
  const router = useRouter();

  const navigateSeries = useCallback( ( id: number ) => {
    router.push( {
      pathname: '/series-details/',
      query: { id },
    } );
  }, [router] );

  return navigateSeries;
};
