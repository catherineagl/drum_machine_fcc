import { useEffect, useState } from "react";

const audios = [
  {
    name: "Heater 1",
    link: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3",
    key: "Q",
  },
  {
    name: "Heater 2",
    link: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3",
    key: "W",
  },
  {
    name: "Heater 3",
    link: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3",
    key: "E",
  },
  {
    name: "Heater 4",
    link: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3",
    key: "A",
  },
  {
    name: "Clap",
    link: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3",
    key: "S",
  },
  {
    name: "Open-HH",
    link: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3",
    key: "D",
  },
  {
    name: "Kick-n-Hat",
    link: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3",
    key: "Z",
  },
  {
    name: "Kick",
    link: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3",
    key: "X",
  },
  {
    name: "Closed-HH",
    link: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3",
    key: "C",
  },
];

function App() {
  const [active, setActive] = useState("");

  const handleAudio = (id, name) => {
    const audioBtn = document.getElementById(id);
    setActive(name);
    audioBtn.play();
  };

  const handleKeyPress = (e) => {
    const key = e.key.toUpperCase();
    const findInAudios = audios.find(x=>x.key===key)
    if(findInAudios) {
      handleAudio(key, findInAudios.name);
    } 
    return;
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <div className="container" id="drum-machine">
      <div className="drum-container">
        <div id="display">{active}</div>
        <div className="pad-container">
          {audios.map((x) => (
            <div
              key={x.name}
              onClick={() => handleAudio(x.key, x.name)}
              id={x.name}
              className="drum-pad"
            >
              {x.key}
              <audio src={x.link} className="clip" id={x.key}></audio>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
