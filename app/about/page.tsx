'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  return (
    <main className='flex justify-center items-center min-h-screen'>
      <div className='text-5xl'>About</div>
      <motion.div
        className='slide-inY'
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        // transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        transition={{ duration: 1, ease: [0.6, 0.2, 0.26, 1] }}
      />
      <motion.div
        className='slide-outY flex min-h-screen items-center justify-center relative'
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        // transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        transition={{ duration: 1, ease: [0.2, 0.2, 0.1, 1], delay: 0.2 }}
      >
        <div
          className='bg-white border-black border-2 rounded-full absolute'
          style={{ width: '11rem', height: '11rem' }}
        ></div>
        <div className='relative'>
          <Image
            src='/logo.png'
            width={140}
            height={10}
            alt='DP Nutrition Logo'
          />
        </div>
      </motion.div>
    </main>
  );
};

export default About;
