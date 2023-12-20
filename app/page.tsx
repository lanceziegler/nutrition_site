'use client';
import Skills from './components/Skills';
import { motion, useScroll, AnimatePresence, delay, scroll } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const { scrollYProgress } = useScroll();
  //TODO: Animate Presence when changing pages

  return (
    <AnimatePresence>
      <motion.main
        key='home'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className='min-h-screen'
      >
        <Image
          src='/kitchen2.jpg'
          alt='Background Image'
          layout='fill'
          style={{ opacity: 0.4, objectFit: 'cover' }}
          draggable={false}
          className='-z-50'
        />

        <motion.div
        style={{ scaleX: scrollYProgress }}
        className='progress-bar z-50'
      />
        <motion.div
          className='slide-inX'
          initial={{ scaleX: 1 }}
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
            className='bg-white border-2 rounded-full absolute'
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
      </motion.main>
      <section className='min-h-screen bg-blue-300'></section>
      <section className='min-h-screen bg-green-300'></section>
    </AnimatePresence>
  );
}
