import React, { useState, Component } from "react";
import "./ColorBox.css";
import { CopyToClipboard } from "react-copy-to-clipboard";

function ColorBox(props) {
  const [copied, copy] = useState(false);

  function copying() {
    return copy(
      true,
      setTimeout(() => {
        {
          copy(false);
        }
      }, 1500)
    );
  }

  return (
    <CopyToClipboard text={props.background} onCopy={copying}>
      <div style={{ background: props.background }} className="ColorBox">
        <div
          style={{ background: props.background}}
          className={`copy-overlay ${copied && "show"}`}
        />
        <div className={`copy-msg ${copied && "show"}`}>
          <h1>Copied! </h1>
          
          <p>{props.background}</p>
        </div>
        <div className="copy-container">
          <div className="box-content">
            <span>{props.name}</span>
          </div>
          <button className="copy-button">Copy</button>
        </div>
        <span className="see-more">More</span>
      </div>
    </CopyToClipboard>
  );
}

export default ColorBox;
