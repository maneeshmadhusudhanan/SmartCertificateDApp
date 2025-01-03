





import React from "react";

const About = () => {
  return (
    <div className="bg-gray-200 min-h-screen">
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-yellow-400 to-yellow-600 shadow-lg py-8">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-wide">
            CERTIFICATE DApp
          </h1>
          <div className="flex gap-12">
          <a
              href="/"
              className="text-4xl text-white hover:text-yellow-300 transition duration-300">
              HOME
            </a>
          </div>
        </div>
      </nav>

      {/* About Us Title with Animation */}
      <h1 className="text-yellow-300 underline italic text-center text-7xl mt-20 font-extrabold animate-bounce">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-yellow-700">
          About Us
        </span>
      </h1>

      {/* About Us Section */}
      <div className="max-w-4xl mx-auto mt-12 bg-gray-300 p-10 shadow-lg rounded-lg border-4 border-yellow-500">
        <div className="flex justify-center">
          <img
            src="/src/assets/1000_F_73862510_dSBgNkm7An5LoRTA2g6D1RrgcwOMPu7t.jpg"
            alt="Golden Award"
            className="w-32 h-32 rounded-full border-4 border-yellow-500"
          />
        </div>
        <p className="text-gray-700 text-2xl text-center leading-relaxed mt-6 font-bold">
          Welcome to{" "}
          <span className="text-4xl font-extrabold text-yellow-500">
            CERTIFICATE DApp
          </span>
          ! This platform is made by{" "}
          <span className="text-yellow-500 font-extrabold text-5xl animate-slide-right">
            MANEESH@KBA2024
          </span>
          , simplifying the certification process by providing a seamless
          platform for issuing and verifying certificates. Our goal is to
          ensure secure and reliable verification of professional and academic
          achievements.
        </p>

        <h2 className="text-4xl font-extrabold text-yellow-500 text-center mt-10 mb-4">
          Our Mission
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed text-center font-bold">
          Our platform enables institutions and organizations to issue
          certificates that are secure, verifiable, and immutable.
        </p>

        <h2 className="text-4xl font-extrabold text-yellow-500 text-center mt-10 mb-4">
          Our Vision
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed text-center font-bold">
          Reducing fraud and increasing trust in professional and academic
          achievements.
          <br />
          We aim to be the most reliable platform for certifying and verifying
          accomplishments.
        </p>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-center p-6 mt-20 shadow-inner">
        <p className="text-gray-900 text-lg font-bold">
          &copy; 2024 CERTIFICATE DApp. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default About;






// import React from 'react'

// const About = () => {
//   return (
//     <div>
// <div className="bg-gray-200 min-h-screen">

 
//   <nav className="bg-blue-500 shadow-lg py-8">
//     <div className="container mx-auto flex justify-between items-center">
//       <h1 className="text-4xl font-bold text-yellow-300">CERTIFICATE DApp</h1>
//       <div className="flex gap-12">
//         <a href="/Frontend/pages/index.html" className="text-4xl text-white hover:text-yellow-300 transition duration-300">HOME</a>
//       </div>
//     </div>
//   </nav>

 
//   <h1 className="text-yellow-300 underline italic text-center text-7xl mt-20 font-bold">
//     <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">About Us</span>
//   </h1>


//   <div className="max-w-4xl mx-auto mt-12 bg-gray-300 p-10 shadow-lg rounded-lg border-4 border-yellow-500">
//     <p className="text-gray-700 text-8xl text-center leading-relaxed">
//         <div>
//             <img src="/Frontend/images/golden-award-medal-with-laurel-wreath-red-ribbon-white-background_953793-1411.jpg" alt="" srcset=""/>
//         </div >
//       Welcome to <span className=" text-4xl font-bold text-yellow-500">CERTIFICATE DApp</span> ! made by MANEESH@KBA24 to simplifying the certification process by providing a seamless platform for issuing and verifying certificates.  Goal is to ensure secure and reliable verification of professional and academic achievements.
//     </p>
    
//     <h2 className="text-4xl font-bold text-yellow-500 text-center mt-10 mb-4">Our Mission</h2>
//     <p className="text-gray-700 text-lg leading-relaxed text-center">
//       Our platform enables institutions and organizations to issue certificates that are secure, verifiable, and immutable.
//     </p>

//     <h2 className="text-4xl font-bold text-yellow-500 text-center mt-10 mb-4">Our Vision</h2>
//     <p className="text-gray-700 text-lg leading-relaxed text-center">
//       Reducing fraud and increasing trust in professional and academic achievements.
//       <br />
//        We aim to be the most reliable platform for certifying and verifying accomplishments.
//     </p>
//   </div>




//   <footer className="bg-blue-500 text-center p-6 mt-20 shadow-inner">
//     <p className="text-gray-700 text-lg">&copy; 2024 CERTIFICATE DApp. All rights reserved.</p>
//   </footer>

// </div>
//     </div>
//   )
// }

// export default About