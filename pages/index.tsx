import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import PageOne from '../components/Homepage/PageOne';
import PageTwo from '../components/Homepage/PageTwo';
import { motion, AnimatePresence } from 'framer-motion';

const Home: NextPage = () => {
  const [showPageTwo, setShowPageTwo] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setShowPageTwo(!showPageTwo)
    }, 4000);
  },)
  
  return (
    <>
     {
       !showPageTwo ?
       <motion.div
       initial={{
         opacity: 0,
        }}
        transition={{ type: "tween", duration: 1.2 }}
        animate={{ opacity: 1 }}
        exit={{
          opacity: 0,
        }}
        >
      <PageOne/>
     </motion.div>
     :
     <motion.div
     initial={{
          opacity: 0,
        }}
        transition={{ type: "tween", duration: 1.2 }}
        animate={{ opacity: 1 }}
        exit={{
          opacity: 0,
        }}
        >
      <PageTwo/>
     </motion.div>
    }
    </>
  )
}

export default Home
