import React from 'react';
import { IoMdCheckmark } from 'react-icons/io';

const Pricing = () => {
    return (
      <div className="py-30">
        <div className="max-w-300 mx-auto">
          <div className="text-center">
            <h3 className="text-5xl font-extrabold">
              Simple, Transparent Pricing
            </h3>
            <p className="my-4">
              Choose the plan that fits your needs. Upgrade or downgrade
              anytime.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5 mt-10">
            <div className="relative flex flex-col gap-4 justify-between p-6 border border-gray-200 rounded-2xl">
              <div>
                <h4 className="text-2xl font-bold">Starter</h4>
                <p>Perfect for getting started</p>
              </div>
              <div>
                <span className="text-4xl font-bold">$0</span>
                <p className="text-xl">/Month</p>
              </div>
              <ul>
                <li className="flex gap-2 items-center">
                  <IoMdCheckmark className="text-green-500" />
                  Access to 10 free tools
                </li>
                <li className="flex gap-2 items-center">
                  <IoMdCheckmark className="text-green-500" />
                  Basic templates
                </li>
                <li className="flex gap-2 items-center">
                  <IoMdCheckmark className="text-green-500" />
                  Community support
                </li>
                <li className="flex gap-2 items-center">
                  <IoMdCheckmark className="text-green-500" />1 project per
                  month
                </li>
              </ul>
              <button className="btn text-white font-bold w-full rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa]">
                Get Started Free
              </button>
            </div>
            <div className="text-white relative flex flex-col gap-4 justify-between p-6 bg-linear-to-r from-[#4f39f6] to-[#9514fa] border border-gray-200 rounded-2xl">
              <div>
                <h4 className="text-2xl font-bold">Pro</h4>
                <div>Best for professionals</div>
                <div className="flex justify-center">
                  <div className="badge bg-[#FEF3C6] absolute -top-2 rounded-full font-medium text-[#BB4D00]">
                    Most Popular
                  </div>
                </div>
              </div>
              <div>
                <span className="text-4xl font-bold">$29</span>
                <span className="text-xl">/Month</span>
              </div>
              <ul>
                <li className="flex gap-2 items-center">
                  <IoMdCheckmark />
                  Access to all premium tools
                </li>
                <li className="flex gap-2 items-center">
                  <IoMdCheckmark />
                  Unlimited templates
                </li>
                <li className="flex gap-2 items-center">
                  <IoMdCheckmark />
                  Priority support
                </li>
                <li className="flex gap-2 items-center">
                  <IoMdCheckmark />
                  Unlimited projects
                </li>
                <li className="flex gap-2 items-center">
                  <IoMdCheckmark />
                  Cloud sync
                </li>
                <li className="flex gap-2 items-center">
                  <IoMdCheckmark />
                  Advanced analytics
                </li>
              </ul>
              <button className="btn font-bold w-full rounded-full bg-white">
                <span className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent">
                  Start Pro Trial
                </span>
              </button>
            </div>
            <div className="relative flex flex-col gap-4 justify-between p-6 border border-gray-200 rounded-2xl">
              <div>
                <h4 className="text-2xl font-bold">Enterprise</h4>
                <p>For teams and businesses</p>
              </div>
              <div>
                <span className="text-4xl font-bold">$99</span>
                <p className="text-xl">/Month</p>
              </div>
              <ul>
                <li className="flex gap-2 items-center">
                  <IoMdCheckmark className="text-green-500" />
                  Everything in Pro
                </li>
                <li className="flex gap-2 items-center">
                  <IoMdCheckmark className="text-green-500" />
                  Team collaboration
                </li>
                <li className="flex gap-2 items-center">
                  <IoMdCheckmark className="text-green-500" />
                  Custom integrations
                </li>
                <li className="flex gap-2 items-center">
                  <IoMdCheckmark className="text-green-500" />
                  Dedicated support
                </li>
                <li className="flex gap-2 items-center">
                  <IoMdCheckmark className="text-green-500" />
                  SLA guarantee
                </li>
                <li className="flex gap-2 items-center">
                  <IoMdCheckmark className="text-green-500" />
                  Custom branding
                </li>
              </ul>
              <button className="btn text-white font-bold w-full rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa]">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Pricing;