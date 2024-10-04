import { BsInstagram, BsTwitterX } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";
function Footer() {
  return (
    <section
      className=" mt-0 sm:mt-[-2%]  pb-10 sm:mb-0 hero-main relative "
      id="contact"
    >
      <img
        src="images/footer-divider.png"
        alt=""
        className=" absolute -top-[4%] sm:top-[-15%] left-0 right-0"
      />

      <div className=" container-wrapper relative  pt-[10%] ">
        <div className=" flex  flex-col sm:flex-row justify-between gap-4 items-center">
          <div>
            <img src="images/logo.png" alt="" className=" h-[240px]" />
          </div>

          <div>
            <div
              className="bg-white w-full border-4 border-black box-s2 rounded-3xl p-4  "
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <h1>
                Disclaimer:
                <br />
                This is a CTO project and is a memetoken. We are not responsible
                for financial losses. Memetokens can go up as well as fall to 0.
                DYOR.
              </h1>
            </div>
          </div>

          <div className=" flex items-center gap-4 px-2">
            <a
              href="/"
              className=" border-2 border-black rounded-full p-2 text-xl bg-white"
            >
              <BsTwitterX />
            </a>

            <a
              href="/"
              className=" border-2 border-black rounded-full p-2 text-xl bg-white"
            >
              <FaTelegram />
            </a>

            <a
              href="/"
              className=" border-2 border-black rounded-full p-2 text-xl bg-white"
            >
              <BsInstagram />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
