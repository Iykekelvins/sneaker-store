import React from 'react';

type OrderDetailsProps = {
    sneakerItem: any
}

const OrderDetails: React.FC<OrderDetailsProps> = ({sneakerItem}) => {
  return (
    <div className='order-details'>
        <h3 className="title">YOUR ORDER DETAILS</h3>
        <div className="flex">
            <h4>Order ID:</h4>
            <h3>{sneakerItem?.id}</h3>
        </div>
        <div className="border"></div>

        <div className="flex">
            <h4>SIZE:</h4>
            <h3>US M 9</h3>
        </div>
        <div className="border"></div>

        <div className="flex">
            <h4>PRICE:</h4>
            <h3>{sneakerItem.price}</h3>
        </div>
        <div className="border"></div>

        <div className="flex">
            <h4>QUANTITY:</h4>
            <h3>1</h3>
        </div>
        <div className="border"></div>

        <div className="flex name">
            <h4>ITEM:</h4>
            <div>
            <h3>{sneakerItem.name}</h3>
            <h3>{sneakerItem.info}</h3>
            </div>
        </div>
        <div className="border"></div>

        <div className="flex">
            <h4>TRACKING:</h4>
            <h3>Currently <br /> Unavailable</h3>
        </div>
        <div className="border"></div>

        <button className='payment-btn'>THANK YOU</button>
    </div>
  )
}

export default OrderDetails