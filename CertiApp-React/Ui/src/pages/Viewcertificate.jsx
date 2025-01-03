import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BrowserProvider, Contract } from 'ethers';
import { abi } from '../scdata/Cert.json';
import deployedAddresses from '../scdata/deployed_addresses.json';

const ViewCertificate = () => {
  const { id } = useParams();
  const [certi, setCertificate] = useState(null);

  useEffect(() => {
    const getCertificate = async () => {
      try {
        const provider = new BrowserProvider(window.ethereum);
        const instance = new Contract(deployedAddresses.CertModuleCert, abi, provider);
        const result = await instance.Certificates(id);

        setCertificate({
          certid: id,
          cname: result.name,
          course: result.course,
          grade: result.grade,
          date: result.date,

          
        });
      } catch (error) {
        console.error('Error fetching certificate:', error);
      }
    };

    getCertificate();
  }, [id]);

  if (!certi) {
    return <h3>Loading...</h3>;
  }
console.log(certi);
  return (


<>
  <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
    {/* Certificate Section */}
    <div className="w-full max-w-4xl bg-white shadow-xl rounded-xl p-8 border-4 border-yellow-500 relative print:border-none">
      <div className="p-6 border-2 border-yellow-300 rounded-lg bg-gradient-to-r from-white to-yellow-50">
        <div className="text-center">
          <h2 className="text-5xl font-extrabold text-yellow-600 tracking-wide">
            Kerala Blockchain Academy
          </h2>
        </div>

        <div className="mt-8 text-center">
          <p className="text-2xl font-bold text-gray-700">
            This is to certify that
          </p>
          <h3
            className="text-4xl font-extrabold text-blue-900 mt-2"
            id="name"
          >
            {certi.cname}
          </h3>
          <p className="text-xl font-bold text-gray-700 mt-4">
            has successfully completed the
          </p>
          <h3
            className="text-3xl font-extrabold text-yellow-600 mt-2"
            id="course"
          >
            {certi.course}
          </h3>
          <p className="text-lg font-bold text-gray-700 mt-4">
            with <span className="text-yellow-500">{certi.grade}</span> grade.
          </p>
          <p className="text-lg font-bold text-gray-700 mt-4">
            Offered by Kerala Blockchain Academy (KBA) in online mode.
          </p>
        </div>

        <div className="mt-6 flex justify-between">
          <div className="text-left">
            <p className="text-lg font-bold text-gray-700">
              Certificate ID:{" "}
              <span
                className="font-extrabold text-yellow-500"
                id="certid"
              >
                {certi.certid}
              </span>
            </p>
            <p className="text-lg font-bold text-gray-700">
              Date of Completion:{" "}
              <span
                className="font-extrabold text-yellow-500"
                id="date"
              >
                {certi.date}
              </span>
            </p>
            <p className="text-lg font-bold text-gray-700">Place: Trivandrum</p>
          </div>
          <div className="text-right">
            <p className="font-bold text-gray-700">(sd/-)</p>
            <p className="font-bold text-gray-700">Director</p>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <img
            src="/src/assets/rb_71633.png"
            alt="Certificate Emblem"
            className="h-44"
          />
        </div>
      </div>
    </div>

    {/* Download Button */}
    <div className="mt-8">
      <button
        onClick={() => window.print()}
        className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300 print:hidden"
      >
        Download Certificate
      </button>
    </div>
  </div>
</>



  
  );
};

export default ViewCertificate;



// <>
//       <div className="bg-gray-100 min-h-screen">
//         {/* Navbar */}
//         <nav className="bg-gradient-to-r from-yellow-400 to-yellow-600 shadow-lg py-8">
//           <div className="container mx-auto flex justify-between items-center">
//             <h1 className="text-4xl font-extrabold text-blue-600 tracking-wide animate-fade-in">
//               CERTIFICATE DApp
//             </h1>
//             <div className="flex gap-16">
//               <a
//                 href="/"
//                 className="text-2xl font-bold text-white hover:text-blue-700 transition duration-300"
//               >
//                 HOME
//               </a>
//               <a
//                 href="/certificate"
//                 className="text-2xl font-bold text-white hover:text-blue-700 transition duration-300"
//               >
//                 ISSUE CERTIFICATE
//               </a>
//               <a
//                 href="/About"
//                 className="text-2xl font-bold text-white hover:text-blue-700 transition duration-300"
//               >
//                 ABOUT
//               </a>
//             </div>
//           </div>
//         </nav>

