import { LuShoppingCart } from 'react-icons/lu';
import { RxHamburgerMenu } from 'react-icons/rx';


const Navbar = ({ cartCount, setActiveTab }) => {
  return (
    <div className="shadow-sm sticky top-0 bg-white z-50">
      <div className="navbar max-w-300 mx-auto bg-base-100 text-[#101727] font-semibold">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <div>
                <RxHamburgerMenu className="text-xl font-bold"></RxHamburgerMenu>
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
          <a className="text-3xl md:text-4xl font-bold bg-linear-to-b from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent py-4">
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
        <div className="navbar-end gap-5">
          <a onClick={() => setActiveTab("cart")} className="relative">
            <LuShoppingCart className="text-xl" />
            {cartCount > 0 && (
              <div className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] px-1.25 py-px rounded-full">
                {cartCount}
              </div>
            )}
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