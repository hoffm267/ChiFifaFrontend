import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./views/Home";

import GamePage from "./views/GamePage";

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
                <Route path="/records" element={<Test2 />} />
            </Routes>
            
        </BrowserRouter>
       
    );
}

const Test2 = () => (
    <div className="pt-20 pb-5 px-5 flex flex-row justify-center  h-screen bg-red  ">
    <div className="flex py-10 px-10 h-full w-full rounded-2xl bg-bone justify-center items-center">
        <div className=" h-full w-full py-20 px-20 rounded-2xl bg-jet ">
            <div className="h-1/3 w-1/3 rounded-2xl bg-blackCoral"></div>
        </div>
    </div>
</div>
);
export default App;