//         {/* Title Section */}
//         <h1 className="text-yellow-300 underline italic text-center text-7xl mt-16 font-extrabold animate-bounce">
//           <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-yellow-700">
//             SMART CERTIFICATE DApp
//           </span>
//         </h1>

//         {/* Certificate Section */}
//         <div className="container mx-auto p-6 bg-gray-100 shadow-xl rounded-xl animate-slide-up">
//           <div className="border-4 border-yellow-500 p-8 bg-white rounded-lg">
//             <div className="border-2 border-yellow-300 p-4 bg-gray-50 rounded-lg">
//               <div className="text-center">
//                 <h2 className="text-5xl font-extrabold text-blue-700 tracking-wider animate-zoom-in">
//                   Kerala Blockchain Academy
//                 </h2>
//               </div>

//               <div className="mt-8">
//                 <div className="flex justify-center">
//                   <div className="w-3/4 text-center">
//                     <span className="text-2xl font-bold text-yellow-500">
//                       This is to certify that 
//                       <span
//                         className="text-3xl font-extrabold text-blue-900 animate-slide-in"
//                         id="name"
//                       >
//                         {certi.cname}
//                       </span> 
//                       has completed the
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               <div className="mt-4">
//                 <div className="flex justify-center">
//                   <div className="w-3/4 text-center">
//                     <span className="text-2xl font-bold block text-yellow-500">
//                       <span
//                         className="text-3xl font-extrabold text-blue-700 animate-fade-in"
//                         id="course"
//                       >
//                         {certi.course}&nbsp;
//                       </span> 
//                       offered by <br /> Kerala Blockchain Academy (KBA) in
//                       online mode.
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               <div className="mt-4">
//                 <div className="flex justify-center">
//                   <div className="w-3/4 text-center">
//                     <span className="text-2xl font-bold block text-yellow-500">
//                       with 
//                       <span
//                         className="text-3xl font-extrabold text-blue-700"
//                         id="grade"
//                       >
//                         {certi.grade}
//                       </span> 
//                       grade
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               <div className="mt-4">
//                 <div className="flex justify-between">
//                   <div className="text-left">
//                     <span className="text-xl font-bold text-blue-800">
//                       Certificate ID: 
//                       <span
//                         className="text-3xl font-extrabold text-yellow-500 animate-slide-in"
//                         id="certid"
//                       >
//                         {certi.certid}
//                       </span>
//                     </span>
//                   </div>
//                   <div className="text-right">
//                     <span className="text-xl text-gray-700">
//                       Date of Completion: 
//                       <span
//                         className="text-3xl font-extrabold text-yellow-500 animate-fade-in"
//                         id="date"
//                       >
//                         {certi.date}
//                       </span>
//                     </span>
//                     <br />
//                     <span className="text-xl text-gray-700">Place: Trivandrum</span>
//                   </div>
//                 </div>
//               </div>

