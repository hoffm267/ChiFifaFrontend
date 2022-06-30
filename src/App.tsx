import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";

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
                <Route path="/" element={<Default />} />
                <Route path="/add" element={<Test />} />
                <Route path="/records" element={<Test2 />} />
            </Routes>
        </BrowserRouter>
    );
}

const Default = () => (
    <div className=" flex h-screen  bg-gray">
        {/*
        <div className="fixed top-16 left-0  w-32 h-screen border-r border-dotted border-gray shadow-xl">
          
        </div>
        */}
    </div>
);
const Test = () => (
    <div className=" flex h-screen  bg-dollarBill">
        {/*
        <div className="fixed top-16 left-0  w-32 h-screen border-r border-dotted border-gray shadow-xl">
          
        </div>
        */}
    </div>
);
const Test2 = () => (
    <div className=" flex h-screen  bg-red">
        {/*
        <div className="fixed top-16 left-0  w-32 h-screen border-r border-dotted border-gray shadow-xl">
          
        </div>
        */}
    </div>
);
export default App;
