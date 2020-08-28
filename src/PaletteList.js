import React from "react";
import { Link } from "react-router-dom";

function PaletteList(props) {
  return (
    <div>
      <h1>React Colors</h1>
      {props.palettes.map((palette) => (
        <Link to={`/palette/${palette.id}`}>
        <p>{palette.paletteName}</p></Link>
      ))}
      ;
    </div>
  );
}

export default PaletteList;
