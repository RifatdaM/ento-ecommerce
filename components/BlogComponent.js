import Image from "next/image";
import React from "react";
import {
  UserIcon,
  ClockIcon,
  ChevronRightIcon,
} from "@heroicons/react/outline";

function BlogComponent({ image, title, description, time, author }) {
  return (
    <div>
      <Image
        src={image}
        alt={title}
        layout="responsive"
        height={1080}
        width={1920}
      />
      <div className="flex items-center gap-4 text-Gray-2 text-xs pt-4"> 
        <div className="flex items-center gap-2">
          <UserIcon className="h-4" />
          <h5>{author}</h5>
        </div>
        <div className="flex items-center gap-2">
          <ClockIcon className="h-4" />
          <h5>{time} hours ago</h5>
        </div>
      </div>

      <h3 className=" text-2xl pt-4 hover:underline">{title}</h3>

      <p className=" leading-6 pt-4 text-Gray-2 text-sm">{description}</p>
      <button className="flex items-center pt-4">
        Read more <ChevronRightIcon className="h-4"/>
      </button>
    </div>
  );
}

export default BlogComponent;
