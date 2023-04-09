import { createContext, useState } from "react";

const LiteFlixContext = createContext({});

function LiteflixApp() {
  const [state, setState] = useState({/* initial state */});

  return (
    <LiteFlixContext.Provider value={{ state, setState }}>
      {/* Your app components */}
    </LiteFlixContext.Provider>
  );
}