import React, { useState } from 'react';
import Input from './Input';

type ShippingProps = {
  shipping: boolean
  setShowShipping: (e: any)=> void
}

const ShippingInfo:React.FC<ShippingProps> = ({shipping, setShowShipping}) => {
    const [state, setState] = useState({
        first_name: "",
        last_name: "",
        country: "",
        address: "",
        address_two: "",
        city: "",
        state: "",
        phone_number: "",
      });

    const handleChange = (e: any) => {
        const value = e.target.value;
        setState({
        ...state,
        [e.target.name]: value,
    });
    }

    const onSubmit = (e: any) =>{
      e.preventDefault();
      setShowShipping(false)
    }

  return (
    <form className={shipping ? "shipping-info show-shipping" : "shipping-info"}
    onSubmit={onSubmit}
    >
        <h3 className='title'>SHIPPING INFORMATION</h3>
        <Input 
        type='text'
        name='first_name'
        value={state.first_name}
        onChange={handleChange}
        placeholder="First Name"
        />
        <Input 
        type='text'
        name='last_name'
        value={state.last_name}
        onChange={handleChange}
        placeholder="Last Name"
        />
        <Input 
        type='text'
        name='country'
        value={state.country}
        onChange={handleChange}
        placeholder="Nigeria"
        />
        <Input 
        type='text'
        name='address'
        value={state.address}
        onChange={handleChange}
        placeholder="Street Address"
        />
        <Input 
        type='text'
        name='address_two'
        value={state.address_two}
        onChange={handleChange}
        placeholder="Address 2"
        />
        <Input 
        type='text'
        name='city'
        value={state.city}
        onChange={handleChange}
        placeholder="City"
        />
        <Input 
        type='text'
        name='state'
        value={state.state}
        onChange={handleChange}
        placeholder="State"
        />
        <Input 
        type='text'
        name='phone_number'
        value={state.phone_number}
        onChange={handleChange}
        placeholder="Phone Number"
        />
         <button className="payment-btn">
            SAVE SHIPPING INFO
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
    </form>
  )
}

export default ShippingInfo