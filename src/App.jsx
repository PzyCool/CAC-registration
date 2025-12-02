import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

// Import images
import logo from './assets/domihive-logo-2.png';
import icon from './assets/domihive-lcon.png';

// Director images - CEO
import prosperSignature from './assets/prosper-signature.jpg';
import prosperPassport from './assets/prosper-passport-photo.jpg';
import prosperId1 from './assets/prosper-national-id-1.jpg';
import prosperId2 from './assets/prosper-passport-id-2.jpg';

// COO
import emmaSignature from './assets/emma-signature.jpg';
import emmaPassport from './assets/emma-passport-photo.jpg';
import emmaId from './assets/emma-national-id.jpg';

// CPO
import olamideSignature from './assets/olamide-signature.jpg';
import olamidePassport from './assets/olamide-passport-photo.jpg';
import olamideId from './assets/olamide-national-id.jpg';

// CTO
import melvinSignature from './assets/melvin-signature.jpg';
import melvinPassport from './assets/melvin-passport-photo.jpg';
import melvinId1 from './assets/melvin-national-id-1.jpg';
import melvinId2 from './assets/melvin-national-id-2.jpg';

// CMO
import briansSignature from './assets/brians-signatures.jpg';
import briansPassport from './assets/brians-passport-photo.jpg';
import brainsId from './assets/brains-national-id.jpg';

// CSO
import civviesSignature from './assets/civvies-signature.jpg';
import civviesPassport from './assets/civvies-passport-photo.jpg';
import civviesId from './assets/civvies-national-id.jpg';

// Company Secretary
import faithSignature from './assets/faith-signature.jpg';
import faithPassport from './assets/faith-passport-photo.jpg';
import faithId from './assets/faith-national-id.jpg';

// Witness
import witnessSignature from './assets/witness-signature.jpg';
import witnessPassport from './assets/witness-passport-photo.jpg';
import witnessId from './assets/witness-national-id.jpg';

