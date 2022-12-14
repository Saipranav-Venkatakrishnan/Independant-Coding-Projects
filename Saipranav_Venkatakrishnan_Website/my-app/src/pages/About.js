//import logo from './logo.svg';
import * as React from 'react';
import '../App.css';
import Logo from '../components/Logo.js';
import Introduction from '../components/Introduction.js';
import BasicCard from '../components/Card.js';
import AboutMe from '../components/AboutMe.js';
import ResponsiveAppBar from '../components/OptionBar';
import { Router, Route, useNavigate, Link, Routes } from "react-router-dom";
import Home from '../App'
import About from './About';
import Blogs from './Blog';

function App() {
  return (
    <>
      <div id='root' style={{
        backgroundColor: '#0d173b'
      }}>
        <div style={{
          background: 'black'
        }}>
          <br>
          </br> 
          <Logo />
          <br>
          </br> 
        </div>
          <div align='center'>
            <ResponsiveAppBar/>
          </div>  
        <AboutMe />
      </div>
    </>
  );
}

// function App() {
//   return (
//       <Router>
//         <Routes>
//           <Route exact path='/' element={<Home />} />
//           <Route path='/about' element={<About/>} />
//           <Route path='/blogs' element={<Blogs/>} />
//         </Routes>
//       </Router>
//   );
// }

export default App;
