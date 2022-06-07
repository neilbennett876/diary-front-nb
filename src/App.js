import "./App.css";
import CreateProfile from "./components/CreateProfile";
import HomeDash from "./components/HomeDash";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddRecord from "./components/AddRecord";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeDash />} />
        <Route path="/create" element={<CreateProfile />} />
        <Route path="/add" element={<AddRecord />} />
      </Routes>
    </>
  );
}

export default App;
