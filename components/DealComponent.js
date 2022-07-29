import React from "react";
import TimerComponent from "./TimerComponent";

function DealComponent() {
  return (
    <div className="bg-[url('../public/hero4.png')] h-[600px] bg-cover bg-no-repeat bg-center ">
      <div className="text-Primary-dark container py-12 text-center">
        <h2 className=" font-medium text-3xl pb-6">Deals of the days</h2>
        <p className="px-12">New trendy wood comfortable chare collection</p>
        <TimerComponent days='48' hours='20' minutes='36' seconds='42'/>
        <button className=" bg-black text-white font-medium px-8 md:px-12 py-3 text-xs md:text-base">Shop Now</button>
      </div>
    </div>
  );
}

export default DealComponent;
