import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NikePage from '../../components/NikePage';

const AirJordan: NextPage = () => {
  const [showPageTwo, setShowPageTwo] = useState<boolean>(true);

  return (
   <section>
    <NikePage/>
   </section>
  )
}

export default AirJordan
