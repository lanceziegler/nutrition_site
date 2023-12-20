'use client';
import Skills from './components/Skills';
import {
  motion,
  useScroll,
  AnimatePresence,
  delay,
  scroll,
} from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const { scrollYProgress } = useScroll();
  //TODO: Animate Presence when changing pages

  return (
    <AnimatePresence>
      <motion.div
        key='home'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className='min-h-screen frontpage'
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
        <main className='grid grid-cols-3 grid-flow-row'>
          <div className='col-start-1 col-span-2 flex items-center justify-center min-h-screen'></div>
          <div className='col-start-3 col-span-1 flex items-center justify-center min-h-screen bg-green-100'>
            <div className='flex flex-col justify-center items-center p-10 gap-5'>
              <Image
                src='/danielle7.JPG'
                alt='Danielle Pauls Picture'
                width={350}
                height={350}
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
                molestiae. Facere suscipit impedit cupiditate dolores magni!
              </p>
            </div>
          </div>
        </main>
      </motion.div>
      <section className='min-h-screen bg-blue-300'></section>
      <section className='min-h-screen bg-green-300'></section>
    </AnimatePresence>
  );
}
