import React, { use } from 'react';
import { IoMdCheckmark } from "react-icons/io";

const Products = ({ productsPromise }) => {
    const products = use(productsPromise);
  return (
    <div className="max-w-300 mx-auto my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div className="space-y-4 p-6 border border-gray-200 rounded-lg relative">
            <div className="p-4 rounded-full border border-gray-200 w-16">
              <img src={product.icon} alt="" className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-bold">{product.name}</h4>
            <p>{product.description}</p>
            <p>
              <span className="text-2xl font-bold">${product.price}</span>/
              {product.period}
              <span></span>
            </p>
            <div>
              {product.features.map((i) => (
                <li className="flex gap-2 list-none items-baseline-last">
                  <span className="text-green-500">
                    <IoMdCheckmark />
                  </span>
                  {i}
                </li>
              ))}
            </div>
            <button className="btn bg-linear-to-r from-[#4f39f6] to-[#9514fa] w-full rounded-full text-white font-bold">
              Buy Now
            </button>
            <div
              className={`badge absolute top-3 right-3 ${product.tag == "popular" && "bg-[#E1E7FF] text-[#4F39F6]"} ${product.tag == "best seller" && "bg-[#FEF3C6] text-[#BB4D00]"} ${product.tag == "new" && "bg-[#DBFCE7] text-[#0A883E]"}`}
            >
              {product.tag}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;