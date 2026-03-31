import { FaYoutube, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#0B1220] pt-30 pb-7.5 px-6 md:px-16">
      <div className="max-w-300 mx-auto">
        <div className="grid grid-cols-1 text-gray-400 md:grid-cols-6 gap-10">
          <div className="md:col-span-2">
            <h2 className=" text-2xl font-semibold mb-4 text-white">
              DigiTools
            </h2>
            <div className="text-sm leading-relaxed max-w-sm">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-white">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>Features</li>
              <li>Pricing</li>
              <li>Templates</li>
              <li>Integrations</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-white">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-white">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>Documentation</li>
              <li>Help Center</li>
              <li>Community</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <div className="font-medium mb-4 text-white">Social Links</div>
            <div className="flex items-center gap-4">
              <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 cursor-pointer">
                <FaYoutube className="text-white text-sm" />
              </div>
              <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 cursor-pointer">
                <FaFacebookF className="text-white text-sm" />
              </div>
              <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 cursor-pointer">
                <FaXTwitter className="text-white text-sm" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © 2026 Digitools. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-gray-500">
            <span className="hover:text-white cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-white cursor-pointer">
              Terms of Service
            </span>
            <span className="hover:text-white cursor-pointer">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
