import React from 'react';
import { toast } from 'react-toastify';

const Cart = ({ cart, carts, setCarts }) => {
  const { icon, name, price } = cart;
  const handleRemove = (cart) =>{
    const filteredCart = carts.filter(i => i.id !== cart.id)
    setCarts(filteredCart)
    toast.warn("Item removed!");
  }

  return (
    <div className="bg-[#F9FAFC] p-5 rounded-lg flex justify-between items-center">
      <div className="flex items-center gap-4">
        <div className="p-4 rounded-full border border-gray-200 w-16">
          <img src={icon} alt="" className="w-8 h-8" />
        </div>
        <div>
          <h5 className="text-xl font-semibold">{name}</h5>
          <p className="font-medium text-[#627382]">${price}</p>
        </div>
      </div>
      <button onClick={() => handleRemove(cart)} className="btn text-red-500 font-bold">
        Remove
      </button>
    </div>
  );
};

export default Cart;