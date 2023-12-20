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
          className='slide-inX z-20'
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0 }}
          exit={{ scaleX: 1 }}
          transition={{ duration: 1, ease: [0.2, 0.2, 0.1, 1] }}
        />
        <motion.div
          className='slide-outX flex min-h-screen items-center justify-center relative z-20'
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
          <div className='col-start-1 col-span-2 relative'>
            <h1 className='text-5xl font-caveat absolute top-1/3 right-[50%]'>
              Easy. Affordable. Delicious.
            </h1>
          </div>
          <div className='col-start-3 col-span-1 flex items-center justify-center min-h-screen'>
            {/* <div
              className='
              w-full bg-gray-400 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 m-10 border-4 border-gray-400'
            >
              <div className='flex flex-col justify-center items-center p-10 gap-5'>
                <div className='w-[350px] h-[350px] overflow-hidden rounded-full relative'>
                  <Image
                    src='/danielle7.JPG'
                    alt='Danielle Pauls Picture'
                    width={350}
                    height={350}
                    className='absolute -top-16'
                  />
                </div>
                <p className='text-black text-center text-xl tracking-widest'>
                  My name is Danielle Pauls and I'm cool and stuff here's just a
                  quick little section introducing myself, idk.
                </p>
              </div>
            </div> */}
          </div>
        </main>
        <div className='custom-shape-divider-bottom-1703050490'>
          <svg
            data-name='Layer 1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1200 120'
            preserveAspectRatio='none'
          >
            <path
              d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z'
              opacity='.25'
              className='shape-fill'
            ></path>
            <path
              d='M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z'
              opacity='.5'
              className='shape-fill'
            ></path>
            <path
              d='M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z'
              className='shape-fill'
            ></path>
          </svg>
        </div>
      </motion.div>
      <section className='min-h-screen bg-[#70b959] flex justify-center items-center'>
        <motion.div
          className='text-5xl text-white'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
        >
          hi
        </motion.div>
      </section>
      <section className='min-h-screen bg-green-300'></section>
    </AnimatePresence>
  );
}
