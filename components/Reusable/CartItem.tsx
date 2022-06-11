import React, { useState } from 'react';
import Image from "next/image";
import {useRouter} from "next/router";
import BillingMethods from "./BillingMethods";
import CartItemSummary from './CartItemSummary';
import ShippingInfo from './ShippingInfo';
import OrderDetails from './OrderDetails';
import {AnimatePresence, motion } from 'framer-motion';


type CartItemProps = {
    sneakerItem: any
}

const CartItem:React.FC<CartItemProps> = ({sneakerItem}) => {
  const router = useRouter();
  const [showBilling, setShowBilling] = useState(false);
  const [showShipping, setShowShipping] = useState(false);

  const handleRouting = () =>{
    if(showBilling){ 
      setShowBilling(false)
    } else if(showShipping){
      setShowShipping(false)
    } else{
      router.back()
    }
  }
    
  return (
    <div className='cart-item'>
    <div className="cart-item--left"
    style={ {background: sneakerItem?.background} }
    >
      
    <div className="info">
        <h2>{sneakerItem?.name}</h2>
        <h3>{sneakerItem?.info}</h3>
        <p>US Men’s Size 9</p>
    </div>

    {/* order successful */}
    {/* <div className="info">
      <h2>PURCHASED</h2>
      <h3>ORDER SUCCESSFUL</h3>
      <p>Your order has been placed successfully and your delivery is on its way.</p>
    </div> */}

    <div className="img">
        <Image 
        src={sneakerItem?.img_lg}
        height={526.1}
        width={839.84}
        />
    </div>
    </div>

    <div className="cart-item--right">
    <button className='back'
              onClick={handleRouting}
    >
        Back
    </button>
    <div className="cart-item--details">
         <CartItemSummary 
          sneakerItem={sneakerItem}
          billing={showBilling}
          setShowBilling = {setShowBilling}
          shipping={showShipping}
          setShowShipping={setShowShipping}
       />
      {/* <OrderDetails 
        sneakerItem={sneakerItem}
      /> */}
       
            <BillingMethods 
            billing={showBilling}
            setShowBilling={setShowBilling}
            
            /> 
          <ShippingInfo 
          shipping={showShipping}
          setShowShipping={setShowShipping}
          />
    </div>
    </div>
    </div>
  )
}

export default CartItem