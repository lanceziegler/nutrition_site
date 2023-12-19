import React from 'react';
import Link from 'next/link';
import FancyButton from './FancyButton';
import { IconArrowRight } from '@tabler/icons-react';
import Image from 'next/image';

const Nav = () => {
  return (
    <nav className='fixed w-full z-50 border-b-2 border-black shadow-lg'>
      <div className='flex items-center bg-gray-100 p-2'>
        {/* Left section */}
        <div className='flex items-center gap-5'>
          <Image
            src='/logo.png'
            width={160}
            height={10}
            alt='DP Nutrition Logo'
          />
          <ul className='flex gap-5 pl-3 items-center translate-y-9'>
            <li>
              <FancyButton href='/' text='Home' />
            </li>
            <li className='hover:text-red-500 transition-colors duration-200'>
              <FancyButton href='/about' text='About' />
            </li>
          </ul>
        </div>

        {/* Right section */}
        <div className='ml-auto'>
          <FancyButton text='Contact' arrow={true} />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
