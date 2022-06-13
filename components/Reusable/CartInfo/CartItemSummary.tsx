import Image from 'next/image';
import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import {selectAddress, selectPayment} from "../../../redux/userSlice";

type CartItemSummaryProps = {
    sneakerItem: any
    quantity:number
    billing: boolean
    shipping: boolean
    checkout: boolean
    setQuantity: (e: any)=> void
    setShowCheckout: (e: any)=> void
    setShowShipping: (e: any)=> void
    setShowBilling: (e:any)=> void
}

const CartItemSummary: React.FC<CartItemSummaryProps> = ({
  sneakerItem, 
  quantity,
  setQuantity,
  billing, 
  setShowBilling, 
  shipping,
  setShowShipping,
  checkout,
  setShowCheckout
  }) => {

  const address = useSelector(selectAddress);
  const payment = useSelector(selectPayment);
  const ref = useRef(null);

  const price = parseInt(sneakerItem.price) * quantity

  //check if address or payment option is empty
  const condition = address === "" || quantity == 0;

  const handleCheckout = () => {
    if(condition){
      return null
    }
    else{
      setShowCheckout(true);
    }
  }

  return (
  <div className={billing || shipping ? "hide-summary cart-item-summary" : "cart-item-summary"}>
    <h3 className='title'>YOUR ORDER DETAILS</h3>

    {/* move this section to show completed checkout details-- start */}
    <div className={checkout ? "move-down" : "move-up"}>
      <div className="top">
        <div className="flex">
        <h4>Product ID:</h4>
        <h3>{sneakerItem?.id}</h3>
      </div>

      <div className="flex">
        <h4>Quantity:</h4>
        <div className='edit'>
          <input 
          type="number" 
          value={quantity} 
          ref={ref} 
          onChange={(e)=> setQuantity(e.target.value)}
          />
          <button onClick={()=> ref.current.focus()}>
          <img src="/svgs/pen.svg" alt="pen icon" />
          </button>
        </div>
      </div>

    </div>
    <div className="border"></div>

    <div className="summary">
      <h3 className='summary--title'>Summary</h3>
        <div className="flex">
          <h4>Subtotal:</h4>
          <h3>${price}</h3>
        </div>
 
    <div className="flex">
       <h4>Delivery:</h4>
        <h3>$100</h3>
      </div>
    <div className="border"></div>

    <div className="flex">
      <h4>Total:</h4>
      <h3>${price + 100}</h3>
    </div>
    <div className="border"></div>

    <div 
      className="flex payment"
      onClick={()=> setShowBilling(true)}
    >
    <div>
      <img src="/svgs/card.svg" alt="card icon" />
      {
        payment.name === "" || payment.img === "" ? <p>Add a payment method</p>
        :
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
            style={{paddingLeft: "0.15rem"}}
            />
          }
          <p>{payment.name}</p>
      </div>    
      }
        
    
      </div>
      <img src="/svgs/pen.svg" alt="pen icon" />
    </div>
    <div className="border"></div>

    <div 
      className="flex shipping"
      onClick={()=> setShowShipping(true)}
    >
      <div>
        <img src="/svgs/home.svg" alt="home icon" />
        <p>{address === "" ? "No shipping info provided" : address}</p>
      </div>
      <img src="/svgs/pen.svg" alt="pen icon" />
     </div>
    </div>
  </div>
  {/* move this section to show completed checkout details-- end */}


  <button className={condition ? "payment-btn" : "payment-btn complete-btn"}
  onClick={()=> handleCheckout()}
  >
   <div className={checkout ? "move-down" : "move-up"}>
    <div>GO TO CHECKOUT</div>
    {/* black or white arrow */}
    {
      condition ?        
        <img src="/svgs/black-arrow.svg" alt="arrow icon" />
      :
        <img src="/svgs/white-arrow.svg" alt="arrow icon" />
    }
   </div>
   <div className={checkout ? "thank-you-btn move" : "thank-you-btn"}>THANK YOU</div>
  </button>
    </div>
  )
}

export default CartItemSummary