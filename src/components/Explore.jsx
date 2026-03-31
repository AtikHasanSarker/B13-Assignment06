import React from 'react';

const Explore = () => {
    return (
      <div className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] py-30 px-5 flex items-center flex-col text-white">
        <div className="text-center">
          <h3 className="text-4xl md:text-5xl font-extrabold">
            Ready to Transform Your Workflow?
          </h3>
          <div className="my-4">
            Join thousands of professionals who are already using Digitools to
            work smarter. <br /> Start your free trial today.{" "}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-6 mb-4">
          <button className="btn font-bold rounded-full bg-white">
            <span className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent">
              Explore Products
            </span>
          </button>
          <button className="btn rounded-full bg-transparent border text-white">
            View Pricing
          </button>
        </div>
        <div>14-day free trial • No credit card required • Cancel anytime</div>
      </div>
    );
};

export default Explore;