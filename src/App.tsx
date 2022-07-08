import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./views/Home";
import GamePage from "./views/GamePage";
import RecordPage from "./views/RecordPage"

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
    return (
        
        <BrowserRouter>
            
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add" element={<GamePage />} />
                <Route path="/records" element={<RecordPage />} />
            </Routes>
            
        </BrowserRouter>
       
    );
}

export default App;
