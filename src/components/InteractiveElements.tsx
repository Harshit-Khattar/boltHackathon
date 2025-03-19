import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUp, Sparkles, Code, Zap } from 'lucide-react';

const InteractiveElements: React.FC = () => {
  const { scrollY } = useScroll();
  const [showScrollTop, setShowScrollTop] = useState(false);

  const y = useTransform(scrollY, [0, 1000], [0, 100]);
  const opacity = useTransform(scrollY, [0, 1000], [1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Elements */}
      <motion.div
        style={{ y, opacity }}
        className="fixed right-8 top-1/2 transform -translate-y-1/2 space-y-4 z-50"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-sm flex items-center justify-center cursor-pointer group"
        >
          <Sparkles className="w-6 h-6 text-blue-400 group-hover:text-blue-300" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-sm flex items-center justify-center cursor-pointer group"
        >
          <Code className="w-6 h-6 text-indigo-400 group-hover:text-indigo-300" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-sm flex items-center justify-center cursor-pointer group"
        >
          <Zap className="w-6 h-6 text-blue-400 group-hover:text-blue-300" />
        </motion.div>
      </motion.div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: showScrollTop ? 1 : 0, scale: showScrollTop ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300 z-50"
      >
        <ArrowUp className="w-6 h-6 text-white" />
      </motion.button>

      {/* Interactive Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"
        />
      </div>
    </>
  );
};

export default InteractiveElements; 