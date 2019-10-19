import React from 'react';
import './Photo.css'
import picture1 from './pic/china.jpg'
import picture2 from './pic/india.jpg'
import picture3 from './pic/us.jpg'
import picture4 from './pic/taiwan.jpg'

class Photo extends React.Component{
    render(){
        return(
            <div className="Photo">
                <div className="PhotoTitle">
                  <h2>Help us deal with more air pollution problem!</h2>
                </div>
                <div className="Pic">
                  <img src={picture1} className="Pi"/>
                  <img src={picture2} className="Pi"/>
                  <img src={picture3} className="Pi"/>
                  <img src={picture4} className="Pi"/>
                </div>
                <div className="Name">
                    <h3>China</h3>
                    <h3>India</h3>
                    <h3>U.S.</h3>
                    <h3>Taiwan</h3>
                </div>
            </div>
        );
    }
}

export default Photo;