// Director data array
const directors = [
  {
    id: 1,
    position: 'Chief Executive Officer (CEO)',
    name: 'Prosper Ovokeroye Matarh Arharhire',
    state: 'Delta State',
    dob: '08 Nov 2002',
    gender: 'Male',
    phone: '+234 8103279654',
    email: 'prosperoa12345@gmail.com',
    address: 'No.11, Jenriyin Estate, Ibadan, Oyo State. LGA: Ibadan North East',
    occupation: 'Software Engineer, CEO BBW Multi-Skills Ltd, COO SPP Mat-arh Ltd, Project Manager & Construction Engineer',
    attachments: [
      { type: 'Signature', src: prosperSignature, filename: 'prosper-signature.jpg' },
      { type: 'Passport Photo', src: prosperPassport, filename: 'prosper-passport-photo.jpg' },
      { type: 'National ID', src: prosperId1, filename: 'prosper-national-id-1.jpg' },
      { type: 'National ID', src: prosperId2, filename: 'prosper-passport-id-2.jpg' },
    ]
  },
  {
    id: 2,
    position: 'Chief Operating Officer (COO)',
    name: 'Emmanuel Uchenna Nnebedum',
    state: 'Anambra',
    dob: '17 Dec 2003',
    gender: 'Male',
    phone: '+234 7017102755',
    email: 'emmanuelnnebedum704@gmail.com',
    address: 'Steagles Lodge, Umuchimma, Owerri, Ndioha Street, LGA Awka North. Postal Code 420111',
    occupation: 'Software Engineer & Cyber Security Specialist, Business administrator and data analyst',
    attachments: [
      { type: 'Signature', src: emmaSignature, filename: 'emma-signature.jpg' },
      { type: 'Passport Photo', src: emmaPassport, filename: 'emma-passport-photo.jpg' },
      { type: 'National ID', src: emmaId, filename: 'emma-national-id.jpg' },
    ]
  },
  {
    id: 3,
    position: 'Chief Product Officer (CPO)',
    name: 'Olamide Samuel Oyetayo',
    state: 'Osun',
    dob: '03 July 1989',
    gender: 'Male',
    phone: '+234 9056350523',
    email: 'olamide.oyetayo83@gmail.com',
    address: '13 Saluadeen Street, Ayobo, Ipaja. LGA: Lagos',
    occupation: 'Product Designer & UI/UX',
    attachments: [
      { type: 'Signature', src: olamideSignature, filename: 'olamide-signature.jpg' },
      { type: 'Passport Photo', src: olamidePassport, filename: 'olamide-passport-photo.jpg' },
      { type: 'National ID', src: olamideId, filename: 'olamide-national-id.jpg' },
    ]
  },
  {
    id: 4,
    position: 'Chief Technology Officer (CTO)',
    name: 'Melvin Okievor',
    state: 'Delta',
    dob: '16 Oct 1997',
    gender: 'Male',
    phone: '+234 9060816260',
    email: 'melvinokievor@gmail.com',
    address: 'No. 15 Michael Akpobaro Street, Jakpa Road, Ughelli North, Warri, Delta State. Postal Code 331104',
    occupation: 'Fullstack Mobile App Developer',
    attachments: [
      { type: 'Signature', src: melvinSignature, filename: 'melvin-signature.jpg' },
      { type: 'Passport Photo', src: melvinPassport, filename: 'melvin-passport-photo.jpg' },
      { type: 'National ID (Front)', src: melvinId1, filename: 'melvin-national-id-1.jpg' },
      { type: 'National ID (Back)', src: melvinId2, filename: 'melvin-national-id-2.jpg' },
    ]
  },
  {
    id: 5,
    position: 'Chief Marketing Officer (CMO)',
    name: 'Chukwuemeka Ugwumba Nkama',
    state: 'Ebonyi',
    dob: '10 Nov 1992',
    gender: 'Male',
    phone: '+234 9030562412',
    email: 'chukwuemekankama1@gmail.com',
    address: '56/58 Adeola Estate, Ifako-Ijaiye, Lagos',
    occupation: 'Software Engineer',
    attachments: [
      { type: 'Signature', src: briansSignature, filename: 'brians-signatures.jpg' },
      { type: 'Passport Photo', src: briansPassport, filename: 'brians-passport-photo.jpg' },
      { type: 'National ID', src: brainsId, filename: 'brains-national-id.jpg' },
    ]
  },
  {
    id: 6,
    position: 'Chief Sales Officer (CSO)',
    name: 'Muhideen Olaniyi Yusuf',
    state: 'Lagos',
    dob: '25 Dec 1993',
    gender: 'Male',
    phone: '+234 8024960677',
    email: 'civviesonline@gmail.com',
    address: '10 Okesuna Street, Surulere, Lagos',
    occupation: 'Entrepreneur & Cyber Security Specialist',
    attachments: [
      { type: 'Signature', src: civviesSignature, filename: 'civvies-signature.jpg' },
      { type: 'Passport Photo', src: civviesPassport, filename: 'civvies-passport-photo.jpg' },
      { type: 'National ID', src: civviesId, filename: 'civvies-national-id.jpg' },
    ]
  }
];

// Share structure data
const shareStructure = [
  { founder: 'Prosper Arharhire', position: 'CEO', percentage: '20%', shares: '400,000' },
  { founder: 'Emmanuel Nnebedum', position: 'COO', percentage: '8%', shares: '160,000' },
  { founder: 'Olamide Oyetayo', position: 'CPO', percentage: '8%', shares: '160,000' },
  { founder: 'Melvin Okievor', position: 'CTO', percentage: '8%', shares: '160,000' },
  { founder: 'Chukwuemeka Nkama', position: 'CMO', percentage: '8%', shares: '160,000' },
  { founder: 'Yusuf Muhideen', position: 'CSO', percentage: '8%', shares: '160,000' },
  { founder: 'Company Reserve', position: '—', percentage: '20%', shares: '400,000' },
  { founder: 'ESOP / Staff Pool', position: '—', percentage: '20%', shares: '400,000' },
];

