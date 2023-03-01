import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import{
//   BrowserRouter,
//   Routes,
//   Route,
  
// }from "react-router-dom";

function App() {
  const[mode,setmode]=useState('dark'); //whether dark mode is enable or not
 const[alert,setAlert]= useState(null);
 const showAlert=(message,type)=>{
  setAlert({
    msg: message,
    type: type
  })
  setTimeout(()=>{
setAlert(null);
  },2000)
}
 const toggleMode=()=>{
    if(mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor='#042743';
      showAlert("Dark node has been enabled","success");
      document.title="TextUtils-Dark Mode";
    }
    else{
      setmode('light')
      document.body.style.backgroundColor='white';
      showAlert("light node has been enabled","success");
      document.title="TextUtils-Light Mode";
      setInterval(() => {
        document.title="TextUtils is Amazing";
      }, 2000);
      setInterval(() => {
        document.title="Install TextUtils Now";
      }, 1500);
    }
  }
  return (
    <>
    {/* <BrowserRouter> */}
    <Navbar title="Textutils" aboutText="About Textutils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    
    <div className="container my-3">
     {/* <Routes> */}
        {/* <Route exact path="/about" element={<About/>}/>  */}
          
        
        {/* <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode}/>}/> */}
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>  
       
    {/* </Routes> */}
    
    {/* <About/> */}
{/* <About/> */}
    </div>
    {/* </BrowserRouter> */}
    </>
  );
}

export default App;
