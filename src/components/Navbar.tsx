import React from 'react';

const Navbar: React.FC<{ scrollY: number }> = ({ scrollY }) => {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrollY > 50 ? 'bg-[#0a0f1f]/80 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <style>
        {`
          @keyframes borderGlow {
            0% {
              box-shadow: 0 0 20px rgba(59, 130, 246, 0.5),
                          inset 0 0 20px rgba(59, 130, 246, 0.5);
            }
            50% {
              box-shadow: 0 0 30px rgba(99, 102, 241, 0.7),
                          inset 0 0 30px rgba(99, 102, 241, 0.7);
            }
            100% {
              box-shadow: 0 0 20px rgba(59, 130, 246, 0.5),
                          inset 0 0 20px rgba(59, 130, 246, 0.5);
            }
          }
        `}
      </style>
      <div className="max-w-[2000px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-24">
          <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
            Hackathon
          </div>
          <div className="flex items-center space-x-16">
            <a href="#about" className="text-gray-300 hover:text-white transition-colors text-lg font-medium">About</a>
            <a href="#prizes" className="text-gray-300 hover:text-white transition-colors text-lg font-medium">Prizes</a>
            <a href="#sponsors" className="text-gray-300 hover:text-white transition-colors text-lg font-medium">Sponsors</a>
            <a href="#judges" className="text-gray-300 hover:text-white transition-colors text-lg font-medium">Judges</a>
            <a href="#faq" className="text-gray-300 hover:text-white transition-colors text-lg font-medium">FAQ</a>
            <button style={{padding: '8px 20px'}} className="relative bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-8 py-4 rounded-full flex items-center space-x-2 transition-all duration-300 text-lg font-medium -mt-0.5 animate-[borderGlow_3s_ease-in-out_infinite] hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30">
              <span className="relative z-10">Apply Now</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;