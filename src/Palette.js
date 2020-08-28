import React, { useState } from "react";
import {Route, Switch} from 'react-router-dom';
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import "./Palette.css";

function Palette(props) {
  const [levels, leveling] = useState(500);
  function changeLevel(change) {
    return leveling(change);
  }

  const colorBoxes = props.palette.colors[levels].map((color) => {
    return <ColorBox background={color.hex} name={color.name} />;
  });

  function changeFormat(e) {
    return e.target.value;
  }

  return (
    <div className="Palette">
      <Navbar
        handleChange={changeFormat}
        level={levels}
        changeLevel={changeLevel}
      />
      <div className="Palette-colors">{colorBoxes}</div>
      <footer className="Palette-footer">
        {props.palette.paletteName}
        <span className="emoji"> {props.palette.emoji}</span>
      </footer>
    </div>
  );
}

export default Palette;
