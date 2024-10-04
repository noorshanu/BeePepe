import AboutUs from "./components/AboutUs";
import BorderSec from "./components/BorderSec";
import ChooseHero from "./components/ChooseHero";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowToBuy from "./components/HowToBuy";
import Navbar from "./components/Navbar";
import Taxs from "./components/Taxs";

function App() {
  return (
    <>
      <div className=" relative overflow-x-hidden">
        <Navbar />
        <Hero />
        <div className=" -mt-[5%] z-50 relative">
          <img src="images/cloud.svg" alt="" />
        </div>
        <BorderSec />
        <div className=" bg-about">
          <AboutUs />
          <div className=" relative flex flex-col sm:flex-row justify-evenly items-center gap-8 py-[2%]  mt-8 ">
            <h1 className=" txt-s font-dream text-white text-5xl sm:text-[100px] text-center">
              Tokenomics
            </h1>
          </div>
          {/* <Taxs /> */}

          <ChooseHero />
        </div>
        <div className=" -mt-[11%] z-50 relative">
          <img src="images/cloud2.svg" alt="" />
        </div>
        <HowToBuy />
        <div className="main-bg2 py-4">
        <div className=" mt-[4%] z-50 relative">
         
        </div>
          {/* <Faq /> */}
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
