'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Calendar from 'react-calendar';
//! Animate modal appearing/disappearing

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const ContactModal = ({ key }: { key: string }) => {
  const [value, onChange] = useState<Value>(new Date());
  const [dailyOpeningsVisible, setDailyOpeningsVisible] = useState(false);

  return (
    <motion.div
      key={key}
      initial={{ opacity: 0, scale: 0.8, borderRadius: 0 }}
      animate={{ opacity: 1, scale: 1, borderRadius: '20px' }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className='absolute top-1/2 left-1/2 bg-white z-50'
    >
      <div>
        <Calendar
          onChange={onChange}
          value={value}
          tileClassName='hover:bg-[#70b959] transition-colors duration-100 hover:text-white'
          onClickDay={() => setDailyOpeningsVisible((prev) => !prev)}
        />
      </div>
    </motion.div>
  );
};

export default ContactModal;
