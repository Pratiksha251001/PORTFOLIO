import React from "react";

function PrivacyPolicy({ darkMode }) {
  return (
    <div className={`py-32 px-8 min-h-screen transition-colors duration-500 ${darkMode ? 'bg-[#0d1117] text-white' : 'bg-[#f8fafc] text-slate-900'}`}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-10 text-[#11d3bb] tracking-tight">Privacy Policy</h1>
        <div className={`space-y-8 text-lg leading-relaxed ${darkMode ? 'text-gray-400' : 'text-slate-600'}`}>
          <p>
            Your privacy is important to us. This Privacy Policy explains how we collect, 
            use, and protect your information.
          </p>
          
          <div className="space-y-4">
            <h2 className={`text-2xl font-bold ${darkMode ? 'text-[#f02e65]' : 'text-[#f02e65]'}`}>Information Collection</h2>
            <p>
              We only collect information that you provide voluntarily through our contact form, 
              such as your name and email address.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className={`text-2xl font-bold ${darkMode ? 'text-[#f02e65]' : 'text-[#f02e65]'}`}>Use of Information</h2>
            <p>
              The information we collect is used solely to respond to your inquiries and 
              improve our services. We do not sell or share your personal information with third parties.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className={`text-2xl font-bold ${darkMode ? 'text-[#f02e65]' : 'text-[#f02e65]'}`}>Cookies</h2>
            <p>
              This website may use cookies to enhance your browsing experience. 
              You can choose to disable cookies in your browser settings.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className={`text-2xl font-bold ${darkMode ? 'text-[#f02e65]' : 'text-[#f02e65]'}`}>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
