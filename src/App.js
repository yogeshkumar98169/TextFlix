import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
function App() {
  const [mode, setMode] = useState('light');  //!Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message) => {
    setAlert({
      msg: message
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);

  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(67, 64, 64)';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode has been enabled")
    }
  }
  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}></Alert>
      <TextForm showAlert={showAlert} heading="Enter the Text" mode={mode}></TextForm>
      <About></About>
    </>
  );
}

export default App;
