'use client';
import Skills from './components/Skills';
import { motion, useScroll, AnimatePresence, delay } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  const { scrollYProgress } = useScroll();

  //TODO Make button do small *pop* once when hovered over

  return (
    <main>
      <Image
        src='/kitchen2.jpg' // Replace with the path to your image file
        alt='Background Image'
        layout='fill'
        objectFit='cover'
        style={{ opacity: 0.4}}
        draggable={false}
        className='-z-50'
      />

      {/* <motion.div
        style={{ scaleX: scrollYProgress }}
        className='progress-bar'
      /> */}
      <motion.div
        className='slide-inX'
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        transition={{ duration: 1, ease: [0.2, 0.2, 0.1, 1] }}
      />
      <motion.div
        className='slide-outX flex min-h-screen items-center justify-center relative'
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 0 }}
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
}
