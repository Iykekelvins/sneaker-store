import React from 'react';
import Image from 'next/image';

const PageOne = () => {
  return (
    <section className='container page-one'>
      <div className='page-one--info'>
        <h1>
          {/* NIKE SB DUNK LOW */}
          BEN & JERRY’S <br /> 
          CHUNKY DUNKY
        </h1>
        <button>
          SHOP NOW
        </button>
      </div> 

      <div>
        <Image 
        src="/images/home-sb.png"
        width={1227}
        height={935}
        />
      </div>
    </section>
  )
}

export default PageOne