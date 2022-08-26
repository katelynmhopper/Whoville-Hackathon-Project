import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Events from './components/Events'
import NavBar from './components/NavBar'
import Login from './components/Login'
import About from './components/About'
import Connect from './components/Connect'
import Home from './components/Home'
import Footer from "./components/Footer"
import CreateAccount from "./components/CreateAccount";
import { Card } from "../src/context"
import './App.css';



const App = () => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch('./data.json')
      .then((response) => response.json())
      .then((data) => setData(data.data));
  }

  useEffect(() => {
    fetchData();
  }, [])


  return (
    <Router>
       <div className="App">
         <NavBar />
       
         <Routes>
           <Route path="/" element={<Home events={data}/>}/>
           <Route path="/about" element={<About />} />
           <Route path="/events" element={<Events events={data} />} />
           <Route path="/login" element={<Login />} />
           <Route path="/createaccount" element={<CreateAccount/>} />
           <Route path="/connect" element={<Connect />} />

     
         </Routes>
         <Footer /> 
       </div>
     </Router>
  );
}

export default App;
