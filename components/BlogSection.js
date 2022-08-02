import React from "react";
import BlogComponent from "./BlogComponent";
import bi1 from "../public/18.png";
import bi2 from "../public/20.png";
import b13 from "../public/29.png";

function BlogSection() {
  return (
    <div className="container py-16">
      <div className="pb-8">
        <h2 className=" text-2xl text-center pb-6">Read our blog</h2>
        <p className=" text-sm text-center text-Gray-3">
          Lorem Ipsum is simply dummy text of the
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <BlogComponent
          title="Amazing clean decoration"
          image={bi1}
          description="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,"
          time="1"
          author="Rakibul Hasan"
        />
        <BlogComponent
          title="Amazing clean decoration"
          image={bi1}
          description="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,"
          time="1"
          author="Rakibul Hasan"
        />
        <BlogComponent
          title="Amazing clean decoration"
          image={bi1}
          description="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,"
          time="1"
          author="Rakibul Hasan"
        />
      </div>
    </div>
  );
}

export default BlogSection;
