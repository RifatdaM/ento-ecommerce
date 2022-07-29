import React from "react";
import { StarIcon } from "@heroicons/react/outline";
import Image from "next/image";

function ClientCard({ rating, title, description, image, name, company }) {
  return (
    <div>
      {/* rating */}
      <div className="flex items-center gap-3">
        <p>{rating}</p>
        <div className="flex gap-1">
          <StarIcon className="h-3 text-Secondary-dark fill-Secondary-dark" />
          <StarIcon className="h-3 text-Secondary-dark fill-Secondary-dark" />
          <StarIcon className="h-3 text-Secondary-dark fill-Secondary-dark" />
          <StarIcon className="h-3 text-Secondary-dark fill-Secondary-dark" />
          <StarIcon className="h-3 text-Star-light fill-Star-light" />
        </div>
      </div>
      {/* title */}
      <h3 className="text-xl text-Primary-dark font-medium py-4">{title}</h3>
      <p className=" text-sm leading-6 text-Gray-2">{description}</p>

      <div className="flex items-center gap-4 pt-12">
        <div className="h-12 w-12 overflow-hidden rounded-full">
          <Image src={image} alt={name} className="object-cover" />
        </div>
        <div>
          <h4 className=" text-Primary-dark font-medium pb-2">{name}</h4>
          <p className=" text-xs text-Gray-2">{company}</p>
        </div>
      </div>
    </div>
  );
}

export default ClientCard;
