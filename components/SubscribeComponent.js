import React from "react";

function SubscribeComponent() {
  return (
    <div className=" bg-Pink-light">
      <div className="container py-16">
        <div className="pb-8">
          <h2 className=" text-2xl text-center pb-6">
            Get the latest from ento
          </h2>
          <p className=" text-sm text-center text-Gray-3">
            Promotions, new products and sales
          </p>
        </div>
        <div className="flex flex-col gap-4 lg:flex-row lg:px-60">
          <input
            type="text"
            placeholder="Email address"
            className="w-full py-3 pl-4 pr-4 text-black placeholder:text-Gray-3 bg-white outline-none"
          />
          <button className="w-full lg:w-1/3 py-3 pl-4 pr-4 text-white bg-black tracking-wider">Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default SubscribeComponent;
