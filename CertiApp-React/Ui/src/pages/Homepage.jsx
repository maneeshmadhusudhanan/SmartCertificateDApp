

import React, { useState } from 'react';
import image from '../assets/1.jpg';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const [cid, setCertiId] = useState('');
  const navigate = useNavigate();

  const searchCertificate = () => {
    navigate(`/certificate/${cid}`);
  };

  const logout = () => {
    console.log("User logged out");
  };

  return (
    <>
      <div className="bg-gray-100">
        <nav className="bg-certificate shadow-lg py-8 bg-blue-500">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-4xl font-bold text-yellow-300">SMART CERTIFICATE DApp</h1>
            <div className="flex gap-12">
            
              <a
                href="/certificate"
                className="text-4xl bg-yellow-500 text-gray-800 px-12 py-4 rounded-full hover:bg-yellow-600 transition duration-300 transform hover:scale-105"
              >
                ISSUE CERTIFICATE
              </a>
          
            </div>
          </div>
        </nav>

        <h1
          className="text-yellow-300 underline italic text-center text-8xl mt-20 font-bold"
        >
          <span
            className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600"
          >
            SMART CERTIFICATE DApp
          </span>
        </h1>

        <img
          className="border-8 border-double border-yellow-500 w-1/3 mx-auto mt-20 shadow-xl rounded-lg"
          src={image}
          alt="Certificate Image"
        />

        <div className="flex flex-col items-center mt-24">
          <input
            id="keyId"
            className="text-black italic text-center text-4xl p-2 border-8 border-red-500 rounded w-2/3 mb-4 focus:outline-none focus:ring-2 focus:ring-black-400"
            type="text"
            placeholder="ENTER CERTIFICATE ID TO VIEW"
            value={cid}
            onChange={(e) => setCertiId(e.target.value)}
          />
          <button
            className="bg-yellow-500 text-gray-800 px-20 py-8 rounded-full hover:bg-yellow-600 transition duration-300 shadow-md"
            onClick={searchCertificate}
          >
            SEARCH
          </button>
        </div>

        <footer className="bg-blue-500 text-center p-6 mt-20 shadow-inner">
          <p className="text-gray-700">
            &copy; 2024 CERTIFICATE DApp. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
};

export default Homepage;


// import React, { useState } from 'react';
// import {image} from '../assets/golden-award-medal-with-laurel-wreath-red-ribbon-white-background_953793-1411';
// import { useNavigate } from 'react-router-dom';

// const Homepage = () =>{
//   const [cid, setCertiId] = useState('');
//   const navigate = useNavigate();

//   const searchCertificate = () => {
//     navigate(`/certificate/${cid}`);
//   };
//   return (
//     <>
//       <div className="bg-gray-100">
  
//     <nav className="bg-certificate shadow-lg py-8 bg-blue-500">
//       <div className="container mx-auto flex justify-between items-center">
//         <h1 className="text-4xl font-bold text-yellow-300">CERTIFICATE DApp</h1>
//         <div className="flex gap-12">
//           <a
//             href="ViewCerti.html"
//             className="text-4xl mr-8 text-white hover:text-yellow-300 transition duration-300"
//             >VIEW CERTIFICATE</a>
//           <a
//             href="IssueCerti.html"
//             className="text-4xl bg-yellow-500 text-gray-800 px-12 py-4 rounded-full hover:bg-yellow-600 transition duration-300 transform hover:scale-105"
//             >ISSUE CERTIFICATE</a>
//           <a
//             href="LoginCerti.html"
//             className="text-4xl ml-12 bg-yellow-500 font-sans border rounded-lg p-8 font-bold hover:bg-yellow-600 transition duration-300 transform hover:scale-105"
//             onclick="logout()"
//             >Logout</a>
//         </div>
//       </div>
//     </nav>

    
//     <h1
//       className="text-yellow-300 underline italic text-center text-8xl mt-20 font-bold"
//     >
//       <span
//         className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600"
//         >CERTIFICATE DApp</span>
//     </h1>

    
//     <img
//       className="border-8 border-double border-yellow-500 w-1/3 mx-auto mt-20 shadow-xl rounded-lg"
//       src={image}
//       alt="Certificate Image"
//     />

   
//     <div className="flex flex-col items-center mt-24">
//       <input
//         id="keyId"
//         className="text-black italic text-center text-4xl p-2 border-8 border-red-500 rounded w-2/3 mb-4 focus:outline-none focus:ring-2 focus:ring-black-400"
//         type="text"
//         placeholder="ENTER CERTIFICATE ID TO VIEW"
//       />
//       <button
//         className="bg-yellow-500 text-gray-800 px-20 py-8 rounded-full hover:bg-yellow-600 transition duration-300 shadow-md"
//         onclick="searchResult()"
//       >
//         SEARCH
//       </button>
//     </div>

   
//     <footer className="bg-blue-500 text-center p-6 mt-20 shadow-inner">
//       <p className="text-gray-700">
//         &copy; 2024 CERTIFICATE DApp. All rights reserved.
//       </p>
//     </footer>
//     </div>

//     </>
//   );
// };
// export default Homepage;
