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
    <div className="md:top- fixed top-16 left-0 flex w-screen items-center justify-center text-secondary md:top-28">
      <div className="w-full min-w-[300px] max-w-screen-md overflow-hidden rounded-xl">
        {/* Div for fix rounded backdrop-filter */}
        <div className="w-full max-w-screen-md backdrop-blur">
          {/* Div for backdrop-filter */}
          <div className="flex flex-col bg-translucid py-5">
            {/* Div for bg color */}
            <div className="flex gap-4 px-10">
              <i className="ri-search-line text-white"></i>
              <input
                ref={searchBar}
                placeholder="Procurar comando"
                className="mb-4 w-full bg-transparent text-white focus:outline-none"
              ></input>
            </div>
            <div className="max-h-[65vh] overflow-y-auto">
              {commands.map((command, index) => {
                return (
                  <div
                    key={index}
                    id={index}
                    onMouseEnter={handleMouseEnter}
                    onClick={command.method}
                    className={`flex cursor-pointer gap-4 px-10 py-4 text-white ${
                      currentCommand === index ? "bg-black" : ""
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
    </div>
  );
}
