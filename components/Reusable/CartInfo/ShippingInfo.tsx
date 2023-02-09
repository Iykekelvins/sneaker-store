import React, { useState } from 'react';
import Input from '../Input';
import {useDispatch} from "react-redux";
import {addInfo} from "../../../redux/userSlice";

type ShippingProps = {
  shipping: boolean
  setShowShipping: (e: any)=> void
}

const ShippingInfo:React.FC<ShippingProps> = ({shipping, setShowShipping}) => {
    const dispatch = useDispatch();
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
      dispatch(addInfo(state));
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
        required
        />
        <Input 
        type='text'
        name='last_name'
        value={state.last_name}
        onChange={handleChange}
        placeholder="Last Name"
        required
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
        required
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
        required
        />
        <Input 
        type='text'
        name='state'
        value={state.state}
        onChange={handleChange}
        placeholder="State"
        required
        />
        <Input 
        type='text'
        name='phone_number'
        value={state.phone_number}
        onChange={handleChange}
        placeholder="Phone Number"
        required
        />
         <button className="payment-btn">
            SAVE SHIPPING INFO
            <img src="/svgs/black-arrow.svg" alt="arrow icon" />
          </button>
    </form>
  )
}

export default ShippingInfo