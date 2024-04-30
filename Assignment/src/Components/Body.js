import React from 'react';
import MyImage2 from '../images/Graph.png';


export const Body = () => {
  return (
    <div className="Style">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'row',
          alignItems: 'center'
        }}
      >
        <div>
        <img src={MyImage2} alt="My Image" style={{height:280,width:200}} />
        </div>
        <div style={{ marginRight: '40px' }}>
          <h4>Explore on Hidoc Dr</h4>

          <div>
            <p>News</p>
            <h4>Eductaion: Diabetes and <br /> tooth loss together cause <br /> cognitive impairment</h4>
            <p>
              Diabetes and tooth loss both contribute to cognitive <br /> impairment and cognitive decline in older adults,<br /> according to new research published in the issue of <br />the Dental Research.
            </p>
            <p style={{ fontSize: '12px', color: 'gray' }}>Posted on 15 MAR 2023</p>
          </div>
        </div>

        <div style={{ marginRight: '40px' }}>
        <p style={{ fontSize: '12px', color: 'gray' }}>CRITICAL CARE . 28 MAR 2023</p>

          <h4>Discovering <br /> Arthrogryposis: <br /> Understanding The <br /> Causes, Symptoms and <br /> Diagnosis</h4>
          <p>
            Arthrogryposis, also known as <br /> curvature of the joints, is a rare <br />condition that affects the joints in <br /> the body.
          </p>
        </div>

        <div>
        <p style={{ fontSize: '12px', color: 'gray' }}>CRITICAL CARE . 28 MAR 2023</p>

          <h4>The Science Behind Crest <br /> Disease: Exploring the <br /> Underlying mechanisms</h4>
          <hr style={{ width: '200px', borderTop: '1px solid black' }} />
          <p style={{ fontSize: '12px', color: 'gray' }}>CRITICAL CARE . 22 FEB 2023</p>
          <h4>A Comprehensive Guide <br /> To Apache Scoring: How It <br /> Works And Why You <br /> Should Use It</h4>
        </div>
      </div>
    </div>
  );
};
