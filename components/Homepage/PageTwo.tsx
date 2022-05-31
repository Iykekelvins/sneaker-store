import React from 'react';
import Image from 'next/image';

const PageTwo = () => {
  return (
    <section className="container page-two">
      <div className="page-two--info">
        <h1>
        STAY TRUE <br /> 
        TO YOURSELF <br /> 
        AND YOUR FEET
        </h1>
        <button>
          SHOP NOW
        </button>
      </div>
      <div className='page-two--img'>
        <Image 
        src="/images/home-nike.png"
        width={893.6}
        height={1117}
        />
      </div>
    </section>
  )
}

export default PageTwo