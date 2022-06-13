import Image from 'next/image';
import React from 'react';

type OverlayProps = {
    src: string
    width: number
    height: number
    background: string
    setShowOverlay: (e: any) => void
}

const Overlay:React.FC<OverlayProps> = ({src, width, height, background, setShowOverlay}) => {
  return (
    <div className='overlay'
    style={ {background: background} }
    >
         <button className="overlay--btn"
              onClick={()=> setShowOverlay(false)}
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
        <div className="img">
            <Image 
            src={src}
            width={width}
            height={height}
            />
        </div>
    </div>
  )
}

export default Overlay