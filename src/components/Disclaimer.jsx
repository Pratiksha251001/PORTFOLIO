import React from "react";

function Disclaimer({ darkMode }) {
  return (
    <div className={`py-32 px-8 min-h-screen transition-colors duration-500 ${darkMode ? 'bg-[#0d1117] text-white' : 'bg-[#f8fafc] text-slate-900'}`}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-10 text-[#11d3bb] tracking-tight">Disclaimer</h1>
        <div className={`space-y-8 text-lg leading-relaxed ${darkMode ? 'text-gray-400' : 'text-slate-600'}`}>
          <p>
            The information provided on this website is for general informational purposes only. 
            While we strive to provide accurate and up-to-date information, we make no representations 
            or warranties of any kind, express or implied, about the completeness, accuracy, reliability, 
            suitability, or availability of the website or the information, products, services, or 
            related graphics contained on the website.
          </p>
          
          <div className="space-y-4">
            <h2 className={`text-2xl font-bold ${darkMode ? 'text-[#f02e65]' : 'text-[#f02e65]'}`}>Limitation of Liability</h2>
            <p>
              In no event will we be liable for any loss or damage including without limitation, 
              indirect or consequential loss or damage, or any loss or damage whatsoever arising 
              from loss of data or profits arising out of, or in connection with, the use of this website.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className={`text-2xl font-bold ${darkMode ? 'text-[#f02e65]' : 'text-[#f02e65]'}`}>External Links</h2>
            <p>
              Through this website, you are able to link to other websites which are not under our control. 
              We have no control over the nature, content, and availability of those sites. 
              The inclusion of any links does not necessarily imply a recommendation or endorse 
              the views expressed within them.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Disclaimer;
