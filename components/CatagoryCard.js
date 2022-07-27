import React from "react";

function CatagoryCard({ cName, cNumber }) {
  return (
    <div className="pl-8">
      <h3 className=" text-2xl ">{cName}</h3>
      <p className=" text-sm text-Gray-2 pb-8 ">{cNumber}</p>
    </div>
  );
}

export default CatagoryCard;
