"use client";
import { useState, useEffect } from "react";
import MainButton from "../Button/MainButton";
import { MembershipCardList } from "./MembershipCardList";

function MembershipCard() {
  return (
    <div className="space-y-8 md:flex lg:gap-[10rem] md:justify-center md:space-y-0 md:space-x-8">
      {MembershipCardList.map((card, id) => (
        <section key={id} className="flex flex-col items-center bg-white shadow-xl md:w-[28rem] relative rounded-lg">
          <div className="text-[20px] font-bold text-center py-6 text-[#646464] text-transform: uppercase">
            {card.plan}
          </div>
          <p className="text-center text-[55px] font-bold relative py-[10px]">
            <span className="text-[30px] text-[#6d6d6d] absolute font-normal top-8 -left-[2rem]">
              $
            </span>
            {card.price}
            <span className="text-[22px] text-[#6d6d6d] absolute font-normal bottom-[25px] -right-[7rem]">
              /Month
            </span>
          </p>
          <div className="flex flex-col text-[16px] font-medium text-center gap-8 text-[#646464] pt-6">
            <p>{card.amenities[0]}</p>
            <p>{card.amenities[1]}</p>
            <p>{card.amenities[2]}</p>
            <p>{card.amenities[3]}</p>
          </div>
          <MainButton
            color={`!text-white`}
            bg={`bg-[#ff0336]`}
            text="Join Now"
            cN="pricing-cta"
            goTo={`/checkout?id=${card.Price_ID}`}
          >
          </MainButton>
        </section>
      ))}
    </div>
  );
}

export default MembershipCard;

