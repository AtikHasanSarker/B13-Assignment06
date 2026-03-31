import PulseImg from "../assets/Pulse-dot.svg"
import Play from "../assets/Play.png"
import Banner from "../assets/banner.png"
import { IoPlayOutline } from "react-icons/io5";

const Hero = () => {
    return (
      <div className="max-w-300 mx-auto px-5">
        <div className="hero my-21.25">
          <div className="flex flex-col lg:flex-row-reverse gap-15 items-center">
            <div>
              <img src={Banner} className="md:max-w-125 rounded-lg" />
            </div>
            <div className="space-y-4">
              <button className="flex items-center gap-2 bg-[#E1E7FF] px-4 py-2 rounded-full font-medium">
                <img src={PulseImg} alt="" />
                <span className="bg-linear-to-b from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent">
                  New: AI-Powered Tools Available
                </span>
              </button>
              <h1 className="text-5xl md:text-7xl font-bold">
                Supercharge Your <br /> Digital Workflow
              </h1>
              <p className="text-[#627382] mb-4 text-[18px]">
                Access premium AI tools, design assets, templates, and
                productivity <br /> software—all in one place. Start creating
                faster today. <br /> Explore Products
              </p>
              <div className="flex gap-4">
                <button className="btn text-white rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] p-5">
                  Explore Products
                </button>
                <div className="p-0.5 rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa]">
                  <button className="btn text-[#4f39f6] hover:text-white font-bold hover:bg-linear-to-r hover:from-[#4f39f6] hover:to-[#9514fa] rounded-full flex items-center gap-1">
                    <span>
                      <IoPlayOutline className="text-xl" />
                    </span>
                    <span>Watch Demo</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Hero;