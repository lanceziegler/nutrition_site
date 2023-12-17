import React from 'react';
import Link from 'next/link';
import FancyButton from './FancyButton';
import { IconArrowRight } from '@tabler/icons-react';

const Nav = () => {
  return (
    <div className='fixed w-full z-50'>
      <div className='flex justify-between items-center bg-gray-100'>
        <div>
          <ul className='flex p-2 gap-5'>
            <li>
              <FancyButton href='/' text='Home' />
            </li>
            <li className='hover:text-red-500 transition-colors duration-200'>
              <FancyButton href='/about' text='About' />
            </li>
          </ul>
        </div>
        <div>
          <FancyButton text='Contact' arrow={true} />
        </div>
      </div>
    </div>
  );
};

export default Nav;
