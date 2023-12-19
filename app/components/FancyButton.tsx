'use client';
import { stagger, useAnimate, motion } from 'framer-motion';
import { useState } from 'react';
import { IconArrowRight } from '@tabler/icons-react';
import Link from 'next/link';
import { once } from 'events';
interface propTypes {
  text: string;
  href?: string;
  arrow?: any;
}

const FancyButton = ({ text, href, arrow }: propTypes) => {
  // scope is a ref, needs to be set to parents of things we want to animate
  const [scope, animate] = useAnimate();
  const [animated, setAnimated] = useState(false);

  const handleButtonClick = () => {
    animate([
      ['.letter', { y: -32 }, { duration: 0.2, delay: stagger(0.05) }],
      // at "<" tells it to run at the exact same time instead of after
      // can also att "0.5" and it will run half a second before the previous
      ['.buttonLink', { scale: 0.9 }, { duration: 0.1, at: '<' }],
      ['.buttonLink', { scale: 1.1 }, { duration: 0.1 }],
      ['.buttonLink', { scale: 1 }, { duration: 0.1 }],
      // We don't want visitors to see this reset, thus short duration
      //at: 0.5 has it delay its reset to prevent stutter
      ['.letter', { y: 0 }, { duration: 0.000001, at: 0.5 }],
    ]);
  };

  const handleMouseOver = () => {
    if (!animated) {
      setAnimated(true);
      animate([
        ['.buttonLink', { scale: 1.02 }, { duration: 0.1 }],
        ['.buttonLink', { y: -2.5, rotate: '-2deg' }, { duration: 0.2 }],
        ['.buttonLink', { y: 2, rotate: '1deg' }, { duration: 0.1 }],
        ['.buttonLink', { y: -0.5 }, { duration: 0.15, delay: 0.1, at: '<' }],
        ['.buttonLink', { y: 0, rotate: '-.9deg' }, { duration: 0.2 }],
        ['.buttonLink', { y: 0, rotate: '.6deg' }, { duration: 0.05 }],
        ['.buttonLink', { y: 0, rotate: '0deg' }, { duration: 0.05 }],
      ]);
    }
  };
  const handleMouseOverContact = () => {
    if (!animated) {
      setAnimated(true);
      animate([
        ['.arrow', { x: 7 }, { duration: 0.5 }],
        ['.buttonLink', { x: 3 }, { at: '<' }],
        [
          '.buttonLink',
          { background: '#d3f6c8', borderColor: '#70b959' },
          { at: '<', duration: 0.2 },
        ],
      ]);
    }
  };

  function generateRandomNumber(min: number, max: number) {
    const randomDecimal = Math.random();
    const randomNumber = min + randomDecimal * (max - min);

    return randomNumber;
  }

  const handleMouseLeave = () => {
    setAnimated(false);
    animate([['.buttonLink', { scale: 1 }]]);
  };

  const handleMouseLeaveContact = () => {
    setAnimated(false);
    animate([
      ['.arrow', { x: 0 }],
      ['.buttonLink', { x: 0 }, { at: '<' }],
      [
        '.buttonLink',
        { background: 'white', borderColor: '#9bd787' },
        { duration: 1.7 },
      ],
    ]);
  };

  //hover:bg-green-100
  //! ANIMATE PRESENCE FOR TRANSITIONING BETWEEN CLICKED THINGS
  return (
    <motion.div ref={scope} whileTap={{ scale: 0.95 }}>
      <Link
        onClick={handleButtonClick}
        onMouseOver={!arrow ? handleMouseOver : handleMouseOverContact}
        onMouseLeave={!arrow ? handleMouseLeave : handleMouseLeaveContact}
        className={`buttonLink text-2xl ${
          !arrow
            ? 'rounded-full border-2 border-black greenWipe'
            : 'rounded-md border-4 border-[#9bd787] shadow-md'
        } px-6 py-2 text-black transition-colors flex items-center justify-between gap-2 bg-gray-100`}
        href={href || ''}
      >
        <span className='sr-only'>{text}</span>
        {/** Not read to screen reader */}
        <span
          className='h-8 overflow-hidden flex items-center justify-center'
          aria-hidden
        >
          {text.split('').map((letter, index) => (
            //Needs to be inline-block to be translated. Inline cannot translate.
            <span
              data-letter={letter}
              className='letter inline-block relative h-8 after:h-8 after:absolute after:left-0 after:top-full after:content-[attr(data-letter)] leading-8 font-quicksand font-bold'
              key={`${letter}-${index}`}
            >
              {letter}
            </span>
          ))}
        </span>
        {arrow ? (
          <span className='arrow'>
            <IconArrowRight />
          </span>
        ) : null}
      </Link>
    </motion.div>
  );
};

export default FancyButton;
