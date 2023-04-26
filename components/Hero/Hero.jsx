"use client";

import Image from "next/image";
import TitleBg from "../../public/titlebg.svg";
import MainButton from "../Button/MainButton";

const Hero = () => {
  return (
    <>
    <section
      id="home"
      className="hero-section w-full h-screen max-md:flex max-md:justify-center max-md:text-center"
    >
      <div className="container-hero">
        {/* hero section */}
        <div
          className="flex flex-col text-white
         absolute hero-text max-[800px]:items-center"
        >
          <p className="text-black text-[16px] uppercase font-medium relative z-10 pl-16 max-md:pl-0 mb-8">
            find your energy
          </p>
          <Image
            src={TitleBg}
            alt="text_bg"
            className=" w-[85%] absolute -top-3 title-white max-md:w-[24rem] "
          />
          <h1 className="min-md:font-bold text-[32px] min-md:text-[48px] uppercase mb-[4rem]">
            make your body <br />
            <span className="font-thin">fit & perfect</span>
          </h1>

          <MainButton
            color={`text-black`}
            bg={`bg-white`}
            text="our classes"
            goTo="/classes"
          />
        </div>
      </div>
    </section>
  </>
  )
}

export default Hero;