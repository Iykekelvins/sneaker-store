import Image from 'next/image';
import React, { useState } from 'react';
import Overlay from './Overlay';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';

type ProductProps = {
    value: number
    productList: any
    height: number
    width: number
    page: string
    hide: (e: any) => void
}

const ProductPage:React.FC<ProductProps> = ({value, productList, height, width, page, hide}) => {
    const [showSizes, setShowSizes] = useState(false);
    const [showOverlay, setShowOverlay] = useState(false);
    const {id, name, info, img_lg, background} = productList[value];

    const sizes = [
        {
         type:"US M 10.5",
         price:"$1,976"
        },
        {
         type:"US M 11",
         price:"$1,884"
        },
        {
         type:"US M 11.5",
         price:"$1,903"
        },
    ]

  return (
  <div>
      {
          !showOverlay ? 
          <div className='product-page'>
          <div className="product-page--left"
          style={ {background: background} }
          >
              <div className="sizes">
                  <button
                  onClick={()=> setShowSizes(!showSizes)}
                  >
                      <p>SIZE</p>
                      <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg"
                      className= {showSizes ? "show" : ""}
                      >
                      <path d="M11.8823 1.5L6.88232 6.5L1.88232 1.5" stroke="black" strokeOpacity="0.8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                  </button>
                 <div className= {showSizes ? "content show" : "content"}>
                 {
                      sizes.map((size)=>(
                          <div className='size-info'
                          key={size.type}
                          >
                              <h4>{size.type}</h4>
                              <h3>{size.price}</h3>
                          </div>
                      ))
                  }
                 </div>
              </div>
  
              <div className='img'>
              <Image 
              src={img_lg}
              height={height}
              width={width}
              />
              </div>
              <div className="info">
                  <h2>{name}</h2>
                  <h3>{info}</h3>
                  <div>
                  <svg width="29" height="27" viewBox="0 0 29 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24.8917 4.46583C24.2677 3.83963 23.5262 3.34278 22.7097 3.00376C21.8933 2.66475 21.0179 2.49023 20.1339 2.49023C19.2498 2.49023 18.3745 2.66475 17.5581 3.00376C16.7416 3.34278 16.0001 3.83963 15.3761 4.46583L14.4183 5.43605L13.4605 4.46583C12.8365 3.83963 12.095 3.34278 11.2785 3.00376C10.4621 2.66475 9.58673 2.49023 8.70269 2.49023C7.81865 2.49023 6.9433 2.66475 6.12685 3.00376C5.3104 3.34278 4.5689 3.83963 3.94487 4.46583C1.30786 7.10284 1.14616 11.5559 4.4673 14.9392L14.4183 24.8902L24.3693 14.9392C27.6904 11.5559 27.5287 7.10284 24.8917 4.46583Z" stroke="#020000" strokeOpacity="0.8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
  
                  <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.6614 9.3335C23.5944 9.3335 25.1614 7.76649 25.1614 5.8335C25.1614 3.9005 23.5944 2.3335 21.6614 2.3335C19.7284 2.3335 18.1614 3.9005 18.1614 5.8335C18.1614 7.76649 19.7284 9.3335 21.6614 9.3335Z" stroke="#020000" strokeOpacity="0.8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7.66138 17.5C9.59437 17.5 11.1614 15.933 11.1614 14C11.1614 12.067 9.59437 10.5 7.66138 10.5C5.72838 10.5 4.16138 12.067 4.16138 14C4.16138 15.933 5.72838 17.5 7.66138 17.5Z" stroke="#020000" strokeOpacity="0.8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21.6614 25.6665C23.5944 25.6665 25.1614 24.0995 25.1614 22.1665C25.1614 20.2335 23.5944 18.6665 21.6614 18.6665C19.7284 18.6665 18.1614 20.2335 18.1614 22.1665C18.1614 24.0995 19.7284 25.6665 21.6614 25.6665Z" stroke="#020000" strokeOpacity="0.8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10.6831 15.7617L18.6514 20.4051" stroke="#020000" strokeOpacity="0.8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18.6398 7.59521L10.6831 12.2385" stroke="#020000" strokeOpacity="0.8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
  
                  </div>
              </div>
          </div>
          <div className="product-page--right">
              <button className='back'
              onClick={()=>hide(false)}
              >
                  Back
              </button>
  
              <button className="overlay-btn"
              onClick={()=> setShowOverlay(true)}
              >
              <svg width="58" height="48" viewBox="0 0 58 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_30_6271)">
              <path d="M2 9C2 4.58172 5.58172 1 10 1H48C52.4183 1 56 4.58172 56 9V37C56 41.4183 52.4183 45 48 45H10C5.58172 45 2 41.4183 2 37V9Z" fill="white"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M22 14H25.5V16H24H22V18V20H20V16C20 14.8954 20.8954 14 22 14ZM20 26V30C20 31.1046 20.8954 32 22 32H25.5V31V30H24H22V28V26H20ZM36 26V28V30H34H32.5V31V32H36C37.1046 32 38 31.1046 38 30V26H37H36ZM38 20V16C38 14.8954 37.1046 14 36 14H32.5V16H34H36V18V20H37H38Z" fill="black"/>
              </g>
              <defs>
              <filter id="filter0_d_30_6271" x="0" y="0" width="58" height="48" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="1"/>
              <feGaussianBlur stdDeviation="1"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_30_6271"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_30_6271" result="shape"/>
              </filter>
              </defs>
              </svg>
              </button>
  
              <div className="btn-container">
                  <button className='add'
                  style={ {background: background} }>
                      Add to cart
                  </button>
                 <Link href={`${page}/${id}`}>
                 <button className='buy'>
                      buy now
                      <svg width="88" height="36" viewBox="0 0 88 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_20_718)">
                      <path d="M3.75 16L1.25 16L1.25 21L3.75 21L3.75 16ZM84.75 21C86.1307 21 87.25 19.8807 87.25 18.5C87.25 17.1193 86.1307 16 84.75 16L84.75 21ZM3.75 21L84.75 21L84.75 16L3.75 16L3.75 21Z" fill="black"/>
                      <path d="M72.5178 2.73223L70.75 0.964466L67.2145 4.5L68.9822 6.26777L72.5178 2.73223ZM84.75 18.5L86.5178 20.2678C87.4941 19.2915 87.4941 17.7085 86.5178 16.7322L84.75 18.5ZM68.9822 30.7322C68.0059 31.7085 68.0059 33.2915 68.9822 34.2678C69.9585 35.2441 71.5415 35.2441 72.5178 34.2678L68.9822 30.7322ZM68.9822 6.26777L82.9822 20.2678L86.5178 16.7322L72.5178 2.73223L68.9822 6.26777ZM82.9822 16.7322L68.9822 30.7322L72.5178 34.2678L86.5178 20.2678L82.9822 16.7322Z" fill="black"/>
                      </g>
                      <defs>
                      <clipPath id="clip0_20_718">
                      <rect width="87" height="35" fill="white" transform="translate(0.75 0.5)"/>
                      </clipPath>
                      </defs>
                      </svg>
                  </button>
                 </Link>
              </div>
          </div>
      </div>

      :
      
     <AnimatePresence>
          <motion.div className='product-page'
        initial={{
        opacity:0
        }}
        transition={{ type: "tween", duration: 1 }}
        animate={{ opacity: 1 }}
        exit={{
            opacity:0
        }}
        >
         <Overlay 
           src={img_lg}
           height={height}
           width={width}
           background={background}
           setShowOverlay={setShowOverlay}
         />
        </motion.div>
     </AnimatePresence>
      }
  </div>
  )
}

export default ProductPage