import React, { useState } from 'react';
import Image from "next/image";
import {useRouter} from "next/router";
import BillingMethods from "./BillingMethods";
import CartItemSummary from './CartItemSummary';
import ShippingInfo from './ShippingInfo';
import OrderDetails from './OrderDetails';


type CartItemProps = {
    sneakerItem: any
}

const CartItem:React.FC<CartItemProps> = ({sneakerItem}) => {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const [showBilling, setShowBilling] = useState(false);
  const [showShipping, setShowShipping] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);

  const handleRouting = () =>{
    if(showBilling){ 
      setShowBilling(false)
    } else if(showShipping){
      setShowShipping(false)
    } else if(showCheckout){
      setShowCheckout(false)
    } 
    else{
      router.back()
    }
  }
    
  return (
    <div className='cart-item'>
    <div className="cart-item--left"
    style={ {background: sneakerItem?.background} }
    >
      
    <div className={showCheckout ? "move-down info" : "info"}>
        <h2>{sneakerItem?.name}</h2>
        <h3>{sneakerItem?.info}</h3>
        <p>US Men’s Size 9</p>
    </div>

    {/* order successful */}
    <div className={showCheckout ? "info move-purchased" : "info purchased"}>
      <h2>PURCHASED</h2>
      <h3>ORDER SUCCESSFUL</h3>
      <p>Your order has been placed successfully and your delivery is on its way.</p>
    </div>

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
         {/* component for inital order details */}
         <CartItemSummary 
          sneakerItem={sneakerItem}
          billing={showBilling}
          checkout={showCheckout}
          setShowCheckout={setShowCheckout}
          setShowBilling = {setShowBilling}
          shipping={showShipping}
          setShowShipping={setShowShipping}
          quantity={quantity}
          setQuantity={setQuantity}
       />

        {/* component for final order details */}
        <OrderDetails 
          sneakerItem={sneakerItem}
          checkout={showCheckout}
          quantity={quantity}
        />

        {/* component for Biling Info */}
        <BillingMethods 
        billing={showBilling}
        setShowBilling={setShowBilling}
        
        /> 

        {/* component for shipping address */}
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