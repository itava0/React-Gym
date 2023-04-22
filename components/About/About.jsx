"use client";
import Image from "next/image";
import AboutCards from "./AboutCards";
import TitleRed from "../../public/About/titlebg.svg";
import GirlRunning from "../../public/About/girl-run.png";
import GirlRedBg from "../../public/About/girl-redbg.svg";
import GirlText from "../../public/About/girl-side-text.png";
import MainButton from "../Button/MainButton";

const About = () => {
  return (
    <>
      <section className="flex flex-col justify-between gap-2 about-section pb-[20rem]">
        <div className="container page-padding">
          {/* about cards */}
          <div className="about-cards flex gap-10 -mt-[8.5rem] max-md:flex-col">
            <AboutCards />
          </div>

          {/* text-img div */}
          <div
            id="about"
            className=" grid grid-cols-[50fr,50fr] gap-[3rem] max-md:grid-cols-1"
          >
            {/* about text */}
            <div className="mt-[10.5rem] relative md:items-center md:flex md:flex-col md:text-center md:w-[full]">
              <p className="text-white font-semibold text-[15px] relative uppercase z-10 pl-16 md:pl-0 mb-12">
                who we are
              </p>
              <Image
                src={TitleRed}
                alt="text_bg"
                className="w-[31%] absolute -top-[6px] max-md:w-[22rem]"
              />
              <h2 className="text-[35px] font-bold leading-tight mb-6 max-md:w-[100%]">
                Take Your Health And Body To Next Level
              </h2>
              <p className="text-[16px] text-[#646464] font-medium ">
                Take your health and body to the next level with our
                comprehensive program designed to help you reach your fitness
                goals.
              </p>
              {/* about text icons */}
              <div className="flex mt-12 mb-[7rem] gap-[2px] max-md:flex-col ">
                <div className="flex flex-col  items-center text-center py-10 px-14 pl-7 min620:px-0">
                  <h3 className="uppercase font-bold text-[20px] leading-snug">
                    professional <br /> trainers
                  </h3>
                </div>

                <div className="flex flex-col  items-center text-center py-10 px-14 pl-7 ">
                  <h3 className="uppercase font-bold text-[20px] leading-snug">
                    modern <br /> equipments
                  </h3>
                </div>

                <div className="flex flex-col  items-center text-center py-10 px-14 pl-7 ">
                  <h3 className="uppercase font-bold text-[20px] leading-snug">
                    fancy gym <br /> machines
                  </h3>
                </div>
              </div>
              {/* cta button */}
              <MainButton
                color={`!text-white`}
                bg={`bg-[#3f3f3f]`}
                cN="about-cta"
                arrowColor={`!text-white`}
                hover={`hover:bg-[#FF0336]`}
                text="take a tour"
                goTo="/classes"
              />
            </div>
            {/* img side */}
            <div className="relative max-md:hidden">
              <Image
                src={GirlRunning}
                alt="girl_running"
                className="girl-running"
              />
              <Image src={GirlRedBg} alt="bg-red" className="girl-bg" />
              <Image src={GirlText} alt="bg-text" className="girl-text" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About;
