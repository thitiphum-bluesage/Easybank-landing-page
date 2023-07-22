import logo from "../assets/images/logof.svg";
import fb from "../assets/images/icon-facebook.svg";
import yt from "../assets/images/icon-youtube.svg";
import tw from "../assets/images/icon-twitter.svg";
import pt from "../assets/images/icon-pinterest.svg";
import ig from "../assets/images/icon-instagram.svg";

function Footer() {
  return (
    <div className="w-full bg-dark-blue py-12 lg:h-[220px] text-white">
      <div className="container h-full">
        <div className="lg:flex items-center justify-between h-full">
          <div className="lg:flex items-center justify-between h-full lg:w-[50%]">
            <div className="flex flex-col items-center lg:items-start justify-between h-full">
              <img src={logo} alt="logo" className="mb-[40px] lg:mb-0" />
              <div className="flex justify-between items-center w-[170px] mb-[30px] lg:mb-0">
                <img src={fb} alt="fb" className="hover:cursor-pointer" />
                <img src={yt} alt="yt" className="hover:cursor-pointer" />
                <img src={tw} alt="tw" className="hover:cursor-pointer" />
                <img src={pt} alt="pt" className="hover:cursor-pointer" />
                <img src={ig} alt="ig" className="hover:cursor-pointer" />
              </div>
            </div>
            <ul className="flex flex-col items-center lg:items-start justify-between h-full">
              <li className="hover:cursor-pointer hover:text-lime-green mb-[10px] lg:mb-0">
                About Us
              </li>
              <li className="hover:cursor-pointer hover:text-lime-green mb-[10px] lg:mb-0">
                Contact
              </li>
              <li className="hover:cursor-pointer hover:text-lime-green mb-[10px] lg:mb-0">
                Blog
              </li>
            </ul>
            <ul className="flex flex-col items-center  lg:items-start justify-between h-full mb-[25px] lg:mb-0">
              <li className="hover:cursor-pointer hover:text-lime-green mb-[10px] lg:mb-0">
                Careers
              </li>
              <li className="hover:cursor-pointer hover:text-lime-green mb-[10px] lg:mb-0">
                Support
              </li>
              <li className="hover:cursor-pointer hover:text-lime-green mb-[10px] lg:mb-0">
                Privacy Policy
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center lg:items-end justify-between h-full">
            <button className="w-[200px] h-[50px] flex  items-center justify-center border-2 border-none rounded-full bg-gradient-to-r from-lime-green to-bright-cyan hover:opacity-50">
              <span className="text-white">Request Invite</span>
            </button>
            <p className="mt-[25px] lg:mt-0 text-gray-p">
              © Easybank. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
