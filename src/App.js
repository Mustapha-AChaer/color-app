import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch } from "react-router-dom";
import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";
import PaletteList from "./PaletteList";

function App() {
  function findPalette(id) {
    return seedColors.find((palette) => {
      return palette.id === id;
    });
  }
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => <PaletteList palettes={seedColors} />}
      />
      <Route
        exact
        path="/palette/:id"
        render={(props) => (
          <Palette
            palette={generatePalette(findPalette(props.match.params.id))}
          />
        )}
      />
    </Switch>
    // {/* <div>
    //   <Palette palette={generatePalette(seedColors[4])} />
    // </div> */}
  );
}

export default App;
