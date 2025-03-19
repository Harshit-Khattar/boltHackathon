import React from 'react';
import { ArrowRight, Calendar, Trophy, Users } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent"></div>
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          <span className="text-indigo-400 font-semibold text-lg tracking-wider">THE FUTURE OF INNOVATION</span>
        </div>
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tight">
          The World's Largest
          <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
            Hackathon
          </span>
        </h1>
        
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <div className="flex items-center text-gray-300">
            <Calendar className="w-6 h-6 mr-2 text-indigo-400" />
            <span>Virtual Event</span>
          </div>
          <div className="flex items-center text-gray-300">
            <Trophy className="w-6 h-6 mr-2 text-indigo-400" />
            <span>$1M+ in Prizes</span>
          </div>
          <div className="flex items-center text-gray-300">
            <Users className="w-6 h-6 mr-2 text-indigo-400" />
            <span>Global Community</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold text-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] overflow-hidden">
            <span className="relative z-10 flex items-center">
              Register Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          <button className="px-10 py-5 border-2 border-indigo-500/30 text-white rounded-full font-semibold text-xl transition-all duration-300 hover:border-indigo-400 hover:bg-indigo-500/10">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 