import React, { useEffect } from "react";
import Card from "../Components/Card";
import Pill from "../Components/Pill";

const randomNumber = () => {
  return Math.floor(Math.random() * 90);
};

export default function Page1() {
  return (
    <div id="page1root" className="flex h-screen w-full bg-[#f5f5f5]">
      <div className="h-full w-full flex items-center justify-start h-full mx-12 min-h-screen border-x-1 border-[#D4D4D4]">
        <div className="flex w-full px-11 flex-col justify-center h-full items-center">
          <div className="flex flex-col justify-between items-start">
            {/* Pill */}
            <Pill />

            <div>
              {/* Heading */}
              <div className="pt-14 pb-11 max-w-[632px] gap-2">
                <div className="text-[82px] leading-[100%] font-medium tracking-[-3%] text-[#000]">
                  <div className="font-geist flex items-center justify-start gap-4.5 whitespace-nowrap">
                    Fueling
                    <span>
                      <img src="arrow.svg" />
                    </span>
                    growth
                  </div>
                  <div className="font-geist text-left">with every click</div>
                </div>
                <p className="pt-2 w-fill text-[22px] font-medium tracking-[-3%] text-[#6E6E6E]">
                  From landing pages to automation, we craft lead <br /> funnels
                  that grow your business on autopilot.
                </p>
              </div>

              {/* CTA */}
              <div className="flex gap-3.5">
                <button className="rounded-full bg-black px-7 py-4.5 text-white shadow-[inset_0_-2px_32.8px_0_rgba(255,255,255,0.57),0_42px_53px_3px_rgba(0,0,0,0.22)]">
                  Drive results now
                </button>
                <button className="font-geist tracking-[-3%] font-medium font-[20px] flex gap-2.5 rounded-full border-1 border-[#D7D7D7] bg-white px-7 py-4.5 whitespace-nowrap text-black">
                  <img src="play.svg" className="w-4" />
                  Learn more
                </button>
              </div>
            </div>

            {/* Testimonials */}
            <div className="flex flex-col gap-4.5 pt-30 justify-start">
              <div className="flex gap-2">
                {Array.from({ length: 5 }, (_, i) => {
                  return <img src="star.svg" key={i} className="w-6" />;
                })}
              </div>
              <div className="flex gap-[-8px] ml-2">
                {Array.from({ length: 4 }, (_, i) => {
                  return (
                    <img
                      src={`people0${i + 1}.svg`}
                      className="w-11 border-1 ml-[-8px] border-white rounded-full"
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Graphic */}
        <div className="flex relative gap-11 w-full h-screen overflow-hidden px-11 flex-col items-center">
          <div className="absolute bg-linear-[0deg,#F5F5F5,transparent_20%_80%,#F5F5F5] inset-0" />
          {Array.from({ length: 5 }, (_, i) => {
            return (
              <React.Fragment key={i}>
                <Card customClass={`rotate-${randomNumber()}`} />
              </React.Fragment>
            );
          })}
          <Card />
        </div>
      </div>
    </div>
  );
}
