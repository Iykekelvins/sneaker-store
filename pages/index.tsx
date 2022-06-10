import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import PageOne from '../components/Homepage/PageOne';
import PageTwo from '../components/Homepage/PageTwo';
import {AnimatePresence, motion } from 'framer-motion';

const Home: NextPage = () => {
  const [showPageTwo, setShowPageTwo] = useState(true);

  const style = !showPageTwo ? {opacity: 0} : {}

  useEffect(() => {
    setTimeout(() => {
      setShowPageTwo(!showPageTwo)
    }, 4000);
  },)
  
  return (
    <>
    <AnimatePresence exitBeforeEnter>
      {
        !showPageTwo &&
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
      }
      </AnimatePresence>
    
    <AnimatePresence exitBeforeEnter>
    {
      showPageTwo &&
      <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1, transition: {
          type: "tween",
          duration: 0.8,
        }
      }}
      style={style}
      >
         <PageTwo/>
       </motion.div>
      }
    
      </AnimatePresence>
    </>
  )
}

export default Home
