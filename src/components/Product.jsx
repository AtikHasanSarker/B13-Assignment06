import React, { useState } from 'react';
import { IoMdCheckmark } from "react-icons/io";
import { toast } from 'react-toastify';

const Product = ({ product, carts, setCarts }) => {
    const { icon, name, description, price, period, features, tag } = product;
    const [isBuy, setIsBuy] = useState(false)

    const handleBuy = () => {
        setIsBuy(true);
        const isFound = carts.find((item) => item.id === product.id);
        if (isFound) {
          toast.error("Item already in cart!");
          return;
        }
      setCarts([...carts, product]);
      toast.success("Item Added to cart!")
    };

  return (
    <div>
      <div className="space-y-4 p-6 border border-gray-200 rounded-2xl relative">
        <div className="p-4 rounded-full border border-gray-200 w-16">
          <img src={icon} alt="" className="w-8 h-8" />
        </div>
        <h4 className="text-2xl font-bold">{name}</h4>
        <p>{description}</p>
        <div>
          <span className="text-2xl font-bold">${price}</span>
          <span className="text-[#627382]">/{period}</span>
        </div>
        <div>
          {features.map((i) => (
            <li className="flex gap-2 list-none items-baseline-last">
              <span className="text-green-500">
                <IoMdCheckmark />
              </span>
              {i}
            </li>
          ))}
        </div>
        <div>
          {isBuy ? (
            <button className="bg-green-600 btn text-white font-bold w-full rounded-full">
              <IoMdCheckmark />
              Added to Cart
            </button>
          ) : (
            <button
              onClick={handleBuy}
              className="btn text-white font-bold w-full rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa]"
            >
              Buy Now
            </button>
          )}
        </div>

        <div
          className={`badge rounded-full p-4 absolute top-3 right-3 ${tag == "popular" && "bg-[#E1E7FF] text-[#4F39F6]"} ${tag == "best seller" && "bg-[#FEF3C6] text-[#BB4D00]"} ${tag == "new" && "bg-[#DBFCE7] text-[#0A883E]"}`}
        >
          {tag}
        </div>
      </div>
    </div>
  );
};

export default Product;