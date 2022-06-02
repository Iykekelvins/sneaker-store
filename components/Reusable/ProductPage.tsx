import Image from 'next/image';
import React from 'react';

type ProductProps = {
    value: number
    productList: any
    height: number
    width: number
    hide: (e: any) => void
}

const ProductPage:React.FC<ProductProps> = ({value, productList, height, width, hide}) => {
    const {name, info, img_lg} = productList[value];
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
    <div className='product-page'>
        <div className="product-page--left">
            <div className="sizes">
                <header>
                    <p>SIZE</p>
                    <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.8823 1.5L6.88232 6.5L1.88232 1.5" stroke="black" stroke-opacity="0.8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </header>
                {
                    sizes.map((size)=>(
                        <div>
                            <h4>{size.type}</h4>
                            <h3>{size.price}</h3>
                        </div>
                    ))
                }
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
            </div>
        </div>
        <div className="product-page--right">
            <button className='back'
            onClick={()=>hide(false)}
            >
                Back
            </button>
        </div>
    </div>
  )
}

export default ProductPage