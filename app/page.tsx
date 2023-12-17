'use client';
import Skills from './components/Skills';
import { motion, useScroll, AnimatePresence } from 'framer-motion';

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <main className='bg-blue-600'>
      {/* <motion.div
        style={{ scaleX: scrollYProgress }}
        className='progress-bar'
      /> */}
      <div className='flex flex-col items-center justify-center min-h-screen gap-2'>
        <h1 className='font-quicksand text-5xl text-white'>Danielle Ziegler</h1>
        <Skills />
        {/* <Image src='/danielle2.JPG' alt='danielle' width={700} height={700}/> */}
      </div>
      <motion.div
        className='slide-inX'
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        transition={{ duration: 1, ease: [0.6, 0.2, 0.26, 1] }}
      />
      <motion.div
        className='slide-outX'
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: 1, ease: [0.6, 0.2, 0.26, 1] }}
      />
    </main>
  );
}
