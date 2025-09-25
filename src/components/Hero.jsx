import React, { useState, useEffect } from 'react';
import { FiSearch, FiExternalLink, FiDownload } from 'react-icons/fi';
import { MdVerified } from 'react-icons/md';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import Barcode from 'react-barcode';
import images from '../constants/images';

// Dummy data for customer information
const customerData = [
  {
    parcelId: 'LA-IKJ-23-00981',
    owner: 'Adeyemi & Co.',
    status: 'Clean (No Encumbrance)',
    tenure: '99-year Lease',
    address: 'Ikeja, Lagos',
    updatedAt: '12 Sep 2025 • 14:22',
    type: 'Lease',
  },
  {
    parcelId: 'LA-IKJ-23-00982',
    owner: 'Bello Farms Ltd',
    status: 'Under Investigation',
    tenure: 'Freehold',
    address: 'Ikorodu, Lagos',
    updatedAt: '01 Aug 2025 • 09:12',
    type: 'Purchase',
  },
  {
    parcelId: 'LA-ABJ-21-12001',
    owner: 'Oluwaseun Holdings',
    status: 'Encumbered',
    tenure: 'Leasehold',
    address: 'Jabi, Abuja',
    updatedAt: '20 Jul 2025 • 11:00',
    type: 'Lease',
  },
  {
    parcelId: 'OG-PTK-19-00555',
    owner: 'Riverside Real Estate',
    status: 'Clean (No Encumbrance)',
    tenure: 'Freehold',
    address: 'Port Harcourt, Rivers',
    updatedAt: '04 Sep 2025 • 08:30',
    type: 'Purchase',
  },
  {
    parcelId: 'EN-UNK-20-33421',
    owner: 'Greenfields Ltd',
    status: 'Pending Approval',
    tenure: '99-year Lease',
    address: 'Enugu, Enugu',
    updatedAt: '02 Sep 2025 • 12:22',
    type: 'Lease',
  },
  {
    parcelId: 'LA-IKJ-23-00999',
    owner: 'Musa & Sons',
    status: 'Clean (No Encumbrance)',
    tenure: 'Freehold',
    address: 'Ogba, Lagos',
    updatedAt: '11 Sep 2025 • 07:42',
    type: 'Purchase',
  },
  {
    parcelId: 'KD-IKD-24-00100',
    owner: 'Olawale Estates',
    status: 'Restricted Title',
    tenure: 'Leasehold',
    address: 'Aba, Abia',
    updatedAt: '28 Aug 2025 • 16:10',
    type: 'Lease',
  },
  {
    parcelId: 'KW-IKD-22-01010',
    owner: 'Sunrise Developers',
    status: 'Clean (No Encumbrance)',
    tenure: 'Freehold',
    address: 'Kwara, Ilorin',
    updatedAt: '15 Jul 2025 • 10:00',
    type: 'Purchase',
  },
  {
    parcelId: 'LA-IKJ-22-01111',
    owner: 'Anambra Land Co.',
    status: 'Encumbered',
    tenure: '99-year Lease',
    address: 'Onitsha, Anambra',
    updatedAt: '05 Jun 2025 • 13:44',
    type: 'Lease',
  },
  {
    parcelId: 'LA-IKJ-21-09999',
    owner: 'Okonkwo Properties',
    status: 'Clean (No Encumbrance)',
    tenure: 'Freehold',
    address: 'Yaba, Lagos',
    updatedAt: '09 Sep 2025 • 22:11',
    type: 'Purchase',
  },
];
const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [parcelId, setParcelId] = useState('');
  const [address, setAddress] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [verificationResult, setVerificationResult] = useState(null);

  const words = [
    'digital land registry',
    'instant verification',
    'get alerts on disputes',
    'secure land transactions',
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setTypedText(
        isDeleting
          ? fullText.substring(0, typedText.length - 1)
          : fullText.substring(0, typedText.length + 1)
      );

      setTypingSpeed(isDeleting ? 70 : 150);

      if (!isDeleting && typedText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && typedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const typer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typer);
  }, [typedText, isDeleting, loopNum, typingSpeed, words]);

  const handleVerify = () => {
    const result = customerData.find(
      (data) =>
        data.parcelId.toLowerCase() === parcelId.toLowerCase() &&
        data.address.toLowerCase().includes(address.toLowerCase())
    );
    setVerificationResult(result);
    setShowModal(true);
  };

  const handleDownloadPDF = () => {
    const modal = document.getElementById('verification-modal');
    if (!modal) return;

    html2canvas(modal, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`${verificationResult.parcelId}_Verification_Report.pdf`);
    });
  };

  return (
    <section
      id="verify"
      className="relative flex items-center justify-center min-h-screen text-white py-16 px-4 bg-gradient-to-r from-[#0047AB] to-[#001D4A]"
    >
      <div className="relative z-10 container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left mt-10 lg:mt-0">
          <p className="text-sm font-semibold text-green-400 mb-2">
            Nigeria-first Digital Title Verification
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Verify land ownership
            <br />
            <span className="text-green-300">
              {typedText}
              <span className="animate-pulse-cursor ml-1">|</span>
            </span>
          </h1>
          <p className="text-lg mb-8 max-w-md mx-auto lg:mx-0">
            Search any parcel, scan a QR Certificate of Occupancy, and receive a
            tamper-proof verification report in seconds.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <input
              type="text"
              placeholder="Parcel ID / Survey No."
              className="p-3 rounded-lg bg-white bg-opacity-10 border border-green-500 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 flex-grow"
              value={parcelId}
              onChange={(e) => setParcelId(e.target.value)}
            />
            <input
              type="text"
              placeholder="Address / LGA"
              className="p-3 rounded-lg bg-white bg-opacity-10 border border-green-500 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 flex-grow"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <button
              onClick={handleVerify}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition duration-300"
            >
              <FiSearch /> Verify
            </button>
          </div>
        </div>

        {/* Right Section - Bigger Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-12 lg:mt-0">
          <div className="relative rounded-xl shadow-2xl overflow-hidden max-w-[600px] w-full border border-green-500">
            <img
              src={images.herobg0}
              alt="Hero"
              className="w-full h-full object-cover scale-110"
            />
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div
            id="verification-modal"
            className="relative bg-gradient-to-br from-[#0047AB] to-[#001D4A] p-8 rounded-xl shadow-2xl text-white max-w-lg w-full border border-green-500 overflow-hidden"
          >
            {/* Watermark */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10 text-4xl font-bold text-white pointer-events-none">
              Digital Land Registry Inc.
            </div>

            {/* Close button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-300 hover:text-white text-2xl z-20"
            >
              &times;
            </button>

            {verificationResult ? (
              <>
                {/* Logo + Title */}
                <div className="flex items-center justify-center gap-3 mb-6 relative z-20">
                  <img
                    src={images.logo}
                    alt="Company Logo"
                    className="w-10 h-10"
                  />
                  <h3 className="text-xl font-bold text-gray-100">
                    Verification Result
                  </h3>
                </div>

                {/* Info */}
                <div className="grid grid-cols-2 gap-y-4 gap-x-4 mb-6 relative z-20">
                  <div>
                    <p className="text-green-400 text-sm mb-1">Parcel ID:</p>
                    <p className="text-gray-100 font-medium">
                      {verificationResult.parcelId}
                    </p>
                  </div>
                  <div>
                    <p className="text-green-400 text-sm mb-1">Owner:</p>
                    <p className="text-gray-100 font-medium">
                      {verificationResult.owner}
                    </p>
                  </div>
                  <div>
                    <p className="text-green-400 text-sm mb-1">Tenure:</p>
                    <p className="text-gray-100 font-medium">
                      {verificationResult.tenure}
                    </p>
                  </div>
                  <div>
                    <p className="text-green-400 text-sm mb-1">Status:</p>
                    <div className="flex items-center gap-2">
                      <p className="text-green-400 font-medium">
                        {verificationResult.status}
                      </p>
                      <MdVerified className="text-green-400 text-xl" />
                    </div>
                  </div>
                  <div>
                    <p className="text-green-400 text-sm mb-1">Type:</p>
                    <p className="text-gray-100 font-medium">
                      {verificationResult.type}
                    </p>
                  </div>
                  <div>
                    <p className="text-green-400 text-sm mb-1">Last Updated:</p>
                    <p className="text-gray-100 font-medium">
                      {verificationResult.updatedAt}
                    </p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-green-400 text-sm mb-1">Address:</p>
                    <p className="text-gray-100 font-medium">
                      {verificationResult.address}
                    </p>
                  </div>
                </div>

                {/* Barcode */}
                <div className="flex justify-center mb-6 relative z-20">
                  <Barcode value={verificationResult.parcelId} />
                </div>

                {/* Download PDF */}
                <button
                  onClick={handleDownloadPDF}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition duration-300 relative z-20"
                >
                  <FiDownload /> Download Full Report <FiExternalLink />
                </button>
              </>
            ) : (
              <div className="text-center relative z-20">
                <h3 className="text-2xl font-bold text-red-400 mb-4">
                  Verification Failed!
                </h3>
                <p className="text-lg text-gray-200">
                  No record found for the provided Parcel ID & Address. Please
                  double-check your input.
                </p>
                <button
                  onClick={() => setShowModal(false)}
                  className="mt-6 px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition duration-300"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
