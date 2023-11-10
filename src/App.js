/ import logo from './logo.svg';
import  './App.css';
import Navbar from './components/Navbar';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Textform from './components/Textform';
import React, { useState } from 'react';
import Alert from './components/Alert';

// import{
//   BrowserRouter as Router,
//   Switch,
//   Routes,
//   Route,
// }from "react-router-dom";
function App() {
  const [mode,setMode]=useState('dark'); //whether darkmode is enabled or not
  const [mode1,setMode1]=useState('primary');
  const [btnText,setbtnText]=useState("Enable Dark");
  
  const [alert,setAlert]=useState(null);

 
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
  setTimeout(()=>{
setAlert(null);
  },3000);
  }

  if(mode==='dark'){
  document.body.style.background="#042743";

  }
  const toggleMode=()=>{
    if(mode==='primary'){
      document.title="TEXTUTILS-DarkMode";
  setMode('dark');
  document.body.style.background="#042743";
    showAlert("DarkMode has been Enabled !","success");
   
    }
  else {
    document.title="TEXTUTILS-LightMode";
    setMode('primary');
    document.body.style.background="white";
    showAlert("LightMode has been Enabled !","success");
  }
  }
  
  return (
    // This is wrapping case of JSX fragment .
<>
{/*PAssing of title which is document is props! */}
{/* <Router> */}


<Navbar title="TEXTUTILS" about="About Us" searching="Search" mode={mode} toggleMode={toggleMode} mode1={mode1} />
<Alert alert={alert}/>
<div className="container my-3">


    {/* <Routes>
    <Route exact path="/aboutit" element={<Aboutit/>}>
    </Route>   */}
    {/* <Route exact path="/" element={ <Textform showAlert={showAlert}heading="Enter The Text To Analyze"  mode={mode}/>}> */}
    <Textform showAlert={showAlert}heading="Enter The Text To Analyze"  mode={mode}/>
    {/* </Route> */}
    {/* </Routes> */}
{/* <Aboutit/> */}
</div>
{/* </Router> */}
</>
    // This is JSX :It is a synatx extension of javascript that allow 
    // to embeded of javascript inside html
// Here classNameName is written as classNameNameName
    
   
  );
  
}

export default App;
