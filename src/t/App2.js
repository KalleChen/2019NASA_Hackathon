import React from 'react';
import './App2.css';
import Navbar from './Navbar.js';
import Introduction from './Introduction';
import AboutUs from './AboutUs';
import Photo from'./Photo';

class App2 extends React.Component{
  render(){
    return(
      <div>
          <Navbar></Navbar>
          <Introduction></Introduction>
          <AboutUs></AboutUs>
          <Photo></Photo>
        {/* <div className="ttt"></div> */}
         
      </div>
    );
  }
}

export default App2;
