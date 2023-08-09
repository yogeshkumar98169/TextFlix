import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    setText(text.toUpperCase());
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleLoClick = () => {
    setText(text.toLowerCase());
  };
  const clearData = () => {
    setText("");
  };
  const handleCopy = () => {
    let text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  return (
    <>
      <div className="container-sm">
        <div className="my-3">
          <h1>{props.heading}</h1>
          <textarea
            value={text}
            className="form-control"
            id="myBox"
            rows="8"
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button
          className="bg-primary text-white border-0 rounded mx-2 my-2 p-2"
          onClick={handleUpClick}
        >
          Convert To UpperCase
        </button>
        <button
          className="bg-primary text-white border-0 rounded mx-2 my-2 p-2"
          onClick={handleLoClick}
        >
          Convert To LowerCase
        </button>
        <button
          className="bg-primary text-white border-0 rounded mx-2 my-2 p-2"
          onClick={clearData}
        >
          Clear
        </button>
        <button
          className="bg-primary text-white border-0 rounded mx-2 my-2 p-2"
          onClick={handleCopy}
        >
          Copy
        </button>
      </div>
      <div className="container">
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} words, {text.length} characters
        </p>
        <p>You can read in : {0.008 * text.split(" ").length} minutes</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
