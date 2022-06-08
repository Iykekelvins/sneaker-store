import React from 'react';
import CartItem from '../../../components/Reusable/CartItem';
import {sneakers} from "../../../utilities/sneakers";
import { useRouter } from "next/router";

const CartAirJordan = () => {
  const router = useRouter();
  const id = router.query.id;

  const sneakerItem = sneakers.find((sneaker) => sneaker.name === "Nike")?.air_jordan?.find(sneaker => sneaker.id === id);
    
  return (
    <>
     <CartItem 
     sneakerItem={sneakerItem}
     />
    </>
  )
}

export default CartAirJordan