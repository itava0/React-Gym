'use client';

import { useState } from 'react';
import ClassCard from '@/components/Class/ClassCard';

function Classes() {
  const [load, setLoad] = useState(true);

  const loadMore = () => {
    setLoad(!load);
  };

  return (
    <>
      <section className="class-section text-center ">
        <div className="class-banner relative justify-center flex">
          <h1 className="text-white absolute bottom-[25px] text-[5rem] font-bold">
            Classes
          </h1>
        </div>
        <div className="grid container gap-12 page-padding py-[10rem] md:grid-cols-2 sm:grid-cols-1  lg:grid-cols-3 grid-rows-3 text-left">
          <ClassCard
            bgImg="cycling-bg"
            title="Fit Cycle"
            trainer="Dorian Yate"
            date="Monday: 6:00 am"
          />
          <ClassCard
            bgImg="yoga-bg"
            title="Yoga"
            trainer="Marta Mich"
            date="Tuesday: 9:00 am"
          />
          <ClassCard
            bgImg="burn45-bg"
            title="BODYCOMBAT"
            trainer="Shawn Ray"
            date="Wednesday: 10:00 am"
          />
          <ClassCard
            bgImg="fitness-bg"
            title="HIIT/CORE"
            trainer="Mia Malkova"
            date="Thursday: 9:00 am"
          />
          <ClassCard
            bgImg="bodyPump-bg"
            title="BodyPump"
            trainer="Larry Wheels"
            date="Monday: 1:00 pm"
          />
          <ClassCard
            bgImg="workout-bg"
            title="Strength & Legs"
            trainer="Shawn Ray"
            date="Tuesday: 2:00 pm"
          />
          <ClassCard
            bgImg="crossfit-bg"
            title="Crossfit"
            trainer="Jenifer Alex"
            date="Wednesday: 2:00 pm"
          />
          <ClassCard
            bgImg="running-bg"
            title="Running"
            trainer="Zinia Zessy"
            date="Thursday: 12:00 pm"
          />
           <ClassCard
            bgImg="zumba-bg"
            title="Zumba"
            trainer="Marta Mich"
            date="Fri: 9:00 am"
          />
        </div>
      </section>
    </>
  );
}

export default Classes;
