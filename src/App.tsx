import Navbar from "./components/Navbar";
import bgDesktop from "@/assets/images/bg-intro-desktop.svg";
import bgMobile from "./assets/images/bg-intro-mobile.svg";
import phone from "./assets/images/image-mockups.png";
import { section2Data } from "./data/section2data";
import GridItems from "./components/GridItems";
import { section3Data } from "./data/section3data";
import GridItemsSec3 from "./components/GridItemsSec3";
import Footer from "./components/Footer";

interface Section2Data {
  title: string;
  text: string;
  imageP: string;
}

interface Section3Data {
  author: string;
  head: string;
  text: string;
  imgP: string;
}

function App() {
  return (
    <section className="w-full overflow-x-hidden">
      <Navbar />
      <section className="h-[calc(100vh)] bg-very-light-gray relative ">
        <div className="container h-full relative grid grid-cols-12">
          <img
            src={bgMobile}
            alt="bgMobile"
            className="lg:hidden absolute top-[-17px] md:top-[-115px] w-screen"
          />
          <img
            src={bgDesktop}
            alt="bgDesktop"
            className="absolute bottom-[40px] right-[-510px] hidden lg:block"
          />
          <img
            src={phone}
            alt="phone"
            className="absolute z-10 bottom-[-140px] right-[-190px] hidden lg:block"
          />
          <img
            src={phone}
            alt="phone"
            className="absolute top-[-120px] md:top-[-300px]  lg:hidden"
          />
          <div className="lg:col-start-2 lg:col-end-7 col-span-12 lg:flex items-center justify-center pt-[400px] md:pt-[650px] lg:pt-0">
            <div className="w-full  lg:block flex flex-col items-center text-center lg:text-left">
              <div className="lg:pr-12">
                <h1 className="lg:text-[50px] text-[46px] leading-tight mb-[30px] text-gray-head">
                  Next generation digital banking
                </h1>
              </div>
              <p className="mb-[40px] text-gray-p">
                Take your financial life online. Your Easybank account will be a
                one-stop-shop for spending, saving, budgeting, investing, and
                much more.
              </p>
              <button className="w-[200px] h-[50px] flex  items-center justify-center border-2 border-none rounded-full bg-gradient-to-r from-lime-green to-bright-cyan hover:opacity-50">
                <span className="text-white">Request Invite</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className=" min-h-[calc(100vh-80px)]  bg-gray-second relative lg:pt-[120px] pt-[60px] pb-[30px]">
        <div className="container">
          <div className="grid grid-cols-12 w-full">
            <div className="col-span-12 lg:col-span-7 text-center lg:text-left">
              <h1 className="text-[50px] leading-tight mb-[40px] text-gray-head">
                Why choose Easybank?
              </h1>
              <p className="text-gray-p lg:mb-[120px] mb-[80px]">
                We leverage Open Banking to turn your bank account into your
                financial hub. Control your finances like never before.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-12 w-full md:gap-4 lg:gap-8 ">
            {section2Data.map((data: Section2Data, i: number) => (
              <div className="col-span-12 md:col-span-6 lg:col-span-3 " key={i}>
                <GridItems {...data} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className=" min-h-[calc(100vh-80px)] bg-very-light-gray pt-12 lg:pt-[84px] md:pt-16 pb-12">
        <div className="container">
          <h1 className="text-gray-head text-[45px] mb-[65px]">
            Latest Articles
          </h1>
          <div className="grid grid-cols-12 md:gap-4 lg:gap-8 w-full">
            {section3Data.map((data: Section3Data, i: number) => (
              <div
                key={i}
                className="col-span-12 md:col-span-6 lg:col-span-3 rounded-md overflow-hidden"
              >
                <GridItemsSec3 {...data} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </section>
  );
}

export default App;
