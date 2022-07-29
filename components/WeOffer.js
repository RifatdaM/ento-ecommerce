import React from "react";
import WeOfferReusableComp from "./WeOfferReusableComp";
import {
  ShoppingBagIcon,
  CurrencyBangladeshiIcon,
  ClockIcon,
  PhoneIcon,
} from "@heroicons/react/outline";

function WeOffer() {
  return (
    <div className="container py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-12">
      <WeOfferReusableComp
        Icon={ShoppingBagIcon}
        title="Shop Online"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
      />
      <WeOfferReusableComp
        Icon={CurrencyBangladeshiIcon}
        title="Free Shipping"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
      />
      <WeOfferReusableComp
        Icon={ClockIcon}
        title="Return Policy"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
      />
      <WeOfferReusableComp
        Icon={PhoneIcon}
        title="24/7 Support"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
      />
    </div>
  );
}

export default WeOffer;
