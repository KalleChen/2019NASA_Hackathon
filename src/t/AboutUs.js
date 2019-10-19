import React from 'react';
import './AboutUs.css';

class AboutUs extends React.Component{
    render(){
        return(
            <div className="AboutUs">
                <h1 className="Describe">About us</h1>
                <h3 className="Describe">
                    We provide visable data and accurate predict of future air pollution.
                </h3>
                <h3 className="Describe">
                    Click below if you want to connect us.
                </h3>
                <div className="Describe">
                  <button className="button">
                      connect us
                  </button>
                </div>
            </div>
        );
    }
}

export default AboutUs;