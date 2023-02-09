import React, { useState } from 'react';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { selectPayment, addPayment } from '../../../redux/userSlice';
import { payments } from '../../../utilities/payments';

type BillingMethodsProps = {
    billing: boolean
    setShowBilling: (e: any)=> void
}

const BillingMethods:React.FC<BillingMethodsProps> = ({billing, setShowBilling}) => {
    const [state, setState] = useState({
        name:"",
        img:""
    });
    const dispatch = useDispatch();

    const submitForm = (e: any)=> {
        e.preventDefault();

        if(state.img === "" || state.name === ""){
            return null
        }
        else{
            dispatch(addPayment(state));
            setShowBilling(false)
        }
    }

    return (
    <form className={billing ? "show-billing billing" : "billing"}
    onSubmit={submitForm}
    >
        <h3 className='title'>Billing Method</h3>
        <div className="border"></div>
        {
            payments.map(payment => (
                <article key={payment.name}>
                    <label className="billing--info" htmlFor={payment.name}> 
                    <input 
                    type="radio" 
                    id={payment.name} 
                    value={payment.name} 
                    checked={state.name === payment.name}
                    onChange={(e)=> setState({
                        name:e.target.value,
                        img: payment.img
                    }
                    )}
                    />
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
                            style={{paddingLeft: "0.15rem"}}
                            />
                        }
                        <p>{payment.name}</p>
                       <img className='icon' src="/svgs/arrow-down.svg" alt="arrow icon"  />
                    </label>
                    <div className="border"></div>
                </article>
            ))
        }
        <button className="payment-btn">
            SAVE BILLING METHOD
            <img src="/svgs/black-arrow.svg" alt="arrow icon" />
        </button>
    </form>
  )
}

export default BillingMethods