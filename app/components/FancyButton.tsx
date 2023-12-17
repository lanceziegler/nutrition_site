'use client';
import { stagger, useAnimate } from 'framer-motion';
import { IconArrowRight } from '@tabler/icons-react';
import Link from 'next/link';
interface propTypes {
  text: string;
  href?: string;
  arrow?: any;
}

const FancyButton = ({ text, href, arrow }: propTypes) => {
  // scope is a ref, needs to be set to parents of things we want to animate
  const [scope, animate] = useAnimate();

  const onButtonClick = () => {
    animate([
      ['.letter', { y: -32 }, { duration: 0.2, delay: stagger(0.05) }],
      // at "<" tells it to run at the exact same time instead of after
      // can also att "0.5" and it will run half a second before the previous
      ['button', { scale: 0.8 }, { duration: 0.1, at: '<' }],
      ['button', { scale: 1 }, { duration: 0.1 }],
      // We don't want visitors to see this reset, thus short duration
      //at: 0.5 has it delay its reset to prevent stutter
      ['.letter', { y: 0 }, { duration: 0.000001, at: 0.5 }],
    ]);
  };
  //! ANIMATE PRESENCE FOR TRANSITIONING BETWEEN CLICKED THINGS
  return (
    <div ref={scope}>
      <Link
        onClick={onButtonClick}
        className='text-2xl rounded-full border-2 border-blue-600 px-6 py-2 text-blue-600 hover:bg-blue-100 transition-colors flex items-center justify-between gap-2'
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
              className='letter inline-block relative h-8 after:h-8 after:absolute after:left-0 after:top-full after:content-[attr(data-letter)] leading-8'
              key={`${letter}-${index}`}
            >
              {letter}
            </span>
          ))}
        </span>
        {arrow ? (
          <span>
            <IconArrowRight />
          </span>
        ) : null}
      </Link>
    </div>
  );
};

export default FancyButton;
