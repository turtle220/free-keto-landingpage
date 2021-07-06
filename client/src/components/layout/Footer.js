import React, { Component } from "react";
import "./index.css"

class Footer extends Component {
  render() {
    return (
      <div className="footer-contain">
          <div style={{display: 'flex', justifyContent: 'center', textAlign: 'center', paddingTop: '3%'}}>
            <a className="privacy">
              <span class="d-block text-truncate px-1">
                  Privacy Policy</span></a>
            <div style={{width: '3%'}}></div>
            <a className="privacy">Terms & Conditions</a>
          </div>
          <div style={{paddingLeft: '10%', paddingRight: '10%'}}>
            <div style={{fontSize: '12px', textAlign: 'center', paddingBottom: '1%'}}>
              <p>© 2020 All rights reserved.</p>
            </div>
            <div style={{fontSize: '12px', textAlign: 'center'}}>
              <p>This site is not a part of the Facebook website or Facebook Inc. Additionally, this site is not endorsed by </p>
              <p>Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc. </p>
            </div>
            <div style={{paddingTop: '1%', fontSize: '12px', textAlign: 'center'}}>
              <p>Affiliate Disclosure: I am an independent affiliate of the Custom Keto Diet. I am not a paid employee. I may receive commission if you click a link or button on this page and </p>
              <p>choose to purchase something. You can rest assured I will only share things I believe in and will truly be of value to you.</p>
            </div>
            <img style={{position: 'absolute', top: '102%', left: '91%'}}src="https://stellarfragmentation-freeketorecipes.free.builderall.com/static/powered_by.png" />
          </div>
      </div>
    );
  }
}

export default Footer;
