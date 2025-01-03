import React, { useState } from 'react';
import { abi } from '../scdata/Cert.json';
import deployedAddresses from '../scdata/deployed_addresses.json';
import { BrowserProvider, Contract } from 'ethers';

const IssueCertificate = () => {
  const [certid, setId] = useState('');
  const [cname, setCname] = useState('');
  const [course, setCourse] = useState('Certified Blockchain Associate');
  const [grade, setGrade] = useState('A');
  const [date, setDate] = useState('');

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      const provider = new BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contractAddress = deployedAddresses.CertModuleCert;
      const instance = new Contract(contractAddress, abi, signer);

      // Send the transaction
      const txl = await instance.issue(certid, cname, course, grade, date);
      console.log('Transaction return:', txl);
      alert('Certificate issued successfully!');
    } catch (error) {
      console.error('Error issuing certificate:', error);
      alert('An error occurred while issuing the certificate.');
    }
  };

  return (
    <>
    <div className="bg-gray-100 min-h-screen">
      <nav className="bg-certificate shadow-lg py-12 bg-blue-500">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-4xl font-bold text-yellow-300">CERTIFICATE DApp</h1>
          <div className="flex gap-20">
            <a
              href="/"
              className="text-4xl text-white hover:text-yellow-300 transition duration-300">
              HOME
            </a>
            <a
                href="/"
                className="text-4xl mr-8 text-white hover:text-yellow-300 transition duration-300">
                VIEW CERTIFICATE
              </a>
            <a
              href="/About"
              className="pl-10 text-4xl text-white hover:text-yellow-300 transition duration-300"
            >
              ABOUT
            </a>
          </div>
        </div>
      </nav>

      <h3 className="text-yellow-300 underline italic text-center text-6xl mt-20 font-bold">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
          Issue New Certificate
        </span>
      </h3>

      <div className="max-w-lg mx-auto mt-10 bg-white p-10 shadow-xl rounded-lg border-4 border-yellow-500">
        <form onSubmit={submitForm} className="space-y-8">
          <div>
            <label className="block text-gray-700 font-medium text-2xl mb-2">Select Course</label>
            <select
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              className="w-full p-3 border border-yellow-500 rounded text-lg"
            >
              <option value="Certified Blockchain Associate">Certified Blockchain Associate</option>
              <option value="PCB Design">PCB Design</option>
              <option value="Cyber Security">Cyber Security</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium text-2xl mb-2">Certificate ID</label>
            <input
              type="text"
              value={certid}
              onChange={(e) => setId(e.target.value)}
              className="w-full p-3 border border-yellow-500 rounded text-lg"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium text-2xl mb-2">Candidate Name</label>
            <input
              type="text"
              value={cname}
              onChange={(e) => setCname(e.target.value)}
              className="w-full p-3 border border-yellow-500 rounded text-lg"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium text-2xl mb-2">Select Grade</label>
            <select
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              className="w-full p-3 border border-yellow-500 rounded text-lg"
            >
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium text-2xl mb-2">Issue Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full p-3 border border-yellow-500 rounded text-lg"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-800 py-3 rounded-full text-2xl font-bold shadow-md transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>

      <footer className="bg-yellow-50 text-center p-6 mt-20 shadow-inner">
        <p className="text-gray-700 text-lg">&copy; 2024 CERTIFICATE DApp. All rights reserved.</p>
      </footer>
    </div>
    </>
  );
};

export default IssueCertificate;


