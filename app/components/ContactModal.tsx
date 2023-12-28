'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Lancelot } from 'next/font/google';
//! Animate modal appearing/disappearing

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const ContactModal = () => {
  const [value, onChange] = useState<Value>(new Date());
  const [dailyOpeningsVisible, setDailyOpeningsVisible] = useState(false);
  const [selectedDay, setSelectedDay] = useState<any>(null);

  const handleClickDay = (e: Date) => {
    const currentDate = new Date();
    const isSameDay =
      e.getDate() === currentDate.getDate() &&
      e.getMonth() === currentDate.getMonth() &&
      e.getFullYear() === currentDate.getFullYear();
    const isSameDayStateSelected =
      selectedDay?.getDate() === e.getDate() &&
      selectedDay?.getMonth() === e.getMonth() &&
      selectedDay?.getFullYear() === e.getFullYear();

    // Toggle for selected day's availability modal
    if (isSameDayStateSelected) {
      setDailyOpeningsVisible((prev) => !prev);
    } else {
      setDailyOpeningsVisible(true);
    }
    setSelectedDay(e);

    console.log(isSameDay);
  };

  return (
    <motion.div
      // key={key}
      initial={{ opacity: 0, scale: 0.8, borderRadius: '50px' }}
      animate={{ opacity: 1, scale: 1, borderRadius: '10px' }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className='fixed top-[25%] left-[28.5%] bg-white z-40 drop-shadow-2xl p-5 border-2 border-gray-400'
    >
      <motion.div className='flex' initial={{ y: 100 }} animate={{ y: 0 }}>
        <div>
          <h1 className='p-5 font-quicksand text-lg font-bold'>
            Send me a message
          </h1>
          <form className='flex flex-col font-quicksand gap-1'>
            <label>Name:</label>
            <input className='border-2 border-gray-200'></input>
            <label>Email:</label>
            <input className='border-2 border-gray-200'></input>
            <label>Message:</label>
            <textarea className='border-2 border-gray-200' rows={4}></textarea>
            <button
              type='submit'
              className='p-1 hover:bg-[#000000] text-[#000000] hover:text-white self-end rounded-md transition-colors'
            >
              Send
            </button>
          </form>
        </div>
        <div className='flex items-center'>
          <h1 className='p-5 font-quicksand text-lg'>- or -</h1>
        </div>
        <div className='flex flex-col'>
          <h1 className='p-5 font-quicksand text-lg font-bold'>
            Click to schedule a video appointment
          </h1>
          <div className='flex p-2'>
            <Calendar
              value={value}
              onChange={onChange}
              onClickDay={handleClickDay}
              className='drop-shadow-lg'
            />
            {/**Availability Modal */}

            {dailyOpeningsVisible ? (
              <motion.div className='bg-white box-border'>
                <div>
                  <h1 className='font-quicksand text-lg px-5'>
                    Available times-{' '}
                    {`${selectedDay.getMonth() + 1}/${selectedDay.getDate()}`}
                  </h1>
                </div>
                {/* {selectedDay.getDate()} */}
              </motion.div>
            ) : null}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactModal;
