import Cart from './Cart';
import { toast } from 'react-toastify';
import { FiShoppingCart } from 'react-icons/fi';

const Carts = ({ carts, setCarts }) => {
  const totalPrice = carts.reduce((sum, cart) => sum + cart.price, 0);
  const handlePayment = () => {
    setCarts([])
    toast.success("Payment Successful!")
  }
  return (
    <div className="p-10 max-w-300 mx-auto border border-gray-200 rounded-lg my-10">
      <h2 className="font-bold text-3xl">Your Cart</h2>
      <div>
        <div className="space-y-4 my-6">
          {carts.map((cart) => (
            <Cart cart={cart} carts={carts} setCarts={setCarts} />
          ))}
        </div>
        <div>
          {carts.length === 0 && (
            <div className="my-10 text center flex flex-col items-center text-gray-500 space-y-3">
              <div>
                <FiShoppingCart className="text-5xl text-gray-300" />
              </div>
              <h2>Your cart is empty</h2>
            </div>
          )}
        </div>
        <div>
          {carts.length > 0 && (
            <div>
              <div className="rounded-lg bg-amber-100 p-2 flex justify-between mb-6">
                <span>Total</span>
                <span className="font-bold text-2xl">${totalPrice}</span>
              </div>
              <button
                onClick={handlePayment}
                className="btn p-6 text-xl bg-linear-to-r from-[#4f39f6] to-[#9514fa] w-full rounded-full text-white font-bold"
              >
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Carts;