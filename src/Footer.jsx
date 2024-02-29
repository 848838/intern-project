import React from "react";
import "./Footer.css";

function Footer() {
  return (

    // footer start here


    <div className="main-footer" style={{ height: '260px' }}>
      <div className="container">
        <div className="row">
          {/* Column1 */}



          <div className="col">
            <h4>Categories</h4>
            <ui className="list-unstyled">
              <li>Web Builder</li>
              <li>Hosting</li>
              <li>1Data Center</li>
              <li>Robotic-Automation</li>
            </ui>
          </div>


          {/* Column2 */}
          <div className="col">
            <h4>Contact</h4>
            <ui className="list-unstyled">
              <li>Contact</li>
              <li>Privacy Policy</li>
              <li>Terms Of Service</li>
              <li>Categories</li>
              <li>About</li>
            </ui>
          </div>



          {/* Column3 */}
          <div className="col">

            <ui className="list-unstyled ">

              <li className="nav-item dropdown  " style={{ listStyle: "none", display: 'flex', float: 'right' }}>
                <a className="nav-link dropdown-toggle my-5" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  United States
                </a>

              </li>
            </ui>
          </div>
        </div>
        <hr />

      </div>
    </div>
  );
}

export default Footer;