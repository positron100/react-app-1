import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
function App() {
  const [Mode,setMode]=useState("light");
  const [content,setcontent]=useState("dark mode");
  const [modecolor,setmodecolor]=useState("light");
  const togglemode=()=>{
    if(Mode==="light")
    {
      setMode("dark");
      setcontent("light mode");
      setmodecolor("light");
      document.body.style.backgroundColor="#042743";
    }
    else{
      setMode("light");
      setcontent("dark mode");
      setmodecolor("dark");
      document.body.style.backgroundColor="white";
    }
  }
  return (
    // all the code must be in a single tag
    <>
    {/* Navbar component */}
    <Navbar title="textutils" about="about us" 
    mode={Mode} 
    ToggleMode={togglemode} 
    Content={content}
    textColor={modecolor}/>

    {/* Text Box component */}
    <TextForm heading="Enter the text to analyze : " mode={Mode}/>

    {/* <About/> */}
    </>
  );
}

export default App;
