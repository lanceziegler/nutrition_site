'use client';

import { motion } from 'framer-motion';

const About = () => {
  return (
    <main className='flex justify-center items-center min-h-screen bg-red-600'>
      <div className='text-white text-5xl'>About</div>
      <motion.div
        className='slide-inY'
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        // transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        transition={{ duration: 1, ease: [0.6, 0.2, 0.26, 1] }}
      />
      <motion.div
        className='slide-outY'
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        // transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        transition={{ duration: 1, ease: [0.6, 0.2, 0.26, 1] }}
      />
    </main>
  );
};

export default About;
