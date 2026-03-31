import user from "../assets/user.png"
import Package from "../assets/package.png"
import rocket from "../assets/rocket.png"

const Steps = () => {
    return (
      <div className="bg-[#F9FAFC] py-30">
        <div className="max-w-300 mx-auto">
          <div className="text-center">
            <h3 className="text-5xl font-extrabold">Get Started in 3 Steps</h3>
            <p className="my-4">
              Start using premium digital tools in minutes, not hours.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5 mt-10">
            <div className="relative flex flex-col gap-4 items-center px-6 py-22 border border-gray-200 rounded-lg">
              <div className="p-5 bg-[#f4e8ff] rounded-full">
                <img src={user} alt="" />
              </div>
              <h4 className="text-2xl font-bold">Create Account</h4>
              <p className="text-center">
                Sign up for free in seconds. No credit card required to get
                started.
              </p>
              <div className="absolute font-bold text-[14px] top-5 right-5 bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white py-2 px-2.5 rounded-full">
                01
              </div>
            </div>
            <div className="relative flex flex-col gap-4 items-center px-6 py-22 border border-gray-200 rounded-lg">
              <div className="p-5 bg-[#f4e8ff] rounded-full">
                <img src={Package} alt="" />
              </div>
              <h4 className="text-2xl font-bold">Create Account</h4>
              <p className="text-center">
                Sign up for free in seconds. No credit card required to get
                started.
              </p>
              <div className="absolute font-bold text-[14px] top-5 right-5 bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white py-2 px-2.5 rounded-full">
                02
              </div>
            </div>
            <div className="relative flex flex-col gap-4 items-center px-6 py-22 border border-gray-200 rounded-lg">
              <div className="p-5 bg-[#f4e8ff] rounded-full">
                <img src={rocket} alt="" />
              </div>
              <h4 className="text-2xl font-bold">Create Account</h4>
              <p className="text-center">
                Sign up for free in seconds. No credit card required to get
                started.
              </p>
              <div className="absolute font-bold text-[14px] top-5 right-5 bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white py-2 px-2.5 rounded-full">
                03
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Steps;