import { React, useState } from "react";
import { Menu, Listbox } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import p1 from "../public/1.png";
import p2 from "../public/2.png";
import p3 from "../public/3.png";
import p4 from "../public/4.png";
import bp1 from "../public/5.png";
import bp2 from "../public/6.png";
import bp3 from "../public/7.png";
import bp4 from "../public/8.png";
import bp5 from "../public/9.png";
import ProductCard from "./ProductCard";


function CategoryPage() {
  const sotrBy = [
    { Id: 1, Name: "Popularity" },
    { Id: 2, Name: "Newest" },
    { Id: 3, Name: "Price: Low to High" },
    { Id: 4, Name: "Price: High to Low" },
    { Id: 5, Name: "Recommendations" },
  ];
  const [selected, setSelected] = useState(sotrBy[0]);
  return (
    <div>
      <div className="bg-[url('/hero4.png')] h-[300px] bg-cover bg-no-repeat bg-center ">
        <div className="text-Primary-dark container py-12 text-center">
          <p className="px-12">Home / Shop</p>
          <h2 className=" font-medium text-3xl pb-6">All Collection</h2>
        </div>
      </div>
      <div className=" bg-Blue-1">
        {/* Category Product */}
        <div className="container pb-16">
          <h3 className=" text-2xl py-8">Best seller</h3>
          {/* filter sort Button */}
          <div className="flex justify-between text-sm pb-4">
            {/* Filter By Drop down */}
            <div>
              <Menu>
                <Menu.Button className="flex items-center">
                  Filter By: <ChevronDownIcon className="h-4" />
                </Menu.Button>
                <Menu.Items className="flex flex-col gap-2 pt-2">
                  <Menu.Item>
                    <a>Price</a>
                  </Menu.Item>
                  <Menu.Item>
                    <a>Color</a>
                  </Menu.Item>
                  <Menu.Item>
                    <a>Size</a>
                  </Menu.Item>
                </Menu.Items>
              </Menu>
            </div>

            {/* sort by drop down */}
            <div className="flex gap-2">
              <p className=" text-Gray-2">Sort By: </p>
              <div>
                <Listbox value={selected} onChange={setSelected}>
                  <Listbox.Button className="flex gap-1 items-center">
                    {selected.Name} <ChevronDownIcon className="h-4" />
                  </Listbox.Button>
                  <Listbox.Options className="flex flex-col pt-2 gap-2 cursor-pointer">
                    {sotrBy.map((item) => (
                      <Listbox.Option key={item.Id} value={item}>
                        {item.Name}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Listbox>
              </div>
            </div>
          </div>

          {/* product card loop your data using map function */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-2 gap-y-8 lg:gap-x-6">
            <ProductCard
              productImage={p1}
              productName={"Wodden Chare"}
              reviewNumber={"28"}
              currentPrice={"$100"}
              previousPrice={"$200"}
            />
            <ProductCard
              productImage={p2}
              productName={"Blue Single Sofa"}
              reviewNumber={"28"}
              currentPrice={"$59"}
            />
            <ProductCard
              productImage={p3}
              productName={"Long Stand lamplight"}
              reviewNumber={"28"}
              currentPrice={"$100"}
            />
            <ProductCard
              productImage={p4}
              productName={"Kign Size Bed 6feet by 7 feet"}
              reviewNumber={"28"}
              currentPrice={"360 BDT"}
              previousPrice={"400 BDT"}
            />
            <ProductCard
              productImage={p4}
              productName={"Kign Size Bed 6feet by 7 feet"}
              reviewNumber={"28"}
              currentPrice={"360 BDT"}
              previousPrice={"400 BDT"}
            />
            <ProductCard
              productImage={bp1}
              productName={"Wodden Chare"}
              reviewNumber={"28"}
              currentPrice={"$100"}
              previousPrice={"$200"}
            />
            <ProductCard
              productImage={bp2}
              productName={"Blue Single Sofa"}
              reviewNumber={"28"}
              currentPrice={"$59"}
            />
            <ProductCard
              productImage={bp3}
              productName={"Long Stand lamplight"}
              reviewNumber={"28"}
              currentPrice={"$100"}
            />
            <ProductCard
              productImage={bp4}
              productName={"Kign Size Bed 6feet by 7 feet"}
              reviewNumber={"28"}
              currentPrice={"360 BDT"}
              previousPrice={"400 BDT"}
            />
            <ProductCard
              productImage={bp5}
              productName={"Kign Size Bed 6feet by 7 feet"}
              reviewNumber={"28"}
              currentPrice={"360 BDT"}
              previousPrice={"400 BDT"}
            />
          </div>

          {/* BUTTON */}
          <div className="flex justify-center mt-8">
            <button className="px-10 py-3 text-Primary-dark border-2 border-Primary-dark">
              Discover more
            </button>
          </div>
        </div>
        {/* Recently Viewed product */}
        <div className="py-16 bg-Secondary-light">
          <div className="pb-8">
            <h2 className=" text-2xl text-center pb-6">
              Recently View products
            </h2>
            <p className=" text-sm text-center text-Gray-3">
              Lorem Ipsum is simply dummy text of the
            </p>
          </div>
          <div className="container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-2 gap-y-8 lg:gap-x-6">
            <ProductCard
              productImage={p1}
              productName={"Woden Chare"}
              reviewNumber={"28"}
              currentPrice={"$100"}
              previousPrice={"$200"}
            />
            <ProductCard
              productImage={p2}
              productName={"Blue Single Sofa"}
              reviewNumber={"28"}
              currentPrice={"$59"}
            />
            <ProductCard
              productImage={p3}
              productName={"Long Stand lamplight"}
              reviewNumber={"28"}
              currentPrice={"$100"}
            />
            <ProductCard
              productImage={p4}
              productName={"King Size Bed 6feet by 7 feet"}
              reviewNumber={"28"}
              currentPrice={"360 BDT"}
              previousPrice={"400 BDT"}
            />
            <ProductCard
              productImage={p4}
              productName={"King Size Bed 6feet by 7 feet"}
              reviewNumber={"28"}
              currentPrice={"360 BDT"}
              previousPrice={"400 BDT"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryPage;
