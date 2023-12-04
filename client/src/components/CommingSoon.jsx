import React from "react";
import Navbar from "./NavBar";
import Footer from "./Footer";

function CommingSoon() {
  return (
    
    <div>
        <Navbar/>
        <div class="object">
    <div class="object-rope"></div>
    <div class="object-shape">
    	Coming <span class="soon">Soon</span>
    </div>
</div>

<div class="content">
  {/* <img class="logo" src="https://s3-ap-southeast-2.amazonaws.com/images.fitseeker.com.au/logo.svg"/> */}
  
  <p style={{alignItems:"center"}} class="message">Our brand new website will be launching soon. Shoot us an email if you want to get in contact.</p>
  
  <p class="mailtoaddress"><em>contactletzflix@gmail.com</em></p>
</div>
<Footer/>
    </div>
  );
}

export default CommingSoon;
