import { AnimatePresence } from 'framer-motion';
//! Animate modal appearing/disappearing

const ContactModal = () => {
  return (
    <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-600 w-40 h-40 z-50 flex justify-center items-center'>
      <div>Contact</div>
    </div>
  );
};

export default ContactModal;
