import React from "react";

const PlatformLogo = ({ logoName }) => {
  const platformLogos = {
    PC: "<img  src='src/images/logos/windows.svg' alt='' class='logo mx-2' >",
    Playstation:
      "<img  src='src/images/logos/playstation.svg' alt='' class='logo mx-2' >",
    Xbox: "<img  src='src/images/logos/xbox.svg' alt='' class='logo mx-2' >",
    iOS: "<img  src='src/images/logos/mobile.svg' alt='' class='logo mx-2' >",
    Android:
      "<img  src='src/images/logos/mobile.svg' alt='' class='logo mx-2' >",
    "Apple Macintosh":
      "<img  src='src/images/logos/apple.svg' alt='' class='logo mx-2' >",
    Linux: "<img  src='src/images/logos/linux.svg' alt='' class='logo mx-2' >",

    Nintendo:
      "<img  src='src/images/logos/nintendo.png' alt='' class='logo mx-2' >",

    Atari: "",
    "Commodore / Amiga": "",
    SEGA: "",
    "3DO": "",
    "Neo Geo": "",
    Web:
      "<img  src='src/images/logos/web.svg' alt='' class='logo mx-2' style={{fill:'white'}}>",
  };

  return <div className="PlatformLogo">{platformLogos[logoName]}</div>;
};

export default PlatformLogo;
