import React, { Component } from "react";
import Footer from "./Footer"

class Landing extends Component {
  render() {
    return (
      <div style={{ height: "75vh" }} className="contain valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h3 className="Headstart">
              <b>Get A Headstart On Your Diet With</b>
              <br></br>
              <b>These Easy Keto Recipes To Try</b>
            </h3>
            <p className="subtitle">
              <u>
                <em>
                  Enter Your info Below To Get Access To This Free 19 Recipe Keto Guide
                </em>
              </u>
            </p>
            <br />
            <div style={{paddingTop: '5%'}}>
              <input 
                required="required" 
                placeholder="First Name" 
                name="name" 
                type="text" 
                className="form-control" 
                style={{paddingLeft: '2%', backgroundColor: 'white', width: '50%', border: '1px solid rgb(0, 0, 0)', height: '38px', borderRadius: '0px', fontFamily: 'Arial', fontSize: '17px', textAlign: 'left', fontStyle: 'initial', color: 'rgb(0, 0, 0)', outline: 'red solid 1px'}} />
              <small className="form-text text-muted" style={{display: 'none'}}></small>
            </div>
            <div style={{paddingTop:'3%'}}>
              <input 
                required="required" 
                placeholder="Your Email" 
                name="name" 
                type="text" 
                className="form-control" 
                style={{paddingLeft: '2%', backgroundColor: 'white', width: '50%', border: '1px solid rgb(0, 0, 0)', height: '38px', borderRadius: '0px', fontFamily: 'Arial', fontSize: '17px', textAlign: 'left', fontStyle: 'initial', color: 'rgb(0, 0, 0)', outline: 'red solid 1px'}} />
              <small className="form-text text-muted" style={{display: 'none'}}></small>
            </div>
            <div style={{paddingTop: '3%'}}>
              <a className="btn sb-text" style={{width: '52%', border: '0px none rgb(0, 0, 0)', background: 'rgb(33, 48, 155)', boxShadow: 'blue 1px 1px 1px 1px', fontFamily: 'arial, helvetica, sans-serif', fontSize: '15px', textAlign: 'center', fontWeight: '700', fontStyle: 'initial', color: 'white'}}>GET FREE RECIPES</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
