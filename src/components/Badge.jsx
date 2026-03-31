import React from 'react';

const Badge = () => {
    return (
      <div className="bg-linear-to-r from-[#4f39f6] to-[#9514fa]">
        <div className="flex py-15 justify-center">
          <div className="text-white border-r px-6 md:px-15 lg:px-30">
            <h3 className="text-2xl md:text-4xl lg:text-6xl font-extrabold mb-3">500+</h3>
            <div className="md:text-2xl">Active Users</div>
          </div>
          <div className="text-white border-r px-8 md:px-15 lg:px-30">
            <h3 className="text-2xl md:text-4xl lg:text-6xl font-extrabold mb-3">200+</h3>
            <div className="md:text-2xl">Premium Tools</div>
          </div>
          <div className="text-white px-8 md:px-15 lg:px-30">
            <h3 className="text-2xl md:text-4xl lg:text-6xl font-extrabold mb-3">4.9</h3>
            <div className="md:text-2xl">Rating</div>
          </div>
        </div>
      </div>
    );
};

export default Badge;