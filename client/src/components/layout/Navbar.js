import React, { Component } from "react";
import "./index.css"

class Navbar extends Component {
  render() {
    return (
      <div className="banner-free w-100">
        <div style={{paddingTop: '8px'}}>
          <small className="banner-free-first-text">This website was developed with</small>
        </div>
        <div style={{paddingTop: '8px'}}>
          <small className="banner-free-second-text">Cheetah Builder</small>
        </div>
        <div>
          <img src="https://builderall.com/franquias/2/73748/editor-html/3589641.png" className="banner-free-img" alt=''/>
        </div>
        <div style={{paddingTop: '8px'}}> 
          <small className="banner-free-third-text">Build your website today</small>
        </div>
        <div>
          <button className="btn-banner-free">Start Now</button>
        </div>
      </div>
    );
  }
}

export default Navbar;
