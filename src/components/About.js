import React, { useState } from "react";

export default function About() {
  const [myStyle, setMyStyle] = useState(
    {
      color: 'white',
      backgroundColor: 'rgb(50, 46, 46)'
    })
  const [buttonText, setButtonText] = useState("Enable Dark Mode")
  const toggleStyle = () => {
    if (myStyle.color === "white" && myStyle.backgroundColor === "rgb(50, 46, 46)") {
      setMyStyle({
        color: 'rgb(50, 46, 46)',
        backgroundColor: 'white'
      })
      setButtonText('Enable Dark Mode')
    }
    else {
      setMyStyle({
        color: 'white',
        backgroundColor: 'rgb(50, 46, 46)'
      })
      setButtonText("Enable Light Mode")
    }
  }
  return (
    <div>
      <div className="container-sm my-3" style={myStyle}>
        <h1>About Us</h1>
        <p>This is the content we need to show you about us</p>
      </div>
      <div className="container-sm my-2">
        <button className="btn btn-primary" onClick={toggleStyle}>{buttonText}</button>
      </div>
    </div>
  );
}
