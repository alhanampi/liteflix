import styled from 'styled-components';

export const NotFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3em;
  
  h3 {
    font-size: 2em;
  }

  img {
    width: 40%;
    padding: 4em 0;
  }
`;

export const DetailContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5em;
`;

export const Left = styled.div`
padding: 0 4em;
`;

export const Right = styled.div`
display: flex;
flex-direction: column;
text-align: end;
padding: 0 4em;

h2 {
  font-size: 5em;
  color: var(--primary-aqua);
}

p {
  letter-spacing: 0.1em;
  font-size: 1.2em;
}
`;

export const Similar = styled.div`
padding: 1em 3em;;
h2 {
  font-size: 2em;
  color: var(--primary-aqua);
}`;
