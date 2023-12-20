'use client';

import React from 'react';
import Link from 'next/link';
import FancyButton from './FancyButton';
import { IconArrowRight } from '@tabler/icons-react';
import Image from 'next/image';
import {
  IconHome,
  IconWoman,
  IconBallpen,
  IconLeaf,
} from '@tabler/icons-react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Nav = () => {
  const tabs = ['Home', 'About', 'Blog'];
  const hrefs = ['/', '/about', '/blog'];
  const [selected, setSelected] = useState(tabs[0]);

  useEffect(() => {
    console.log(selected);
  }, [selected]);

  return (
    <nav className='fixed w-full z-50 border-b-2 border-black shadow-lg'>
      <div className='flex items-center bg-gray-100 p-2'>
        {/* Left section */}
        <div className='flex items-center gap-5'>
          <Image
            src='/logo.png'
            width={160}
            height={160}
            alt='DP Nutrition Logo'
            priority
            draggable={false}
          />
          <div className='relative'>
            <div className='absolute border-2 border-black w-[110%] h-full top-[98%] -right-[6.1%] bg-gray-100 shadow-lg -z-10 rounded-b-full'></div>
            <ul className=' gap-5 pl-3 flex items-center translate-y-9'>
              {tabs.map((item, i) => (
                <li
                  key={item}
                  onClick={() => setSelected(item)}
                  className='relative'
                >
                  <FancyButton
                    href={hrefs[i]}
                    text={tabs[i]}
                    selected={item === selected}
                  />
                </li>
              ))}
              {/* <li>
                <FancyButton href='/' text='Home' />
              </li>
              <li>
                <FancyButton href='/about' text='About' />
              </li>
              <li>
                <FancyButton href='/blog' text='Blog' />
              </li> */}
            </ul>
          </div>
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
