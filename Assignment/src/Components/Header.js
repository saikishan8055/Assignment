import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";
import { Body } from "./Body";
import { height } from "@fortawesome/free-solid-svg-icons/fa0";
import MyImage1 from '../images/Hidoclogo.png';
import { ReactComponent as Menuline} from '../images/Menulines.svg';
import { useState,useEffect } from "react";





const Header = () => {
  const [data, setData] = useState([]);
const [error, setError] = useState(null);
const [drugData, setDrugData] = useState({});
const fetchData = async () => {
  try {
    const response = await fetch('https://hidocdr.com/api/hidoc-us/drug/getDrugList', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add any other headers if required
      },
      body: JSON.stringify({}),
      // Add your request body here
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const result = await response.json();
    setData(result.data.drugData || []);
  } catch (error) {
    setError(error);
  }
};
useEffect(() => {
  fetchData();
}, []);

const handleSelect = (id) => {
  const foundData = data.find(item => item.id === parseInt(id));
  if (foundData) {
    setDrugData(foundData);
  } else {
    setDrugData({});
  }
};
  return (
    <div className="Style">
        <div style={{textAlign:'center',fontWeight:'bold'}}>Page View</div>
        <div style={{ backgroundColor: "#EFF8F9", padding: "5px",marginBottom:'0.5px',height:20,textAlign:'center',fontSize:13, display:'flex'}}>
        <img src={MyImage1} alt="My Image" style={{ height: 20 }} /><span style={{ marginLeft: 350 }}>
          Drugs | Calculater | Articles | News | Quizzes | Surveys | Webinars | Guideline
          <Menuline />  <input
                className="search_input"
                
                placeholder="246"
                style={{
                  paddingLeft: '30px', // Adjust padding left as needed
      borderRadius: '20px',
      border: 'none',
      outline: 'none',
      width: '28px',
      height: '22px',
      color: 'red',

        
                }}
              />
                  <FontAwesomeIcon
                icon={faTrophy}
                style={{
                  position: "absolute",
                  left: "20px",
                                    transform: "translateY(50%)",
                  color: "#555",
                  marginLeft: 1090
                }}
              />
            <input     placeholder="A"
    style={{
      width: 15,
      height: 15,
      borderRadius: 10,
      borderColor: 'black',
      marginLeft: 10,
      color: 'black',
      borderWidth: 2, // Add border width
      textAlign: 'center', // Center text horizontally
    }}
  />
         </span>
          </div>
      <div style={{ backgroundColor: "#DEF4F6", padding: "5px",marginBottom:'1px',height:40,textAlign:'center',fontSize:15 }}>
        <h4>
          Your one-Stop Solution for{" "}
          <span style={{ color: "#35C2CD" }}>MEDICAL LEARNING & UPDATES</span>{" "}
        </h4>
      </div>
      <div
        style={{
            backgroundColor: "#F3F3F3", padding: "5px",marginBottom:'10px',height:42,textAlign:'center',fontSize:15
        }}
      >
        <h3>
          Get Knowledge of the
          <span style={{ color: "#35C2CD", marginLeft: "5px" }}>
            APPROVED DRUGS
            <div style={{ position: "relative", display: "inline-block" }}>
              <input
                className="search_input"
                placeholder="Enter Drug type"
                style={{
                  paddingLeft: "10px",
                  borderRadius: "20px",
                  border: "none",
                  outline: "none",
                  width: "150px",
                  height: "20px",
                  marginLeft: "40px",
                }}
              />
              <FontAwesomeIcon
                icon={faSearch}
                style={{
                  position: "absolute",
                  left: "180px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#555",
                }}
              />
            </div>
          </span>
        </h3>
      </div>
      <div style={{fontSize:12,display:'flex',textAlign:'center'}}>
        <p>
          Dailymed Drug Database: The DailyMed database contains 143072labeling
          submitted to <br />
          the Food and Drug Administration(FDA) by companies.DailyMed does not
          contain a <br />
          complete labeling for FDA-regulated products(eg,labeling that is not
          submitted<br/>
           to FDA).
        
        </p>
        <span style={{ marginLeft: 90, padding: 30 }}>
        {/* <button onClick={fetchData}>Fetch Data</button> */}

    <button onClick={() => handleSelect(1)} style={{ marginRight: '10px',color: 'black ', border: 'none', borderRadius: '5px', padding: '8px 16px' }}>Anesthesia</button>
    <button  onClick={() => handleSelect(2)}style={{ marginRight: '10px' ,color: 'black ', border: 'none', borderRadius: '5px', padding: '8px 16px'}}>cardiology</button>
    <button  onClick={() => handleSelect(3)} style={{ marginRight: '10px',color: 'black ', border: 'none', borderRadius: '5px', padding: '8px 16px' }}>Critical Care</button>
    <br />
    <button onClick={() => handleSelect(4)} style={{ marginRight: '10px' ,marginTop:"20px" ,color: 'black ', border: 'none', borderRadius: '5px', padding: '8px 16px'}}>Dentistry</button>
    <button style={{ marginRight: '10px',color: 'black ', border: 'none', borderRadius: '5px', padding: '8px 16px' }}>Dermatology</button>
    <button style={{ marginRight: '10px',color: 'black ', border: 'none', borderRadius: '5px', padding: '8px 16px' }}>Diabetology</button>
  </span>
      </div>

      <div style={{display:'flex'}}>
        <table
          style={{
            marginLeft: "15%",
            border: "2px solid black",
            borderCollapse: "collapse",
            width: "30%",
            textAlign: "center",
          }}
        >
          <thead>
            <tr style={{ border: "2px solid black" }}>
              <th>Drug data</th>
            </tr>
          </thead>
          <tbody>
          {drugData.id !== undefined ? (
            <tr>
              {/* <td>{drugData.id}</td> */}
              <td style={{backgroundColor:'#1B9EAB'}} >{drugData.drugName}</td>
              {/* <td>{drugData.drugDetails}</td> */}
            </tr>
          ) : (
            <tr>
              <td colSpan="3">Click the buttons to see the data dynamically </td>
            </tr>
          )}
        </tbody>
        </table>
        <span >
          <table
            style={{
              marginLeft: "10%",
              border: "2px solid black",
              borderCollapse: "collapse",
              width: "30%",
              textAlign: "center",
              flexDirection: "column",
            }}
          >
            <thead>
              <tr style={{ border: "2px solid black"  }}>
                <th>Drug details</th>
              </tr>
            </thead>
            <tbody>
            <td style={{color:'#83DBE4'}}>{drugData.drugDetails}</td>
            </tbody>
          </table>
        </span>
      </div>
   <div>
    <Body/>
   </div>

      <div>
       <Footer/>

       
      </div>
    </div>
  );
};

export default Header;
