import React, { useState } from 'react';
import Products from "./Products";
import Carts from "./Carts";

const Tools = ({ productsPromise, setCartCount }) => {
    const [activeTab, setActiveTab] = useState("products");
    const [carts, setCarts] = useState([]);
    setCartCount(carts.length);
  return (
    <div>
      <div className="my-30">
        <div className="text-center">
          <h2 className="text-5xl font-extrabold">Premium Digital Tools</h2>
          <p className="my-4">
            Choose from our curated collection of premium digital products
            designed <br /> to boost your productivity and creativity.
          </p>
        </div>
        <div>
          <div className="tabs justify-center">
            <div className=" tabs-box bg-transparent border border-gray-200 rounded-full">
              <input
                type="radio"
                name="my_tabs_1"
                className={`tab w-40 rounded-full text-xl ${
                  activeTab === "products"
                    ? "bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white"
                    : ""
                }`}
                aria-label="Products"
                onClick={() => setActiveTab("products")}
                defaultChecked
              />
              <input
                id="cart"
                type="radio"
                name="my_tabs_1"
                className={`tab w-40 rounded-full text-xl ${
                  activeTab === "cart"
                    ? "bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white"
                    : ""
                }`}
                aria-label={`Cart (${carts.length})`}
                onClick={() => setActiveTab("cart")}
              />
            </div>
          </div>
          {activeTab === "products" && (
            <Products
              productsPromise={productsPromise}
              carts={carts}
              setCarts={setCarts}
            />
          )}
          {activeTab === "cart" && <Carts carts={carts} setCarts={setCarts} />}
        </div>
      </div>
    </div>
  );
};

export default Tools;