import React from "react";
import { Route,Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavigationBar from "./components/Navbar";
import Service from './components/Services'
import Trades from "./components/Trades";


const App=()=>{
  return(
    <>
    <NavigationBar/>
      <Routes>
      <Route  path='/about'   element={<About />}></Route>
      <Route path='/contact'  element={<Contact />}></Route>
      <Route path='/service'  element={<Service />}></Route>
      <Route path='/'  element={<Home />}></Route>
      </Routes>
      <Service/>
      <Trades/>
      

      </>
  )
}


export default App;
