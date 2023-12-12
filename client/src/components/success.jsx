import React from 'react'
import { Link } from 'react-router-dom';

const Success = () => {
    return (
        <div className="content">
          <div className="wrapper-1">
            <div className="wrapper-2">
              <h1>Thank you !</h1>
              <p>Thanks for booking to our LetzFlix Event.</p>
              <Link to="/" >

              <button className="go-home">
                Go Home
              </button>
              </Link>
            </div>
            {/* <div className="footer-like">
             
            </div> */}
          </div>
        </div>
      );
}

export default Success
