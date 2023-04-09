import { FC, useEffect, useState } from "react";
import { AddModalContainer } from "./styles";
import Button from "../button";
import { AiOutlinePaperClip } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { FileUploader } from "react-drag-drop-files";
import ProgressBar from "../progressBar";

const fileTypes = ["JPG", "PNG", "GIF"];

interface Movie {
  title: string;
  file: File | null | any;
}

const AddMovieModal: FC = () => {
  const [showAdd, setshowAdd] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [fileName, setFileName] = useState<string>("");
  const [movies, setMovies] = useState<Movie[]>([]);

  const upload = () => {
    setshowAdd(false);
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        try {
          setMovies((prevMovies) => [
            ...prevMovies,
            { title, file: reader.result },
          ]);
          localStorage.setItem("movies", JSON.stringify(movies));
        } catch (err) {
          console.error(err);
          setError(true);
        }
      };
      reader.readAsDataURL(file);
    }
    setTitle("");
    setFile(null);
    setFileName("");
  };

  const handleFile = (file: File) => {
    setFile(file);
    setFileName(file.name);
  };

  const handleReset = (e: Event) => {
    e.preventDefault();
    setshowAdd(true);
    setProgress(0);
    setFile(null);
    setError(false);
    setTitle("");
    setFileName("");
  };

  useEffect(() => {
    const storedMovies = localStorage.getItem("movies");
    if (storedMovies) {
      setMovies(JSON.parse(storedMovies));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);

  useEffect(() => {
    if (!showAdd) {
      const interval = setInterval(() => {
        if (progress < 100) {
          setProgress(progress + 1);
        } else {
          clearInterval(interval);
        }
      }, Math.random() * 100);
      return () => clearInterval(interval);
    }
  }, [showAdd, progress]);

  return (
    <AddModalContainer>
      <IoMdClose size={25} className="close" />
      <h2>Agregar película</h2>

      {showAdd ? (
        <>
          <button className="btn">
            <FileUploader
              handleChange={handleFile}
              name="file"
              types={fileTypes}
              maxSize={2}
              children={
                <>
                  <AiOutlinePaperClip className="clip" />
                  <span>Agregá un archivo o arrastralo y soltalo aquí</span>
                </>
              }
            />
          </button>
          <label htmlFor="inputTitle">
            <input
              type="text"
              id="inputTitle"
              placeholder="título"
              onChange={(e: any) => setTitle(e.target.value)}
              value={title}
            />
          </label>
        </>
      ) : (
        <ProgressBar
          completed={progress}
          color={error ? "var(--error-red)" : "var(--primary-aqua)"}
        />
      )}
      <div>
        {fileName && <p>{fileName}</p>}

        {progress !== 100 && (
          <Button
            text="Subir película"
            variation={false}
            onClick={upload}
            disabled={title.trim() === "" || file === null ? true : false}
          />
        )}
        {progress === 100 && (
          <>
            <Button
              text="Subir otra"
              variation={false}
              onClick={handleReset}
              classN="smallBtn"
            />
            <Button
              text="Ir al home"
              variation={false}
              onClick={console.log("home")}
              classN="smallBtn"
            />
          </>
        )}
      </div>
    </AddModalContainer>
  );
};

export default AddMovieModal;
