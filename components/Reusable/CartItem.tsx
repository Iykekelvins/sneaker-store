import React from 'react';
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
  console.log(sneakerItem);
  
    
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
              onClick={()=> router.back()}
    >
        Back
    </button>
    
    <div className="cart-item--details">
      {/* <CartItemSummary 
      sneakerItem={sneakerItem}
      /> */}
      <OrderDetails 
        sneakerItem={sneakerItem}
      />
      {/* <BillingMethods /> */}
      {/* <ShippingInfo /> */}
    </div>
    </div>
    </div>
  )
}

export default CartItem