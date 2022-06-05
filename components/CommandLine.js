import { useState, useEffect, useRef } from "react";

export default function CommandLine(props) {
  const searchBar = useRef();
  const [currentCommand, setCurrentCommand] = useState(0);
  const [commands, setCommands] = useState(props.commands);

  function handleInput(e) {
    const filteredCommands = props.commands.filter((command) => {
      return command.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setCurrentCommand(0);
    setCommands(filteredCommands);
  }

  function handleMouseEnter(e) {
    setCurrentCommand(parseInt(e.currentTarget.id));
  }

  useEffect(() => {
    const searchBarInstance = searchBar.current;
    searchBarInstance.focus();
    searchBarInstance.addEventListener("input", handleInput);
    function handleKeydown(e) {
      if (e.key === "ArrowDown") {
        if (currentCommand === commands.length - 1) {
          setCurrentCommand(0);
        } else {
          setCurrentCommand((prevCurrentCommand) => prevCurrentCommand + 1);
        }
      } else if (e.key === "ArrowUp") {
        if (currentCommand === 0) {
          setCurrentCommand(commands.length - 1);
        } else {
          setCurrentCommand((prevCurrentCommand) => prevCurrentCommand - 1);
        }
      } else if (e.key === "Enter") {
        commands[currentCommand].method();
        props.setShowCommandLine(false);
      }
    }

    document.addEventListener("keydown", handleKeydown);

    return () => {
      document.removeEventListener("keydown", handleKeydown);
      searchBarInstance.removeEventListener("input", handleInput);
    };
  }, [currentCommand, commands]);

  return (
    <div className="fixed top-40 left-0 flex w-screen items-center justify-center text-secondary">
      <div className="w-full max-w-screen-md overflow-hidden rounded-xl">
        {/* Div for fix rounded backdrop-filter */}
        <div className="w-full max-w-screen-md backdrop-blur">
          {/* Div for backdrop-filter */}
          <div className="flex flex-col bg-translucid px-10 py-5">
            {/* Div for bg color */}
            <div className="flex gap-4">
              <i className="ri-search-line"></i>
              <input
                ref={searchBar}
                placeholder="Procurar comando"
                className="mb-4 w-full bg-transparent focus:outline-none"
              ></input>
            </div>
            {commands.map((command, index) => {
              return (
                <div
                  key={index}
                  id={index}
                  onMouseEnter={handleMouseEnter}
                  className={`flex gap-4 py-4 text-white ${
                    currentCommand === index ? "-mx-10 bg-black px-10" : ""
                  }`}
                >
                  <i className={command.icon}></i>
                  <h3>{command.name}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
