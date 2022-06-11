import Image from 'next/image';
import React from 'react';

type CartItemSummaryProps = {
    sneakerItem: any
    billing: boolean
    shipping: boolean
    setShowShipping: (e: any)=> void
    setShowBilling: (e:any)=> void
}

const CartItemSummary: React.FC<CartItemSummaryProps> = ({sneakerItem, billing, setShowBilling, shipping, setShowShipping}) => {
  return (
<div className={billing || shipping ? "hide-details" : "details"}>
    <h3 className='title'>YOUR ORDER DETAILS</h3>
    <div className="top">
    <div className="flex">
    <h4>Product ID:</h4>
    <h3>{sneakerItem?.id}</h3>
    </div>

  <div className="flex">
  <h4>Quantity:</h4>
  <div className='edit'>
    <h3>1</h3>
    <button>
    <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.4167 3.75C18.7013 3.46547 19.0391 3.23977 19.4108 3.08578C19.7826 2.93179 20.181 2.85254 20.5834 2.85254C20.9858 2.85254 21.3842 2.93179 21.756 3.08578C22.1278 3.23977 22.4656 3.46547 22.7501 3.75C23.0346 4.03453 23.2603 4.37232 23.4143 4.74408C23.5683 5.11583 23.6475 5.51428 23.6475 5.91667C23.6475 6.31906 23.5683 6.7175 23.4143 7.08926C23.2603 7.46102 23.0346 7.7988 22.7501 8.08334L8.12508 22.7083L2.16675 24.3333L3.79175 18.375L18.4167 3.75Z" stroke="black" stroke-opacity="0.8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    </button>
  </div>
  </div>

</div>
<div className="border"></div>

<div className="summary">
<h3 className='summary--title'>Summary</h3>
  <div className="flex">
  <h4>Subtotal:</h4>
  <h3>$8,066</h3>
  </div>
 
 <div className="flex">
 <h4>Delivery:</h4>
  <h3>$100</h3>
 </div>
 <div className="border"></div>

  <div className="flex">
    <h4>Total:</h4>
    <h3>$8,166</h3>
  </div>
  <div className="border"></div>

  <div className="flex payment"
  onClick={()=> setShowBilling(true)}
  >
    <div>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 4H3C1.89543 4 1 4.89543 1 6V18C1 19.1046 1.89543 20 3 20H21C22.1046 20 23 19.1046 23 18V6C23 4.89543 22.1046 4 21 4Z" stroke="black" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M1 10H23" stroke="black" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <p>Add a payment method</p>
    
    {/* chosen payment method */}
    {/* <div className="payment--info">
        <Image 
        src="/images/payments/mastercard.png"
        width={43.75}
        height={30}
        />
        <p>Paystack</p>
    </div> */}
    </div>

    <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.4167 3.75C18.7013 3.46547 19.0391 3.23977 19.4108 3.08578C19.7826 2.93179 20.181 2.85254 20.5834 2.85254C20.9858 2.85254 21.3842 2.93179 21.756 3.08578C22.1278 3.23977 22.4656 3.46547 22.7501 3.75C23.0346 4.03453 23.2603 4.37232 23.4143 4.74408C23.5683 5.11583 23.6475 5.51428 23.6475 5.91667C23.6475 6.31906 23.5683 6.7175 23.4143 7.08926C23.2603 7.46102 23.0346 7.7988 22.7501 8.08334L8.12508 22.7083L2.16675 24.3333L3.79175 18.375L18.4167 3.75Z" stroke="black" stroke-opacity="0.8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
  <div className="border"></div>

  <div className="flex shipping"
  onClick={()=> setShowShipping(true)}
  >
    <div>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="black" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M9 22V12H15V22" stroke="black" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <p>No shipping info provided</p>
    </div>

    <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.4167 3.75C18.7013 3.46547 19.0391 3.23977 19.4108 3.08578C19.7826 2.93179 20.181 2.85254 20.5834 2.85254C20.9858 2.85254 21.3842 2.93179 21.756 3.08578C22.1278 3.23977 22.4656 3.46547 22.7501 3.75C23.0346 4.03453 23.2603 4.37232 23.4143 4.74408C23.5683 5.11583 23.6475 5.51428 23.6475 5.91667C23.6475 6.31906 23.5683 6.7175 23.4143 7.08926C23.2603 7.46102 23.0346 7.7988 22.7501 8.08334L8.12508 22.7083L2.16675 24.3333L3.79175 18.375L18.4167 3.75Z" stroke="black" stroke-opacity="0.8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>

  <button className="payment-btn">
    GO TO CHECKOUT
    <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_57_2303)">
    <path d="M1.26562 1.77319L7.67941 7.77319L1.26562 13.7732" stroke="black" stroke-opacity="0.9" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <defs>
    <clipPath id="clip0_57_2303">
    <rect width="8.82353" height="15" fill="white" transform="translate(0.0882568 0.5)"/>
    </clipPath>
    </defs>
    </svg>
  </button>
</div>
    </div>
  )
}

export default CartItemSummary