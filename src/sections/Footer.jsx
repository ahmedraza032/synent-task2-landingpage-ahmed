import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-black w-full sm:px-[150px] p-6 flex flex-col sm:flex-row gap-5">
      <div className="sm:w-[25%]">
        <p className="text-2xl font-bold text-green-300 my-3">REACT</p>
        <p className="text-white my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          optio esse officiis commodi exercitationem tempora placeat
          necessitatibus pariatur minima consectetur.
        </p>
        <div className="flex gap-3">
          <CiFacebook className="text-white text-3xl cursor-pointer" />
          <CiInstagram className="text-white text-3xl cursor-pointer" />
          <CiTwitter className="text-white text-3xl cursor-pointer" />
          <FaGithub className="text-white text-3xl cursor-pointer" />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between sm:w-[75%]">
        <div className="flex flex-col gap-3 my-3">
          <p className="text-gray-400">Solutions</p>
          <a href="#features" className="text-white">
            Analytics
          </a>
          <a href="#features" className="text-white">
            Marketing
          </a>
          <a href="#pricing" className="text-white">
            Commerce
          </a>
          <a href="#newsletter" className="text-white">
            Insights
          </a>
        </div>

        <div className="flex flex-col gap-3 my-3">
          <p className="text-gray-400">Support</p>
          <a href="#pricing" className="text-white">
            Pricing
          </a>
          <a href="#features" className="text-white">
            Documentation
          </a>
          <a href="#newsletter" className="text-white">
            Guides
          </a>
          <a href="#home" className="text-white">
            API Status
          </a>
        </div>

        <div className="flex flex-col gap-3 my-3">
          <p className="text-gray-400">Company</p>
          <a href="#home" className="text-white">
            About
          </a>
          <a href="#features" className="text-white">
            Blog
          </a>
          <a href="#pricing" className="text-white">
            Jobs
          </a>
          <a href="#newsletter" className="text-white">
            Press
          </a>
          <a href="#home" className="text-white">
            Partners
          </a>
        </div>
        <div className="flex flex-col gap-3 my-3">
          <p className="text-gray-400">Legal</p>
          <a href="#home" className="text-white">
            Claim
          </a>
          <a href="#newsletter" className="text-white">
            Privacy Policy
          </a>
          <a href="#features" className="text-white">
            Terms & Conditions
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