function App() {
  const documentRef = useRef(null);

  // Handle printing
  const handlePrint = () => {
    window.print();
  };

  // Handle PDF download
  const handleDownloadPDF = async () => {
    if (!documentRef.current) return;
    
    const canvas = await html2canvas(documentRef.current, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff'
    });
    
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });
    
    const imgWidth = 210;
    const pageHeight = 297;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;
    let position = 0;
    
    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;
    
    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }
    
    pdf.save('CAC-Registration-Domihive.pdf');
  };

  // Download individual image
  const downloadImage = (imageSrc, filename) => {
    const link = document.createElement('a');
    link.href = imageSrc;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Download logo
  const downloadLogo = () => {
    downloadImage(logo, 'domihive-logo.png');
  };

  // Render director card
  const renderDirectorCard = (director) => (
    <div key={director.id} className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-gray-50 rounded-xl border border-blue-100 shadow-sm">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-blue-800 mb-2">{director.position}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="mb-2"><span className="font-semibold text-gray-700">Name:</span> {director.name}</p>
            <p className="mb-2"><span className="font-semibold text-gray-700">State of Origin:</span> {director.state}</p>
            <p className="mb-2"><span className="font-semibold text-gray-700">Date of Birth:</span> {director.dob}</p>
            <p className="mb-2"><span className="font-semibold text-gray-700">Gender:</span> {director.gender}</p>
          </div>
          <div>
            <p className="mb-2"><span className="font-semibold text-gray-700">Phone:</span> {director.phone}</p>
            <p className="mb-2"><span className="font-semibold text-gray-700">Email:</span> 
              <a href={`mailto:${director.email}`} className="text-blue-600 hover:text-blue-800 ml-1">{director.email}</a>
            </p>
            <p className="mb-2"><span className="font-semibold text-gray-700">Address:</span> {director.address}</p>
            <p className="mb-2"><span className="font-semibold text-gray-700">Occupation:</span> {director.occupation}</p>
          </div>
        </div>
      </div>
      
      <div>
        <h4 className="font-semibold text-gray-700 mb-3 border-b pb-2">Attachments:</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {director.attachments.map((attachment, index) => (
            <div key={index} className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
              <div className="mb-2 h-40 overflow-hidden rounded">
                <img 
                  src={attachment.src} 
                  alt={`${director.name} - ${attachment.type}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm font-medium text-gray-700 mb-2">{attachment.type}</p>
              <button
                onClick={() => downloadImage(attachment.src, attachment.filename)}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-200"
              >
                Download Image
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-4 print:p-0">
      {/* Action Buttons */}
      <div className="fixed top-4 right-4 z-50 flex gap-2 print:hidden">
        <button
          onClick={handlePrint}
          className="bg-gradient-to-r from-gray-700 to-gray-800 text-white px-4 py-2 rounded-lg font-medium shadow-lg hover:from-gray-800 hover:to-gray-900 transition-all duration-200 flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
          </svg>
          Print Document
        </button>
        <button
          onClick={handleDownloadPDF}
          className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg font-medium shadow-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Download As PDF
        </button>
      </div>

      {/* Main Document */}
      <div ref={documentRef} className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl p-8 print:p-8 print:shadow-none print:max-w-none">
        {/* Header with Logo */}
        <div className="text-center mb-8 border-b pb-6">
          <div className="flex justify-center mb-4 cursor-pointer" onClick={downloadLogo}>
            <img 
              src={logo} 
              alt="Domihive Logo" 
              className="h-20 w-auto hover:scale-105 transition-transform duration-200"
            />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">DOCUMENT FOR COMPANY REGISTRATION</h1>
          <h2 className="text-2xl font-bold text-blue-700">Domihive Elite Property Solutions Ltd</h2>
          <p className="text-gray-600 mt-1">Click logo to download</p>
        </div>

        {/* Recipient */}
        <div className="mb-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">To: Rexobe Consult</h3>
          <p className="text-gray-700 mb-1"><span className="font-semibold">Subject:</span> Submission of Full Requirements for CAC Registration (DOMIHIVE PROPERTY SOLUTIONS LTD)</p>
          <p className="text-gray-700"><span className="font-semibold">Company Email:</span> legal@mydomihive.com</p>
        </div>

        {/* Opening Letter */}
        <div className="mb-8 p-6 bg-gray-50 rounded-lg">
          <p className="text-gray-700 leading-relaxed">
            Dear Rexobe Consult,<br /><br />
            Please find below all required information and documents for the complete registration of our company.
          </p>
        </div>

        {/* Section 1: Company Name Options */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-4 border-l-4 border-blue-600 pl-4">1. COMPANY NAME OPTIONS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-r from-blue-100 to-blue-50 rounded-lg border border-blue-200">
              <p className="font-semibold text-blue-700 mb-1">Option 1:</p>
              <p className="text-lg font-bold text-gray-800">Domihive Elite Property Solutions Ltd</p>
            </div>
            <div className="p-4 bg-gradient-to-r from-gray-100 to-gray-50 rounded-lg border border-gray-200">
              <p className="font-semibold text-gray-700 mb-1">Option 2:</p>
              <p className="text-lg font-bold text-gray-800">Domihive Real Estate Management Ltd</p>
            </div>
          </div>
        </div>

        {/* Section 2 & 3: Nature of Business */}
        <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-2xl font-bold text-blue-800 mb-4 border-l-4 border-blue-600 pl-4">2. NATURE OF BUSINESS</h2>
            <div className="p-4 bg-gradient-to-r from-blue-100 to-blue-50 rounded-lg border border-blue-200">
              <p className="text-xl font-bold text-gray-800">Real Estate</p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-blue-800 mb-4 border-l-4 border-blue-600 pl-4">3. SPECIFIC NATURE OF BUSINESS</h2>
            <div className="p-4 bg-gradient-to-r from-blue-100 to-blue-50 rounded-lg border border-blue-200">
              <p className="text-xl font-bold text-gray-800">Property Management</p>
            </div>
          </div>
        </div>

        {/* Section 4: Company Objectives */}
<div className="mb-8">
  <h2 className="text-2xl font-bold text-blue-800 mb-4 border-l-4 border-blue-600 pl-4">4. COMPANY OBJECTIVES</h2>
  <div className="space-y-4">
    <div className="flex gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
      <span className="font-bold text-blue-600 min-w-6">1.</span>
      <p className="text-gray-700">To operate as a full-service Property Management Company, offering management for residential properties, hostels, apartments, commercial spaces, shortlets, and all categories of rentable or leasable properties.</p>
    </div>
    <div className="flex gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
      <span className="font-bold text-blue-600 min-w-6">2.</span>
      <p className="text-gray-700">To engage in real estate activities, including the acquisition, leasing, sale, development, marketing, and brokerage of land, buildings, and property of every kind.</p>
    </div>
    <div className="flex gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
      <span className="font-bold text-blue-600 min-w-6">3.</span>
      <p className="text-gray-700">To provide tenancy solutions, matching tenants with suitable properties, verifying tenants, preparing tenancy agreements, and offering long-term and short-term rental services.</p>
    </div>
    <div className="flex gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
      <span className="font-bold text-blue-600 min-w-6">4.</span>
      <p className="text-gray-700">To manage properties on behalf of landlords and investors, including rent collection, tenant onboarding, tenant support, customer service, maintenance coordination, inspections, and facility oversight.</p>
    </div>
    <div className="flex gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
      <span className="font-bold text-blue-600 min-w-6">5.</span>
      <p className="text-gray-700">To provide end-to-end real estate technology (PropTech) services, including property listing platforms, digital dashboards for landlords and tenants, automated management systems, AI-powered property monitoring, digital payments and rent collection systems, cloud-based documentation, automated reminders, alerts, and workflow tools.</p>
    </div>
    <div className="flex gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
      <span className="font-bold text-blue-600 min-w-6">6.</span>
      <p className="text-gray-700">To develop, maintain, and operate websites, mobile apps, and software platforms dedicated to property listing, property management, real estate automation, and landlord/tenant services.</p>
    </div>
    <div className="flex gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
      <span className="font-bold text-blue-600 min-w-6">7.</span>
      <p className="text-gray-700">To build, license, and sell APIs related to real estate, including property data APIs, verification APIs, pricing APIs, property management APIs, and integration tools for third parties.</p>
    </div>
    <div className="flex gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
      <span className="font-bold text-blue-600 min-w-6">8.</span>
      <p className="text-gray-700">To offer facility management and cleaning services, including routine cleaning, deep cleaning, fumigation, facility upkeep, repairs, and general property maintenance.</p>
    </div>
    <div className="flex gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
      <span className="font-bold text-blue-600 min-w-6">9.</span>
      <p className="text-gray-700">To provide handyman and maintenance services, including plumbing, electrical repairs, carpentry, painting, and general property servicing for properties under management.</p>
    </div>
    <div className="flex gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
      <span className="font-bold text-blue-600 min-w-6">10.</span>
      <p className="text-gray-700">To offer real estate advisory and consulting services, including investment guidance, property documentation support, market research, feasibility studies, digital transformation for real estate projects, and PropTech innovation consulting.</p>
    </div>
    <div className="flex gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
      <span className="font-bold text-blue-600 min-w-6">11.</span>
      <p className="text-gray-700">To import, export, purchase, distribute, or supply building materials, home improvement tools, and property-related equipment.</p>
    </div>
    <div className="flex gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
      <span className="font-bold text-blue-600 min-w-6">12.</span>
      <p className="text-gray-700">To partner, collaborate, or enter joint ventures with real estate developers, property owners, technology companies, or government bodies for property management or PropTech development.</p>
    </div>
    <div className="flex gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
      <span className="font-bold text-blue-600 min-w-6">13.</span>
      <p className="text-gray-700">To establish training programs and digital learning resources for property managers, landlords, facility staff, and PropTech professionals.</p>
    </div>
    <div className="flex gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
      <span className="font-bold text-blue-600 min-w-6">14.</span>
      <p className="text-gray-700">To carry on any business incidental or related to real estate, property management, PropTech, or any commercial activities that support the core purpose of the company.</p>
    </div>
  </div>
</div>

        {/* Section 5: Directors Details */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-6 border-l-4 border-blue-600 pl-4">5. DIRECTORS DETAILS</h2>
          <p className="text-gray-600 mb-6 italic">
            Below are all the directors and their complete CAC-required details (including signatures, passport photos, and ID cards):
          </p>
          {directors.map(renderDirectorCard)}
        </div>

        {/* Section 6: Share Structure */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-4 border-l-4 border-blue-600 pl-4">6. SHARE STRUCTURE (AS AGREED IN FOUNDERS AGREEMENT)</h2>
          <div className="mb-4 p-4 bg-gradient-to-r from-blue-100 to-blue-50 rounded-lg border border-blue-200">
            <p className="font-bold text-lg text-gray-800">
              Authorized Share Capital: ₦2,000,000 (2,000,000 shares @ ₦1 each)
            </p>
          </div>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gradient-to-r from-blue-600 to-blue-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Founder</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Position</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">%</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Shares</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {shareStructure.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{row.founder}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{row.position}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-blue-600">{row.percentage}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">{row.shares}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 7: Company Secretary */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-6 border-l-4 border-blue-600 pl-4">7. COMPANY SECRETARY</h2>
          <div className="p-6 bg-gradient-to-r from-blue-50 to-gray-50 rounded-xl border border-blue-100 shadow-sm">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-blue-800 mb-2">Company Secretary</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="mb-2"><span className="font-semibold text-gray-700">Name:</span> Faith Efe Adjerese</p>
                  <p className="mb-2"><span className="font-semibold text-gray-700">State of Origin:</span> Delta</p>
                  <p className="mb-2"><span className="font-semibold text-gray-700">Date of Birth:</span> 11 June 2002</p>
                  <p className="mb-2"><span className="font-semibold text-gray-700">Gender:</span> Female</p>
                </div>
                <div>
                  <p className="mb-2"><span className="font-semibold text-gray-700">Phone:</span> +234 9166757102</p>
                  <p className="mb-2"><span className="font-semibold text-gray-700">Email:</span> 
                    <a href="mailto:secretary@mydomihive.com" className="text-blue-600 hover:text-blue-800 ml-1">secretary@mydomihive.com</a>
                  </p>
                  <p className="mb-2"><span className="font-semibold text-gray-700">Address:</span> No.17 Imagbon Street, Fadeyi, Lagos State</p>
                  <p className="mb-2"><span className="font-semibold text-gray-700">Occupation:</span> Business Administrator</p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-700 mb-3 border-b pb-2">Attachments:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { type: 'Signature', src: faithSignature, filename: 'faith-signature.jpg' },
                  { type: 'Passport Photo', src: faithPassport, filename: 'faith-passport-photo.jpg' },
                  { type: 'National ID', src: faithId, filename: 'faith-national-id.jpg' },
                ].map((attachment, index) => (
                  <div key={index} className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
                    <div className="mb-2 h-40 overflow-hidden rounded">
                      <img 
                        src={attachment.src} 
                        alt={`Company Secretary - ${attachment.type}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-sm font-medium text-gray-700 mb-2">{attachment.type}</p>
                    <button
                      onClick={() => downloadImage(attachment.src, attachment.filename)}
                      className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-200"
                    >
                      Download Image
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Section 8: Witness Details */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-6 border-l-4 border-blue-600 pl-4">8. WITNESS DETAILS</h2>
          <div className="p-6 bg-gradient-to-r from-blue-50 to-gray-50 rounded-xl border border-blue-100 shadow-sm">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-blue-800 mb-2">Witness</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="mb-2"><span className="font-semibold text-gray-700">Name:</span> Victor Uzoma Ekeator</p>
                  <p className="mb-2"><span className="font-semibold text-gray-700">State of Origin:</span> Abia</p>
                  <p className="mb-2"><span className="font-semibold text-gray-700">Date of Birth:</span> 10 May 1986</p>
                  <p className="mb-2"><span className="font-semibold text-gray-700">Gender:</span> Male</p>
                </div>
                <div>
                  <p className="mb-2"><span className="font-semibold text-gray-700">Phone:</span> +234 8037933012</p>
                  <p className="mb-2"><span className="font-semibold text-gray-700">Email:</span> 
                    <a href="mailto:vickgazamoore@yahoo.com" className="text-blue-600 hover:text-blue-800 ml-1">vickgazamoore@yahoo.com</a>
                  </p>
                  <p className="mb-2"><span className="font-semibold text-gray-700">Address:</span> No. 6 Chief Jerry Eze Lane, Ogborhill Aba</p>
                  <p className="mb-2"><span className="font-semibold text-gray-700">Occupation:</span> Business Merchandise</p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-700 mb-3 border-b pb-2">Attachments:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { type: 'Signature', src: witnessSignature, filename: 'witness-signature.jpg' },
                  { type: 'Passport Photo', src: witnessPassport, filename: 'witness-passport-photo.jpg' },
                  { type: 'National ID', src: witnessId, filename: 'witness-national-id.jpg' },
                ].map((attachment, index) => (
                  <div key={index} className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
                    <div className="mb-2 h-40 overflow-hidden rounded">
                      <img 
                        src={attachment.src} 
                        alt={`Witness - ${attachment.type}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-sm font-medium text-gray-700 mb-2">{attachment.type}</p>
                    <button
                      onClick={() => downloadImage(attachment.src, attachment.filename)}
                      className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-200"
                    >
                      Download Image
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Section 9: Company Office Address */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-4 border-l-4 border-blue-600 pl-4">9. COMPANY OFFICE ADDRESS</h2>
          <div className="p-6 bg-gradient-to-r from-blue-100 to-blue-50 rounded-lg border border-blue-200">
            <p className="text-xl font-bold text-gray-800 text-center">56/58 Adeola Estate, Ifako-Ijaiye, Lagos State, Nigeria.</p>
          </div>
        </div>

        {/* Section 10: Package Items */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-4 border-l-4 border-blue-600 pl-4">10. PACKAGE ITEMS CONFIRMATION</h2>
          <div className="mb-6 p-4 bg-blue-50 rounded-lg">
            <p className="font-semibold text-gray-700">As communicated, the CEO Registration Plan (2 Million Share Capital) includes:</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100 shadow-sm">
              <h3 className="font-bold text-blue-700 mb-3 text-lg">Documents & Deliverables</h3>
              <ul className="space-y-2">
                {['CAC Certificate', 'Status Report', 'Memorandum & Articles of Association', 'Tax Identification Number (TIN)', 'Company Logo Design', 'Staff Onboarding Documents', 'Purchase Receipts (5 booklets)', 'Letterhead (20 pcs)', 'Business Cards (100 pcs for 1 director)', 'Staff ID Cards (6 Directors)', 'Iron Company Seal', 'Framed Certificate', 'One-Year Company Strategic Plan'].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 shadow-sm">
              <h3 className="font-bold text-gray-700 mb-3 text-lg">Staff Onboarding Documents</h3>
              <ul className="space-y-2">
                {['Employee Biodata Form', 'Employee Contract Agreement', 'Employee Offer Letter', 'Employee Payslip Template', 'Guarantor Form', 'Job Description Templates', 'Job Report Sheet', 'Non-Compete Agreement', 'Non-Disclosure Agreement', 'Other templates included in the package'].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-gray-500 mt-1">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="p-4 bg-gradient-to-br from-green-50 to-white rounded-xl border border-green-200 shadow-sm">
              <h3 className="font-bold text-green-700 mb-3 text-lg">Bonus</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span className="text-gray-700">Corporate Account Opening Contact</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 11: Logo Clarification */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-4 border-l-4 border-blue-600 pl-4">11. CLARIFICATION REGARDING LOGO DESIGN</h2>
          <div className="mb-6 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-yellow-200">
            <p className="text-gray-700 mb-4">
              You listed <span className="font-bold">Logo Design</span> as part of the package.
              However, <span className="font-bold text-blue-700">we already have our official company logo prepared</span> (displayed below)
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="text-center">
                <div className="mb-2 p-4 bg-white rounded-lg shadow-inner">
                  <img src={logo} alt="Company Logo" className="h-24 w-auto mx-auto" />
                </div>
                <p className="text-sm text-gray-600 mb-2">Company Logo</p>
                <button
                  onClick={downloadLogo}
                  className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-200"
                >
                  Download Logo
                </button>
              </div>
              
              <div className="text-center">
                <div className="mb-2 p-4 bg-white rounded-lg shadow-inner">
                  <img src={icon} alt="Company Icon" className="h-24 w-auto mx-auto" />
                </div>
                <p className="text-sm text-gray-600 mb-2">Company Icon</p>
                <button
                  onClick={() => downloadImage(icon, 'domihive-icon.png')}
                  className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-200"
                >
                  Download Icon
                </button>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-white rounded-lg border border-blue-200">
              <p className="font-semibold text-gray-700 mb-2">Please confirm whether:</p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">•</span>
                  <span className="text-gray-700">The package price will be <span className="font-bold">recalculated</span> since we do not require logo design, or</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">•</span>
                  <span className="text-gray-700">The price <span className="font-bold">remains the same.</span></span>
                </div>
              </div>
              <p className="mt-4 font-semibold text-gray-700">Kindly advise.</p>
            </div>
          </div>
        </div>

        {/* Additional Note */}
        <div className="mb-8 p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border border-gray-300">
          <h3 className="font-bold text-gray-800 mb-3">Additional Information</h3>
          <p className="text-gray-700 mb-4">
            Additionally, we have drafted a Founders Agreement document, which provides useful context regarding our company’s structure and long-term planning. We would appreciate your guidance on whether including or referencing this document would be beneficial during the business plan development. <br />
            <br />
            Also, please let us know if there is any way you could assist—through your network or influence—in helping us connect with a qualified tech-startup lawyer who can support us in drafting the necessary legal documents. Thank you.
          </p>
          <div className="p-3 bg-white rounded-lg border border-blue-200">
            <p className="text-sm text-gray-600 mb-1">Founders Agreement Reference:</p>
            <a 
              href="https://founders-agreement-doc.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-medium break-all"
            >
              https://founders-agreement-doc.vercel.app
            </a>
            <p className="text-xs text-gray-500 mt-2">
              Note: This document was drafted internally and requires review by a legal professional.
            </p>
          </div>
        </div>

        {/* Final Note */}
        <div className="p-6 bg-gradient-to-r from-blue-50 to-gray-50 rounded-xl border border-blue-200">
          <h3 className="text-xl font-bold text-blue-800 mb-4">FINAL NOTE</h3>
          <p className="text-gray-700 mb-4">
            All director signatures, passport photographs, and identification documents have been attached and labelled clearly according to each director.
          </p>
          <p className="text-gray-700 font-semibold">
            We confirm readiness to proceed immediately once you review and acknowledge receipt of these details.
          </p>
          <p className="mt-6 text-gray-700">Thank you.</p>
          
          <div className="mt-8 pt-6 border-t border-gray-300">
            <p className="text-sm text-gray-500">
              <strong>Generated:</strong> {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;