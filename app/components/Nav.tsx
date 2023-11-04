import React from 'react';
import Link from 'next/link';

const Nav = () => {
  return (
    <div className='fixed'>
      <ul className='flex p-5 gap-5'>
        <li className='hover:text-red-500 transition-colors duration-200'>
          <Link href='/'>Home</Link>
        </li>
        <li className='hover:text-red-500 transition-colors duration-200'>
          <Link href='/about'>About</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
