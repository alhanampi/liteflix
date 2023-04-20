import { useRouter } from 'next/router';
import { useCallback } from 'react';

export const useNavigate = () => {
  const router = useRouter();

  const navigate = useCallback( ( id: number ) => {
    router.push( {
      pathname: '/details/',
      query: { id },
    } );
  }, [router] );

  return navigate;
};
