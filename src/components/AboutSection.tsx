import React, { useEffect, useRef } from 'react';
import { Users, Code, Globe } from 'lucide-react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="relative min-h-screen py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
          About the Event
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="reveal opacity-0 transition-all duration-700 delay-100">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Global Community</h3>
              <p className="text-gray-400">Join thousands of developers from around the world in this groundbreaking virtual hackathon experience.</p>
            </div>
          </div>

          <div className="reveal opacity-0 transition-all duration-700 delay-200">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-indigo-500/10 flex items-center justify-center mb-6">
                <Code className="w-8 h-8 text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Innovation Focus</h3>
              <p className="text-gray-400">Build revolutionary projects using cutting-edge technologies and compete for incredible prizes.</p>
            </div>
          </div>

          <div className="reveal opacity-0 transition-all duration-700 delay-300">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Networking</h3>
              <p className="text-gray-400">Connect with industry leaders, mentors, and fellow developers to expand your professional network.</p>
            </div>
          </div>
        </div>
<br></br><br></br>
<br></br>
<br></br>

        {/* Additional Content */}
        <div className="mt-24 text-center max-w-3xl mx-auto">
          <div className="reveal opacity-0 transition-all duration-700 delay-400">
            <p className="text-gray-400 text-lg">
            Welcome to the World's Largest Hackathon—a groundbreaking virtual event that brings together innovators, developers, and creators from around the globe. With over $1 million in prizes, participants have the freedom to explore diverse themes, pushing the boundaries of technology and creativity. Our esteemed sponsors include Supabase, Netlify, Cloudflare, Sentry, Loops, and the Algorand Foundation, with more to be announced. A panel of distinguished judges, comprising industry leaders and visionaries, will evaluate the projects, ensuring a high standard of excellence. Join us in this unparalleled opportunity to collaborate, innovate, and showcase your talents on a global stage.


</p>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -right-1/4 w-1/2 h-1/2 bg-blue-500/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/3 -left-1/4 w-1/2 h-1/2 bg-indigo-500/5 rounded-full blur-[100px]"></div>
      </div>
    </section>
  );
};

export default AboutSection;