import React from 'react'
import { ReactComponent as Facebook } from '../images/Facebook.svg';
import { ReactComponent as Instagram } from '../images/Instagram.svg';
import { ReactComponent as Youtube } from '../images/Youtube.svg';
import { ReactComponent as Linkedin } from '../images/Linkedin.svg';
import MyImage from '../images/Hidoc features.png';
import MyImage1 from '../images/Hidoclogo.png';







const Footer =()=>{
    return(
        <div>
        <footer
        style={{
          backgroundColor: " #00094B",
          padding: "30px",
          fontSize: 12,
          color: "whitesmoke",
          height: 200,
          display:'flex'
        }}
      >
        <div>
        <img src={MyImage1} alt="My Image" style={{height:30}} />

        <h1>hidcor</h1>
        <p>
          Fasted Growing Medical Platform <br /> Doctors
         
        </p>
        <div style={{justifyContent:'space-between',display:'inline-block'}}>
        <Facebook/> <Instagram/><Youtube/><Linkedin/>
        </div>
        </div>
        
        
        {/* <div>
          <div style={{ display: "flex",marginBottom:'300px' }}>
            <div style={{ marginLeft: "350px", marginBottom: 100 }}> */}
            <span style={{marginLeft:200}}>
            <h4>Reach Us</h4>
              <p>
                Please contact the below details for any other information
              </p>
              <p style={{ color: "blue" }}>Email:</p>
              <p>info@hindoc.co</p>
              <p style={{ color: "blue" }}>Address:</p>
              <p>
                Hindoc.Dr,2055 Limestone Rd,STE 200-C,
                <br /> Wilmington,DE,19808,United States.
              </p>
            </span>
            <span style={{marginLeft:100}}>HIDOC DR.FEATURES
            <img src={MyImage} alt="My Image" style={{marginTop:20}} />
            </span>

              
           
            {/* </div>
          </div>
        </div> */}
      </footer>
        <footer
        style={{
          height:40,
          backgroundColor: "lightgray",
          padding: "5px",
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: "12px", color: "gray" }}>
          &copy; Copyright 2022{" "}
          <span style={{ fontWeight: "bold", color: "black" }}>
            Hidoc Dr.Inc.
          </span>
          <br />
          Terms & Conditions|Privacy Policy
        </p>
      </footer>
 
      </div>

    )
}
export default Footer;