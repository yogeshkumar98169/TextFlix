import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm";
function App() {
  const [mode, setMode] = useState('light')  //!Whether dark mode is enabled or not
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
    }
    else {
      setMode('light');
    }
  }
  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
      <TextForm heading="Enter the Text"></TextForm>
      <About></About>
    </>
  );
}

export default App;
