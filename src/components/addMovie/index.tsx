/* eslint-disable consistent-return */
/* eslint-disable react/no-children-prop */
/* eslint-disable no-shadow */
import {
  FC, useEffect, useState, useContext,
} from 'react';
import { AiOutlinePaperClip } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';
import { FileUploader } from 'react-drag-drop-files';
import Button from '../button';
import { AddModalContainer, ButtonContainer } from './styles';
import ProgressBar from '../progressBar';
import { LiteFlixContext } from '@/context';
import { IMovie } from '@/interfaces';

const fileTypes = ['JPG', 'PNG', 'GIF'];

const AddMovieModal: FC = () => {
  const { handleModal } = useContext( LiteFlixContext );

  const [showAdd, setshowAdd] = useState<boolean>( true );
  const [progress, setProgress] = useState<number>( 0 );
  const [file, setFile] = useState<File | null>( null );
  const [error, setError] = useState<boolean>( false );
  const [title, setTitle] = useState<string>( '' );
  const [fileName, setFileName] = useState<string>( '' );
  const [movies, setMovies] = useState<IMovie[]>( [] );

  const upload = () => {
    setshowAdd( false );
    if ( file ) {
      const reader = new FileReader();
      reader.onload = async () => {
        try {
          setMovies( ( prevMovies ) => [
            ...prevMovies,
            { title, file: reader.result },
          ] );
          localStorage.setItem( 'movies', JSON.stringify( movies ) );
        } catch ( err ) {
          console.error( err );
          setError( true );
        }
      };
      reader.readAsDataURL( file );
    }
    setTitle( '' );
    setFile( null );
    setFileName( '' );
  };

  const handleFile = ( file: File ) => {
    setFile( file );
    setFileName( file.name );
  };

  const handleReset = ( e: Event ) => {
    e.preventDefault();
    setshowAdd( true );
    setProgress( 0 );
    setFile( null );
    setError( false );
    setTitle( '' );
    setFileName( '' );
  };

  useEffect( () => {
    const storedMovies = localStorage.getItem( 'movies' );
    if ( storedMovies ) {
      setMovies( JSON.parse( storedMovies ) );
    }
  }, [] );

  useEffect( () => {
    localStorage.setItem( 'movies', JSON.stringify( movies ) );
  }, [movies] );

  useEffect( () => {
    if ( !showAdd ) {
      const interval = setInterval( () => {
        if ( progress < 100 ) {
          setProgress( progress + 1 );
        } else {
          clearInterval( interval );
        }
      }, Math.random() * 100 );
      return () => clearInterval( interval );
    }
  }, [showAdd, progress] );

  const cancelUpload = () => {
    const storedMovies = localStorage.getItem( 'movies' );
    if ( storedMovies ) {
      const moviesArray = JSON.parse( storedMovies );
      moviesArray.pop();
      localStorage.setItem( 'movies', JSON.stringify( moviesArray ) );
      setMovies( moviesArray );
      setshowAdd( !showAdd );
    }
  };

  return (
    <AddModalContainer>
      <IoMdClose size={ 25 } className="close" onClick={ handleModal } />
      <h2>Agregar película</h2>

      {showAdd ? (
        <>
          <button className="btn" type="button">
            <FileUploader
              handleChange={ handleFile }
              name="file"
              types={ fileTypes }
              maxSize={ 2 }
              children={ (
                <div className="uploaderContainer">
                  <AiOutlinePaperClip className="clip" />
                  <span className="longText">Agregá un archivo o arrastralo y soltalo aquí</span>
                  <span className="shortText">Agregá un archivo</span>
                </div>
              ) }
            />
          </button>
          <label htmlFor="inputTitle">
            <input
              type="text"
              id="inputTitle"
              placeholder="título"
              onChange={ ( e: React.ChangeEvent<HTMLInputElement> ) => setTitle( e.target.value ) }
              onKeyDown={ ( e: React.KeyboardEvent<HTMLInputElement> ) => {
                if ( e.key === 'Enter' ) {
                  upload();
                }
              } }
              value={ title }
            />
          </label>
        </>
      ) : (
        <ProgressBar
          completed={ progress }
          color={ error ? 'var(--error-red)' : 'var(--primary-aqua)' }
          cancelUpload={ cancelUpload }
        />
      )}
      <div>
        {fileName && <p>{fileName}</p>}

        <ButtonContainer>
          {progress !== 100 && (
            <>
              <Button
                text="Subir película"
                variation={ false }
                onClick={ upload }
                disabled={ !!( title.trim() === '' || file === null ) }
              />
              <Button
                text="Salir"
                classN="closeButton"
                onClick={ handleModal }
                variation
              />
            </>
          )}
          {progress === 100 && (
          <>
            <Button
              text="Subir otra"
              variation={ false }
              onClick={ handleReset }
              classN="smallBtn"
            />
            <Button
              text="Ir al home"
              variation={ false }
              onClick={ handleModal }
              classN="smallBtn"
            />
          </>
          )}
        </ButtonContainer>
      </div>
    </AddModalContainer>
  );
};

export default AddMovieModal;
