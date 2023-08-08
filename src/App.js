import "./App.css";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm";
function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" />
      <TextForm heading="Enter the Text"></TextForm>
    </>
  );
}

export default App;
