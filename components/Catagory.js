import React from "react";
import CatagoryCard from "./CatagoryCard";
import Image from "next/image";
import Cactus from "../public/10.png";
import Bed from "../public/4.png";
import Lamp from "../public/3.png";
import Sofa from "../public/5.png";
import Table from "../public/7.png";
function Catagory() {
  return (
    <div className="container my-8 lg:h-[600px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 lg:auto-rows-[minmax(40px,_auto)] gap-8 lg:gap-4">
      <div className=" bg-Green-light flex catagoryCard lg:row-span-5 lg:col-span-2">
        <Image src={Cactus} alt="Cactus" className=" object-contain"/>
        <CatagoryCard cName="Cactus" cNumber="150 collection" />
      </div>
      <div className=" bg-Blue-2 catagoryCard lg:col-span-2 lg:row-span-4">
        <Image src={Bed} alt="Bed" className=" object-contain"/>
        <CatagoryCard cName="Bed" cNumber="150 collection" />
      </div>
      <div className=" bg-Yellow-light catagoryCard lg:col-start-5 lg:row-start-1 lg:row-end-[9]">
        <Image src={Lamp} alt="Lamp" className=" object-contain"/>
        <CatagoryCard cName="Lamp" cNumber="150 collection" />
      </div>
      <div className=" bg-Blue-light catagoryCard lg:col-start-1 lg:col-span-2 row-span-3">
        <Image src={Sofa} alt="Sofa" className=" object-contain"/>
        <CatagoryCard cName="Sofa" cNumber="150 collection" />
      </div>
      <div className=" bg-Secondary-light md:col-span-2 lg:row-span-4 lg:row-start-5 lg:col-start-3 catagoryCard">
        <Image src={Table} alt="Table" className=" object-contain"/>
        <CatagoryCard cName="Table" cNumber="150 collection" />
      </div>
    </div>
  );
}

export default Catagory;
