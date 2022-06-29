import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <div className=" flex h-screen  bg-gray">
        {/*
        <div className="fixed top-16 left-0  w-32 h-screen border-r border-dotted border-gray shadow-xl">
          
        </div>
        */}
        
      </div>

      

    </div>
  );
}

export default App;
