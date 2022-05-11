import { useState, useEffect } from "react";

export default function CommandLine() {
  const [showCommandLine, setShowCommandLine] = useState();

  useEffect(() => {
    const handleUserKeyPress = (event) => {
      showCommandLine ? setShowCommandLine(false) : setShowCommandLine(true);
    };

    window.addEventListener("keydown", handleUserKeyPress);

    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  }, [showCommandLine]);

  return <>{showCommandLine ? <h1></h1> : <></>}</>;
}
