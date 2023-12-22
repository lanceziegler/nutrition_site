import {
  IconZoomCheckFilled,
  IconChartTreemap,
  IconUsers,
  IconStethoscope,
  IconBallAmericanFootball,
  IconMilkOff,
  IconBook,
  IconSoup,
  IconBrain,
} from '@tabler/icons-react';
import React from 'react';

const icons = [
  IconZoomCheckFilled,
  IconChartTreemap,
  IconUsers,
  IconStethoscope,
  IconBallAmericanFootball,
  IconMilkOff,
  IconBook,
  IconSoup,
  IconBrain,
];

interface CardProps {
  title: string;
  text: string;
  bullets: { content: string; num: number }[];
  color: string;
  image: string;
}

const ServiceCard = ({ title, text, bullets, color, image }: CardProps) => {
  return (
    <div className='rounded-3xl p-5 bg-white shadow-2xl w-[23em] min-h-[17em] cursor-pointer hover:scale-105 transition-transform duration-500'>
      <h1 className='text-3xl tracking-wide text-center'>{title}</h1>
      <div>
        <ul className='flex flex-col gap-5 mt-7'>
          {bullets.map((bullet, i) => (
            <li key={`${title}-bullet-${i}`} className='flex gap-2 text-lg'>
              <span>
                {icons[bullet.num] && React.createElement(icons[bullet.num])}
              </span>
              <span className={`${color} text-xl`}>{bullet.content}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceCard;
