import React from "react";

function Hero() {
  return (
    <section className="hero-main relative  bg-[#ffbe2d] pb-[10%]  ">
      <div className=" container-wrapper pt-[25%] sm:pt-[6%]  overflow-hidden">
        <div className=" flex justify-between flex-col sm:flex-row items-center gap-4">
          <div className=" sm:w-1/2 w-full">
            <img src="images/logo2.png" alt="" className=" mx-auto " />
          </div>

          <div className=" sm:w-1/2 w-full">
            <img
              src="images/hero-txt.png"
              alt=""
              className=" mx-auto h-auto "
            />
            <div className=" box-s2 bg-white rounded-3xl px-6 py-2 mb-4-">
              <h1 className=" font-dream text-2xl text-center">
              Bee Pepe, the sweetest meme on Solana! Join $BPEPE for sweet profits, 1000x gains, and a Lambo ride! 🐝🍯
              </h1>
            </div>
         <div className=" flex items-center gap-4 justify-center mt-8">
         <a
              href="https://www.dextools.io/app/en/solana/pair-explorer/BQh9tCLYGZp5gFVEBiEY85EfepbsVZfbTr1mSk53HEp4?t=1720532988176"
              className=" mx-auto font-dream box-s2   text-xl text-black bg-[#fcfac2] hover:bg-[#1a4093] rounded-full p-2 border-2 border-[#000]  hover:text-[#fff] w-[200px] text-center font-bold uppercase"
            >
              {" "}
              DexTools
            </a>

            <a
              href="https://www.dextools.io/app/en/solana/pair-explorer/BQh9tCLYGZp5gFVEBiEY85EfepbsVZfbTr1mSk53HEp4?t=1720532988176"
              className=" mx-auto font-dream box-s2   text-xl text-black bg-[#fcfac2] hover:bg-[#1a4093] rounded-full p-2 border-2 border-[#000]  hover:text-[#fff] w-[200px] text-center font-bold uppercase"
            >
              {" "}
             Twitter
            </a>

         </div>
          </div>
        </div>
        <div>
          {/* <a href="/" className="text-sm sm:text-2xl font-bold text-center flex justify-center my-4"> </a> */}
        </div>
      </div>
    </section>
  );
}

export default Hero;
