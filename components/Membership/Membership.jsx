import Image from "next/image";
import TitleRed from "../../public/About/titlebg.svg";
import MembershipCard from "./MembershipCard";

function Membership() {
  return (
    <>
      <section id="pricing" className="pricing-section relative">
        <div className="container page-padding py-[20rem] ">
          {/* title div -- */}
          <div className="flex flex-col text-center relative items-center">
            <p className="text-white relative z-10 text-[15px] uppercase font-bold mb-8">
            Membership
            </p>
            <Image
              src={TitleRed}
              alt="text_bg"
              className="w-[23rem] absolute -top-[10px] "
            />

            <h2 className="text-[3.4rem] font-bold mb-4">
            COMPARE MEMBERSHIP PLANS AND PRICES
            </h2>
            <p className="text-[#646464] font-medium text-[15px] ">
            Crushing your health and fitness goals starts here
              <br /> join us online today
            </p>
          </div>
          {/* pricing boxes */}
          <div className="mt-32 relative z-[2] max-md:flex-col max-md:items-center ">
            <MembershipCard />
          </div>
        </div>
      </section>
    </>
  );
}

export default Membership;