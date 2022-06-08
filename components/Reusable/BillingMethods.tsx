import React from 'react';
import Image from 'next/image';
import { payments } from '../../utilities/payments';

const BillingMethods = () => {
  return (
    <div className='payment'>
        <h3 className='title'>Billing Method</h3>
        <div className="border"></div>
        {
            payments.map(payment => (
                <article key={payment.name}>
                    <div className="payment--info">
                        <Image 
                        src={payment.img}
                        width={43.75}
                        height={30}
                        />
                        {
                            payment.name === "Credit Card" && 
                            <Image 
                            src="/images/payments/mastercard.png"
                            width={43.75}
                            height={30}
                            style={{paddingLeft: "0.3rem"}}
                            />
                        }
                        <p>{payment.name}</p>
                        <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 1.5L8 8.5L1 1.5" stroke="black" stroke-opacity="0.7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div className="border"></div>
                </article>
            ))
        }
        <button className="payment-btn">
            SAVE BILLING METHOD
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
  )
}

export default BillingMethods