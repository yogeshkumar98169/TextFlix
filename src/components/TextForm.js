import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Text converted to UpperCase")
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleLoClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Text converted to LowerCase")
  };
  const clearData = () => {
    setText("");
    props.showAlert('Clear Text')
  };
  const handleCopy = () => {
    let text = document.getElementById('myBox');
    text.select();
    document.getSelection().removeAllRanges();
    navigator.clipboard.writeText(text.value);
    props.showAlert('Copied')
  }
  return (
    <>
      <div className="container-sm">
        <div className="my-3">
          <h1>{props.heading}</h1>
          <textarea
            value={text}
            className={`form-control bg-${props.mode === 'light' ? 'light' : 'dark'} text-${props.mode === 'light' ? 'dark' : 'light'} `}
            id="myBox"
            rows="8"
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button disabled={text.length === 0}
          className={`bg-${props.mode === 'light' ? 'primary' : 'secondary'} text-white border-0 rounded mx-2 my-2 p-2`}
          onClick={handleUpClick}
        >
          Convert To UpperCase
        </button>
        <button disabled={text.length === 0}
          className={`bg-${props.mode === 'light' ? 'primary' : 'secondary'} text-white border-0 rounded mx-2 my-2 p-2`}
          onClick={handleLoClick}
        >
          Convert To LowerCase
        </button>
        <button disabled={text.length === 0}
          className={`bg-${props.mode === 'light' ? 'primary' : 'secondary'} text-white border-0 rounded mx-2 my-2 p-2`}
          onClick={clearData}
        >
          Clear
        </button>
        <button disabled={text.length === 0}
          className={`bg-${props.mode === 'light' ? 'primary' : 'secondary'} text-white border-0 rounded mx-2 my-2 p-2`}
          onClick={handleCopy}
        >
          Copy
        </button>
      </div>
      <div className="container">
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").filter((element) => { return element.length !== 0 }).length} words, {text.length} characters
        </p>
        <p>You can read in : {0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} minutes</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Enter text......"}</p>
      </div>
    </>
  );
}
