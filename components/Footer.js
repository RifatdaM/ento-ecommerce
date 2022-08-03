import Image from "next/image";
import React from "react";
import visa from "../public/visa.png";
import mastercard from "../public/masterCard.png";
import paypal from "../public/paypal.png";

function Footer() {
  const navigations = ["Home", "Deals", "Track Order", "About"];
  const categories = ["Cactus", "Desk", "Sectional Sofa", "Wood Chair", "lamp"];
  const helps = ["FAQs", "Pricing Plans", "Track", "Your Order", "My Account"];
  const customerServices = [
    "My Account",
    "Terms of Use",
    "Deliveries & Returns",
    "Gift Card",
  ];
  return (
    <div className=" bg-Primary-dark py-16 text-white">
      <div className=" container divide-y divide-Gray-3 flex flex-col gap-8">
        <div className=" grid grid-cols-2 lg:grid-cols-6 gap-9">
          <div className="col-span-2">
            <h2 className="text-4xl pb-4">ento.</h2>
            <div>
              <p className="text-sm text-Gray-2 pb-2 last:pb-0">
                1901 Thornidge Cir. Shiloh, Hawaii 81063
              </p>
              <p className="text-sm text-Gray-2 pb-2 last:pb-0">
                Phone: (603) 555-0123
              </p>
              <p className="text-sm text-Gray-2 pb-2 last:pb-0">
                Email: support@ento.com
              </p>
            </div>
          </div>
          <div>
            <h3 className="pb-4">Navigation</h3>
            <ul>
              {navigations.map((navigation) => (
                <li
                  className="text-sm text-Gray-2 pb-2 last:pb-0"
                  key={navigation}
                >
                  {navigation}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="pb-4">Category</h3>
            <ul>
              {categories.map((category) => (
                <li
                  className="text-sm text-Gray-2 pb-2 last:pb-0"
                  key={category}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="pb-4">Help</h3>
            <ul>
              {helps.map((help) => (
                <li className="text-sm text-Gray-2 pb-2 last:pb-0" key={help}>
                  {help}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="pb-4">Customer Service</h3>
            <ul>
              {customerServices.map((customerService) => (
                <li
                  className="text-sm text-Gray-2 pb-2 last:pb-0"
                  key={customerService}
                >
                  {customerService}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-6 justify-between pt-6">
          <p>© 2022 ento. All rights reserved.</p>
          <div className="flex gap-3">
            <Image
              src={visa}
              alt="Visa"
              width={34}
              height={22}
              className=" object-contain bg-white rounded-md"
            />
            <Image
              src={paypal}
              alt="Visa"
              width={34}
              height={22}
              className=" object-contain bg-white rounded-md"
            />
            <Image
              src={mastercard}
              alt="Visa"
              width={34}
              height={22}
              className=" object-contain bg-white rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
