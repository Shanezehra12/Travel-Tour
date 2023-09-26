/* import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";

export default function App() {
  return (
    <div className="App">
      <h1>Your Code Here</h1>
    </div>
  );
} */

import "./styles.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./routes/Homepage";
import Aboutpage from "./routes/Aboutpage";
import Servicepage from "./routes/Servicepage";
import Contactpage from "./routes/Contactpage";
import SignUppage from "./routes/SignUppage";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/about" element={<Aboutpage/>}/>
        <Route path="/service" element={<Servicepage/>}/>
        <Route path="/contact" element={<Contactpage/>}/>
        <Route path="/signup" element={<SignUppage/>}/>
      </Routes>
    </div>
  );
};

export default App;
