'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useContext } from 'react';
import { NutritionContext } from '../libs/NutritionProvider';

const About = () => {
  const { contactModalVisible, setContactModalVisible } =
    useContext(NutritionContext)!;
  return (
    <main className='flex justify-center items-center min-h-screen'>
      <div className='text-5xl'>About</div>
    </main>
  );
};

export default About;