//               <div className="mt-8">
//                 <div className="flex justify-between">
//                   <div className="text-left">
//                     <img
//                       src="/path-to-emblem"
//                       alt="Certificate Emblem"
//                       className="h-16"
//                     />
//                   </div>
//                   <div className="text-right">
//                     <span className="block font-bold text-blue-900 animate-pulse">
//                       (sd/-)
//                     </span>
//                     <span className="block font-bold text-blue-900 animate-pulse">
//                       Director
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               <div className="mt-8">
//                 <button
//                   onClick={() => window.print()}
//                   className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
//                 >
//                   Download Certificate
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Footer */}
//         <footer className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-center p-6 mt-20 shadow-inner">
//           <p className="text-gray-900 text-lg font-bold">
//             &copy; 2024 CERTIFICATE DApp. All rights reserved.
//           </p>
//         </footer>
//       </div>
//     </>


    // <>
    //  <div className="bg-gray-100 min-h-screen">
    //   <nav className="bg-blue-500 shadow-lg py-12">
    //     <div className="container mx-auto flex justify-between items-center">
    //       <h1 className="text-4xl font-bold text-yellow-300">CERTIFICATE DApp</h1>
    //       <div className="flex gap-20">
    //         <a href="/" className="text-4xl text-white hover:text-yellow-300 transition duration-300">HOME</a>
    //         <a href="/certificate/:id" className="pl-10 text-4xl text-white hover:text-yellow-300 transition duration-300">ISSUE CERTIFICATE</a>
    //         <a href="/About" className="pl-10 text-4xl text-white hover:text-yellow-300 transition duration-300">ABOUT</a>
    //       </div>
    //     </div>
    //   </nav>

    //   <h1 className="text-yellow-300 underline italic text-center text-8xl mt-16 font-extrabold animate-pulse">
    //     <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">SMART CERTIFICATE DApp</span>
    //   </h1>

    //   <div className="container mx-auto p-6 bg-gray-100 shadow-xl rounded-xl">
    //     <div className="border-4 border-blue-700 p-8 bg-white">
    //       <div className="border-2 border-blue-400 p-4 bg-gray-50">
    //         <div className="text-center">
    //           <h2 className="text-4xl font-extrabold text-blue-700">Kerala Blockchain Academy</h2>
    //         </div>
    //         <div className="mt-8">
    //           <div className="flex justify-center">
    //             <div className="w-3/4 text-center">
    //               <span className="text-2xl font-semibold  text-yellow-300">
    //                 This is to certify that <span className="text-3xl font-semibold text-blue-900" id="name">{certi.cname}</span> has completed the
    //               </span>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="mt-4">
    //           <div className="flex justify-center">
    //             <div className="w-3/4 text-center">
    //               <span className="text-2xl font-semibold block  text-yellow-300">
    //                 <span className="text-3xl font-semibold  text-blue-700" id="course">{certi.course}&nbsp;</span> offered by <br /> Kerala Blockchain Academy(KBA) in online mode.
    //               </span>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="mt-4">
    //           <div className="flex justify-center">
    //             <div className="w-3/4 text-center">
    //               <span className="text-2xl font-bold  text-yellow-300 block">
    //                 with <span className="text-3xl font-semibold  text-blue-700" id="grade">{certi.grade}</span> grade
    //               </span>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="mt-4">
    //           <div className="flex justify-between">
    //             <div className="text-left">
    //               <span className="text-xl font-bold text-blue-800">
    //                 Certificate ID: <span className="text-3xl font-semibold  text-yellow-300" id="certid">{certi.certid}</span>
    //               </span>
    //             </div>
    //             <div className="text-right">
    //               <span className="text-xl text-gray-700">
    //                 Date of Completion: <span className="text-3xl font-semibold  text-yellow-300" id="date">{certi.date}</span>
    //               </span><br />
    //               <span className="text-xl text-gray-700">Place: Trivandrum</span>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="mt-8">
    //           <div className="text-right">
    //             <span className="block font-bold text-blue-900">(sd/-)</span>
    //             <span className="block font-bold text-blue-900">Director</span>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   <footer className="bg-blue-500 text-center p-6 mt-20 shadow-inner">
    //     <p className="text-gray-100 text-lg font-semibold">&copy; 2024 CERTIFICATE DApp. All rights reserved.</p>
    //   </footer>
    // </div>

    // </>












/////////////////////////////////////////////////////////////////////////////////////////////////



















// <div className="container mx-auto p-6 bg-gray-100 shadow-xl rounded-xl">
// //   <div className="border-4 border-blue-700 p-8 bg-white">
// //     <div className="border-2 border-blue-400 p-4 bg-gray-50">
// //       <div className="text-center">
// //         <h2 className="text-4xl font-extrabold text-blue-900">Kerala Blockchain Academy</h2>
// //       </div>
// //       <div className="mt-8">
// //         <div className="flex justify-center">
// //           <div className="w-3/4 text-center">
// //             <span className="text-2xl font-semibold  text-blue-700">
// //               This is to certify that <span className="text-3xl font-semibold  text-blue-900" id="name">{certi.cname} </span>has completed the
// //             </span>
// //           </div>
// //         </div>
// //       </div>
// //       <div className="mt-4">  
// //         <div className="flex justify-center">
// //           <div className="w-3/4 text-center">
// //             <span className="text-2xl font-semibold  block text-blue-700">
// //               <span className="text-3xl font-semibold  text-blue-900" id="course">{certi.course}&nbsp;</span>offered by <br></br> Kerala Blockchain Academy(KBA) in online mode.
// //             </span>
// //           </div>
// //         </div>
// //       </div>
// //       <div className="mt-4">
// //         <div className="flex justify-center">
// //           <div className="w-3/4 text-center">
// //             {/* <span className="text-xl italic text-gray-600">has earned</span> */}
// //             <span className="text-2xl font-bold text-blue-800 block">with&nbsp;
// //                <span className="text-3xl font-semibold  text-blue-900" id="grade">{certi.grade}</span>&nbsp; grade
// //             </span>
// //           </div>
// //         </div>
// //       </div>
// //       <div className="mt-4">
// //         <div className="flex justify-center">
// //           <div className="w-3/4 text-center">
// //             <span className="text-xl italic block text-gray-600">while completing the training course entitled</span>
// //           </div>
// //         </div>
// //       </div>
      
