import './App.css'
import {Route, Routes} from "react-router-dom";
import Welcome from "./pages/Welcome.jsx";
import Home from "./pages/Home.jsx";

function App() {

  return (
    <>
        <Routes>
            <Route  path="/" element={<Home />}/>
            <Route  path="/welcome" element={<Welcome />}/>
        </Routes>

    </>
  )
}

export default App
