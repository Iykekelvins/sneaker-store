import Image from 'next/image';
import React, {useState} from 'react';
import {sneakers} from "../../utilities/sneakers";
import { AnimatePresence, motion } from 'framer-motion';
import ProductPage from '../Reusable/ProductPage';

const NikePage = () => {
  const sneakerList = sneakers.find((sneaker) => sneaker.name === "Nike")?.air_jordan

  const [value, setValue] = useState(0);
  const [productInfo, setProductInfo] = useState(false);
  
  return (
    <div className='products'>
      {
        sneakerList?.map((sneaker, index) => (
          <article
          key={sneaker.img} 
          className="products--card" 
          style={{ background: sneaker.background }}
          onClick={ () => {
            setValue(index);
            setProductInfo(true)
          } }
          >
            <Image 
            src={sneaker.img}
            width={220}
            height={129}
            objectFit="cover"
            />
            <motion.div className="info"
            initial={{ opacity: 0 }}
            whileInView={{
               opacity: 1, transition: {
                type: "tween",
                duration: 0.8,
              }
            }}
            >
              <h5>{sneaker.name}</h5>
              <h6>{sneaker.info}</h6>
              <h5>{sneaker.price}</h5>
            </motion.div>
          </article>
        ))
      }

    <AnimatePresence>
    {
       productInfo &&
       <motion.div className='product-page'
       initial={{
       y:1000
      }}
      transition={{ type: "tween", duration: 1.2 }}
      animate={{ y: 0 }}
      exit={{
        y: 1000,
      }}
   >
     <ProductPage 
     productList={sneakerList}
     value={value}
     height={526.1}
     width={839.84}
     hide={setProductInfo}
     />
   </motion.div>
     }
    </AnimatePresence>
    </div>
  )
}

export default NikePage