// import React, { useState } from 'react';

// function App() {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(null);
//   const [drugData, setDrugData] = useState({});

//   const fetchData = async () => {
//     try {
//       const response = await fetch('https://hidocdr.com/api/hidoc-us/drug/getDrugList', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           // Add any other headers if required
//         },
//         body: JSON.stringify({}),
//         // Add your request body here
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const result = await response.json();
//       setData(result.data.drugData || []);
//     } catch (error) {
//       setError(error);
//     }
//   };

//   const handleSelect = (id) => {
//     const foundData = data.find(item => item.id === parseInt(id));
//     if (foundData) {
//       setDrugData(foundData);
//     } else {
//       setDrugData({});
//     }
//   };

//   return (
//     <div>
//       <button onClick={fetchData}>Fetch Data</button>
//       {error && <div>Error: {error.message}</div>}
//       <div>
//         <button onClick={() => handleSelect(0)}>ID 0</button>
//         <button onClick={() => handleSelect(1)}>ID 1</button>
//         <button onClick={() => handleSelect(4)}>ID 2</button>
//         {/* Add more buttons for additional IDs */}
//       </div>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Details</th>
//             {/* Add more headers if needed */}
//           </tr>
//         </thead>
//         <tbody>
//           {drugData.id !== undefined ? (
//             <tr>
//               <td>{drugData.id}</td>
//               <td>{drugData.drugName}</td>
//               <td>{drugData.drugDetails}</td>
//             </tr>
//           ) : (
//             <tr>
//               <td colSpan="3">No data available</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default App;
