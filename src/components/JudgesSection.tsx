import React from 'react';

interface Judge {
  name: string;
  role: string;
  image: string;
  bio: string;
}

const judges: Judge[] = [
  {
    name: "Dr. Sarah Chen",
    role: "AI Research Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200",
    bio: "Leading AI researcher with 15+ years of experience in machine learning and neural networks."
  },
  {
    name: "Alex Rodriguez",
    role: "Tech Entrepreneur",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200",
    bio: "Serial entrepreneur who has founded multiple successful tech startups."
  },
  {
    name: "Dr. Maya Patel",
    role: "Innovation Lead",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200",
    bio: "Specializes in emerging technologies and their impact on society."
  }
];

const JudgesSection = () => {
  return (
    <section id="judges" className="relative py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
          Meet Our Judges
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {judges.map((judge, index) => (
            <div
              key={index}
              className="group relative transform transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative bg-[#0d1424] border border-blue-900/30 rounded-2xl p-8 h-full">
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-6 ring-2 ring-blue-500/50 group-hover:ring-blue-400 transition-all">
                    <img
                      src={judge.image}
                      alt={judge.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{judge.name}</h3>
                  <p className="text-blue-400 mb-4">{judge.role}</p>
                  <p className="text-gray-400">{judge.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JudgesSection;