// //       <div className="mt-4">
// //         <div className="flex justify-between">
// //           <div className="text-left">
// //             <span className="text-xl font-bold text-blue-800">
// //               Certificate ID: <span className="text-3xl font-semibold  text-blue-900" id="certid">{certi.certid}</span>
// //             </span>
// //           </div>
// //           <div className="text-right">
// //             <span className="text-xl text-gray-700">
// //               Date of Completion: <span className="text-3xl font-semibold  text-blue-900" id="date">{certi.date}</span>
// //             </span><br />
// //             <span className="text-xl text-gray-700">Place: Trivandrum</span>
// //           </div>
// //         </div>
// //       </div>
// //       <div className="mt-8">
// //         <div className="text-right">
// //           <span className="block font-bold text-blue-900">(sd/-)</span>
// //           <span className="block font-bold text-blue-900">Director</span>
// //         </div>
// //       </div>
// //     </div>
// //   </div>
// // </div>



// ..................................................................


//   // <>
    
    
// {/*     
//     <div className="bg-gray-100 ">


//   <nav className=" justify-end gap-5 p-6 bg-blue-500 shadow-lg">
//     <a href="/Frontend/pages/index.html" className="text-2xl font-semibold text-white px-6 py-2 rounded-lg bg-yellow-500 hover:bg-yellow-600 transition duration-300 ease-in-out transform hover:scale-105 shadow-md">
//       HOME
//     </a>
//   </nav>


//   <h1 className="text-yellow-300 underline italic text-center text-8xl mt-16 font-extrabold animate-pulse">
//     <span className="bg-clip-text  text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">Certificate DApp</span>
//   </h1>

 
//   <div className="flex justify-center mt-16">
//     <img className="w-1/3 border-8 border-yellow-500 rounded-lg shadow-xl transition-transform duration-500 ease-in-out transform hover:scale-110 hover:rotate-3 hover:border-dashed hover:border-yellow-600"
//      src="/Frontend/images/golden-award-medal-with-laurel-wreath-red-ribbon-white-background_953793-1411.jpg" alt="Certificate Image"/>
//   </div>

 
//   <div className="  mt-10 mx-12 md:mx-32 lg:mx-64 bg-gray-200 rounded-lg shadow-lg p-10 border-4 border-double border-yellow-500">
//     <h2 className=" text-yellow-500 underline italic mt-10 pb-10 text-6xl text-gray-700 font-bold mb-4 italic text-center animate-fade-in-up">
//       CERTIFICATE  OF  ACHIEVEMENT
//     </h2>
   
    
//       <div className="w-2/4 m-auto bg-violet-100 mt-40 shadow-md">
//           <div className="p-16">
//               <p className="font-mono text-yellow-500 font-bold text-2xl text-center text-2xl" id="h1"></p>
//               <p className="font-mono text-yellow-500 text-center pt-12" id="certid" >
//               <span className="text-2xl font-semibold  text-blue-700">
//                 This is to certify that <span className="text-3xl font-semibold  text-blue-900" id="name">{certi.cname} </span>has completed the
//               </span>
                
//                  </p>
//               <p className="font-mono text-yellow-500  text-center" id="parag"></p>
//               <p className="font-mono text-yellow-500 text-center" id="date"></p>
//           </div>
//       </div>
     
 
   
//     <div className="gap-16 flex pl-80 pb-10 pt-10 ">
//         <img className="w-80" src="/Frontend/images/1000_F_73862510_dSBgNkm7An5LoRTA2g6D1RrgcwOMPu7t.jpg" alt="" srcset=""/>
//         <img className="w-80" src="/Frontend/images/images12.png" alt="" srcset=""/>

//         <img className="w-80" src="/Frontend/images/1000_F_73855923_yQU5j0JhQZx8ih5zVnMrNVeKMPpFTHIH.jpg" alt="" srcset=""/>

      
//     </div>       




// </div>
    
 
//   <footer className="bg-blue-500 text-center p-6 mt-20 shadow-inner">
//     <p className="text-gray-100 text-lg font-semibold">&copy; 2024 CERTIFICATE DApp. All rights reserved.</p>
//   </footer>
//   </div>
    





// </> */}