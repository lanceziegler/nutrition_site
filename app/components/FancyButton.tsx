'use client';
import { stagger, useAnimate, motion } from 'framer-motion';
import { useState } from 'react';
import { IconArrowRight } from '@tabler/icons-react';
import Link from 'next/link';
import { once } from 'events';
import { IconHome, IconWoman, IconBallpen } from '@tabler/icons-react';
import { useEffect } from 'react';
import { IconLeaf } from '@tabler/icons-react';

interface propTypes {
  text: string;
  href?: string;
  arrow?: any;
  selected?: boolean;
}

const FancyButton = ({ text, href, arrow, selected }: propTypes) => {
  // scope is a ref, needs to be set to parents of things we want to animate
  const [scope, animate] = useAnimate();
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    console.log(text + ' ' + selected);
  }, [selected, text]);

  const handleButtonClick = () => {
    animate([
      ['.letter', { color: '#000000' }],
      ['.buttonLink', { color: '#000000' }, { at: '<' }],
      ['.letter', { y: -32 }, { duration: 0.2, delay: stagger(0.05), at: '<' }],
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

  const handleButtonClickContact = () => {
    animate([
      ['.buttonLink', { scale: 0.9 }, { duration: 0.1, at: '<' }],
      ['.buttonLink', { scale: 1.1 }, { duration: 0.13, at: '<' }],
      ['.buttonLink', { scale: 1 }, { duration: 0.1 }],
    ]);
  };

  const handleMouseOver = () => {
    if (!animated) {
      setAnimated(true);
      animate([
        ['.letter', { color: '#FFFFFF' }],
        ['.buttonLink', { scale: 1.02 }, { duration: 0.1, at: '<' }],
        ['.buttonLink', { color: '#FFFFFF' }, { duration: 0.1, at: '<' }],
        ['.buttonLink', { borderColor: '#70b959' }, { duration: 0.1, at: '<' }],
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
        ['.arrow', { x: 7 }, { duration: 0.5, ease: 'easeOut' }],
        ['.buttonLink', { x: 3 }, { at: '<' }],
        [
          '.buttonLink',
          { background: '#70b959', borderColor: '#70b959', color: '#FFFFFF' },
          { at: '<', duration: 0.2 },
        ],
      ]);
    }
  };

  const handleMouseLeave = () => {
    setAnimated(false);
    animate([
      ['.letter', { color: '#000000' }],
      ['.buttonLink', { scale: 1 }, { at: '<' }],
      ['.buttonLink', { color: '#000000' }, { duration: 0.1, at: '<' }],
      ['.buttonLink', { borderColor: '#000000' }, { duration: 0.1, at: '<' }],
    ]);
  };

  const handleMouseLeaveContact = () => {
    setAnimated(false);
    animate([
      ['.arrow', { x: 0 }, { at: '.6' }],
      ['.buttonLink', { x: 0 }, { at: '<' }],
      [
        '.buttonLink',
        { background: '#f8fff6', borderColor: '#9bd787', color: '#000000' },
        { duration: 0.1, at: '<' },
      ],
    ]);
  };

  //hover:bg-green-100
  //! ANIMATE PRESENCE FOR TRANSITIONING BETWEEN CLICKED THINGS
  return (
    <motion.div
      ref={scope}
      whileTap={{ scale: 0.95 }}
      className={`${selected && 'select-none'}`}
    >
      {selected ? (
        <motion.span className='underline' layoutId='underline'>
          <IconLeaf fill='#70b959' color='#70b959' size={35} />
        </motion.span>
      ) : null}
      <Link
        onClick={!arrow ? handleButtonClick : handleButtonClickContact}
        onMouseOver={
          !selected
            ? !arrow
              ? handleMouseOver
              : handleMouseOverContact
            : undefined
        }
        onMouseLeave={!arrow ? handleMouseLeave : handleMouseLeaveContact}
        className={`buttonLink text-2xl ${
          !arrow
            ? `rounded-full border-2 ${!selected && 'greenWipe'} ${
                selected
                  ? 'bg-green-100 border-[#70b959]'
                  : 'bg-gray-100 border-[#000000]'
              } `
            : 'rounded-md border-4 border-[#9bd787] shadow-md bg-[#f8fff6]'
        } px-6 py-2 text-[#000000] transition-colors flex items-center gap-3`}
        href={href || ''}
      >
        <span className='sr-only'>{text}</span>
        {/** Not read to screen reader */}
        <span
          className={`h-8 overflow-hidden flex items-center justify-center`}
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
        <motion.span className='icon'>
          {text === 'Home' && <IconHome />}
          {text === 'About' && <IconWoman />}{' '}
          {text === 'Blog' && <IconBallpen />}
        </motion.span>
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
