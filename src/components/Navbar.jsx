import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { RxHamburgerMenu } from 'react-icons/rx';

const Navbar = () => {
    return (
      <div className="shadow-sm">
        <div className="navbar max-w-300 mx-auto bg-base-100 text-[#101727] font-semibold">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <div>
                    <RxHamburgerMenu className='text-2xl font-bold'></RxHamburgerMenu>
                </div>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a>Products</a>
                </li>
                <li>
                  <a>Features</a>
                </li>
                <li>
                  <a>Pricing</a>
                </li>
                <li>
                  <a>Testimonials</a>
                </li>
                <li>
                  <a>FAQ</a>
                </li>
              </ul>
            </div>
            <a className="text-4xl font-bold bg-linear-to-b from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent p-6">
              DigiTools
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-8 px-1">
              <li>
                <a>Products</a>
              </li>
              <li>
                <a>Features</a>
              </li>
              <li>
                <a>Pricing</a>
              </li>
              <li>
                <a>Testimonials</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end gap-6">
            <a href="">
              <FaShoppingCart></FaShoppingCart>
            </a>
            <a href="/">Logout</a>
            <a className="btn bg-linear-to-r from-[#4f39f6] to-[#9514fa] rounded-full text-white">
              Get Started
            </a>
          </div>
        </div>
      </div>
    );
};

export default Navbar;