import React, { useState } from 'react';
import { Code2, Cpu, Brain, Rocket, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const PrizesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const prizes = [
    {
      title: "Best Code",
      amount: "$500,000",
      icon: <Code2 className="w-5 h-5" />,
      color: "blue",
      description: "Awarded to the team that demonstrates exceptional code quality, maintainability, and innovation in their implementation.",
      code: `// Best Code Prize
function evaluateCode() {
  const criteria = {
    quality: "exceptional",
    maintainability: "high",
    innovation: "groundbreaking"
  };
  
  return {
    prize: "$500,000",
    recognition: "Best Code Award",
    impact: "Industry Standard"
  };
}`
    },
    {
      title: "AI Innovation",
      amount: "$250,000",
      icon: <Brain className="w-5 h-5" />,
      color: "purple",
      description: "Recognizing groundbreaking applications of artificial intelligence and machine learning in solving real-world problems.",
      code: `// AI Innovation Prize
class AIInnovation {
  constructor() {
    this.prize = "$250,000";
    this.focus = "AI/ML Excellence";
  }

  evaluate(project) {
    return {
      innovation: project.aiInnovation,
      impact: project.realWorldImpact,
      technical: project.technicalExcellence
    };
  }
}`
    },
    {
      title: "System Design",
      amount: "$150,000",
      icon: <Cpu className="w-5 h-5" />,
      color: "indigo",
      description: "For projects that showcase exceptional system architecture, scalability, and technical excellence.",
      code: `// System Design Prize
interface SystemArchitecture {
  prize: "$150,000";
  requirements: {
    scalability: "high",
    reliability: "99.99%",
    performance: "optimal"
  };
  
  evaluateArchitecture(): {
    design: "excellent",
    implementation: "robust",
    scalability: "proven"
  };
}`
    },
    {
      title: "Tech Breakthrough",
      amount: "$100,000",
      icon: <Rocket className="w-5 h-5" />,
      color: "cyan",
      description: "Awarded to the most innovative and disruptive technological solution that pushes the boundaries of what's possible.",
      code: `// Tech Breakthrough Prize
const breakthrough = {
  prize: "$100,000",
  category: "Innovation",
  
  evaluate() {
    return {
      innovation: "revolutionary",
      impact: "disruptive",
      potential: "unlimited"
    };
  }
};`
    }
  ];

  return (
    <section id="prizes" className="relative min-h-screen py-24 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
            Prizes
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto"><br></br>
            Showcase your coding skills and compete for amazing prizes
          </p>
        </div>

        <div className="bg-[#0d1424] rounded-xl border border-blue-500/30 overflow-hidden h-[700px]">
          {/* IDE Header */}
          <div className="bg-[#0a0f1f] border-b border-blue-500/30 p-2 flex items-center">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
            </div>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-blue-500/30">
            {prizes.map((prize, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center space-x-2 px-4 py-2 border-r border-blue-500/30 transition-colors ${
                  activeTab === index
                    ? `bg-[#0d1424] text-${prize.color}-400`
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {prize.icon}
                <span className="text-sm font-medium">{prize.title}</span>
                <X className="w-4 h-4 opacity-50 hover:opacity-100" />
              </button>
            ))}
          </div>

          {/* File Content */}
          <div className="p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{prizes[activeTab].title}</h3>
                  <div className={`text-3xl font-bold text-${prizes[activeTab].color}-400`}>
                    {prizes[activeTab].amount}
                  </div>
                </div>
                
                <p className="text-gray-400 text-lg">
                  {prizes[activeTab].description}
                </p>

                <div className="bg-[#0a0f1f] rounded-lg p-6 font-mono text-sm overflow-x-auto">
                  <pre className="text-gray-300">
                    <code>{prizes[activeTab].code}</code>
                  </pre>
                </div>
              </motion.div>
            </AnimatePresence>
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

export default PrizesSection;