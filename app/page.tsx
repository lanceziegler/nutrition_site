'use client';
import Skills from './components/Skills';
import {
  motion,
  useScroll,
  AnimatePresence,
  delay,
  scroll,
  stagger,
  useAnimate,
} from 'framer-motion';
import { useEffect, useState, useContext } from 'react';
import { NutritionContext } from './libs/NutritionProvider';
import Image from 'next/image';
import ServiceCard from './components/ServiceCard';
import ContactModal from './components/ContactModal';

function CheckIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='#70b959'
      className='CheckIcon'
      style={{ width: '50px', height: '50px' }}
    >
      <motion.path
        // initial={{ opacity: 0, pathLength: 0 }}
        // animate={{ opacity: 1, pathLength: 1 }}
        exit={{ pathLength: 0 }}
        transition={{
          type: 'spring',
          stiffness: 35,
          duration: 0.01,
          delay: 1,
          ease: 'easeOut',
        }}
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M4.5 12.75l6 6 10-16.5'
      />
    </svg>
  );
}

const draw = {
  hidden: { pathLength: 0 },
  visible: (i: any) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      transition: {
        pathLength: { delay, type: 'spring', duration: 1.5, bounce: 0 },
      },
    };
  },
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const [scope, animate] = useAnimate();
  const { contactModalVisible, setContactModalVisible } =
    useContext(NutritionContext)!;

  //TODO: Animate Presence when changing pages
  useEffect(() => {
    animate([
      [
        'li span',
        { opacity: 1, scale: 1, filter: 'blur(0px)' },
        { delay: stagger(0.4, { startDelay: 1 }) },
      ],
    ]);
  }, [animate]);

  return (
    <div>
      <AnimatePresence>
        {contactModalVisible && <ContactModal key='modal' />}
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className='frontpage'
      >
        <Image
          src='/kitchen2.jpg'
          alt='Background Image'
          layout='fill'
          style={{ opacity: 0.4, objectFit: 'cover' }}
          draggable={false}
          className='-z-50'
        />
        {/* <motion.div
          style={{ scaleX: scrollYProgress }}
          className='progress-bar z-50'
        /> */}
        <motion.div
          className='slide-inX z-20'
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0 }}
          exit={{ scaleX: 1 }}
          transition={{ duration: 1, ease: [0.2, 0.2, 0.1, 1] }}
        />
        <motion.div
          className='slide-outX flex items-center justify-center relative z-20'
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
        {/******************************************* SECTION 1 *********************************************/}
        <main className='grid grid-cols-2 min-h-screen'>
          <div className='col-start-1 col-span-1 flex justify-center items-center'>
            <motion.div
              className='relative'
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <p className='bg-white absolute -top-9 font-poppins tracking-wide text-2xl py-3 px-10 rounded-tr-full select-none'>
                Custom plans that are:
              </p>
              <motion.ul
                ref={scope}
                className='p-5 bg-white rounded-3xl rounded-l-none shadow-2xl flex select-none gap-2'
              >
                {Array.from(['Easy', 'Affordable', 'Delicious']).map(
                  (item, i) => (
                    <li
                      key={`${item}-${i}`}
                      className='flex items-center gap-2'
                    >
                      <h1 className='text-6xl font-caveat'>{item}</h1>
                      <motion.span
                        initial={{
                          opacity: 0,
                          scale: 0.3,
                          filter: 'blur(20px)',
                        }}
                      >
                        <CheckIcon />
                      </motion.span>
                    </li>
                  )
                )}
              </motion.ul>
            </motion.div>
          </div>
          <div className='col-start-2 col-span-1 flex items-center justify-center'>
            <div>
              <motion.div
                className='flex flex-col justify-center items-center p-10 gap-5'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                <motion.div
                  initial={{ filter: 'blur(30px)' }}
                  animate={{ filter: 'blur(0px)' }}
                  transition={{
                    delay: 2.1,
                    duration: 3,
                    type: 'spring',
                    stiffness: 45,
                  }}
                  className='spin bg-gradient-to-t from-green-100 to-[#70b959] absolute rounded-full w-[380px] h-[380px] shadow-xl'
                ></motion.div>
                <div className='w-[350px] h-[350px] overflow-hidden rounded-full relative'>
                  <Image
                    src='/danielle7.JPG'
                    alt='Danielle Pauls Picture'
                    width={350}
                    height={350}
                    className='absolute -top-16 z-10'
                    draggable={false}
                    priority
                  />
                </div>
                <div className='bg-white px-5 py-2 text-center rounded-3xl shadow-2xl absolute z-30 font-poppins bottom-[22%] select-none'>
                  <h2 className='text-2xl'>Danielle Pauls</h2>
                  <h3 className='text-md text-[#70b959]'>
                    Nutrition Consultant
                  </h3>
                </div>
              </motion.div>
            </div>
          </div>
        </main>
        <div className='custom-shape-divider-bottom-1703050490'>
          <motion.svg
            data-name='Layer 1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1200 120'
            preserveAspectRatio='none'
            initial='hidden'
            animate='visible'
          >
            <motion.path
              d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z'
              opacity='.25'
              className='shape-fill'
              variants={draw}
              custom={2}
            ></motion.path>
            <motion.path
              d='M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z'
              opacity='.5'
              className='shape-fill'
              variants={draw}
              custom={3}
            ></motion.path>
            <motion.path
              d='M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z'
              className='shape-fill'
              variants={draw}
              custom={4}
            ></motion.path>
          </motion.svg>
        </div>
      </motion.div>
      {/******************************************* SECTION 2 *********************************************/}
      <section className='bg-[#70b959] grid-rows-2'>
        <div className='row-start-1 row-span-1 flex justify-center'>
          <motion.h1
            className='text-5xl text-white m-10 p-5 font-quicksand'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            What we can build together
          </motion.h1>
        </div>
        <div className='row-start-2 row-span-1 bg-[#70b959] flex justify-center gap-10 pt-7 pb-48 relative'>
          <div className='custom-shape-divider-bottom-1703196153'>
            <svg
              data-name='Layer 1'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 1200 120'
              preserveAspectRatio='none'
            >
              <path
                d='M649.97 0L599.91 54.12 550.03 0 0 0 0 120 1200 120 1200 0 649.97 0z'
                className='shape-fill'
              ></path>
            </svg>
          </div>
          {Array.from([
            {
              title: 'Personalized Plans',
              text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, quis.',
              bullets: [
                { content: 'Dietary Assessment', num: 0 },
                { content: 'Personalized Nutrition Plans', num: 1 },
                { content: 'Nutritional Counseling', num: 2 },
              ],
              color: 'text-[#59A0B9]',
              image: '',
            },
            {
              title: 'Specialized Nutrition',
              text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, quis.',
              bullets: [
                { content: 'Medical Nutrition Therapy', num: 3 },
                { content: 'Sports Nutrition', num: 4 },
                { content: 'Allergy and Intolerance Management', num: 5 },
              ],
              color: 'text-[#d00808]',
              image: '',
            },
            {
              title: 'Education & Support',
              text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, quis.',
              bullets: [
                { content: 'Nutrition Education', num: 6 },
                { content: 'Recipe Development', num: 7 },
                { content: 'Behavioral Counseling', num: 8 },
              ],
              color: 'text-[#875FCF]',
              image: '',
            },
          ]).map((card, i) => (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              key={`${card}-${i}`}
              className='font-quicksand'
            >
              <ServiceCard
                title={card.title}
                text={card.text}
                bullets={card.bullets}
                color={card.color}
                image={card.image}
              />
            </motion.div>
          ))}
        </div>
      </section>
      {/******************************************* SECTION 3 *********************************************/}
      <section className='min-h-screen bg-white relative'></section>
    </div>
  );
}
