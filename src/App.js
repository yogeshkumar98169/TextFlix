import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
function App() {
  const [mode, setMode] = useState('light');  //!Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message) => {
    setAlert({
      msg: message
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);

  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(67, 64, 64)';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled");
      document.title = "TextUtils Home| Dark Mode";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode has been enabled");
      document.title = "TextUtils Home| Light Mode"
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert}></Alert>
        <div className="container-sm my-2">
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <TextForm showAlert={showAlert} heading="Enter the Text" mode={mode} />
            </Route>
          </Switch>

        </div>
      </Router>
    </>
  );
}

export default App;
