import React from "react";
import { AiFillStar } from "react-icons/ai";
import DownloadButton from "./DownloadButton";
import Image from "next/image";
import mobile from "../assets/mobile.png";

const Hero = () => {
  return (
    <div className="bg-[#EFECFF] grid grid-cols-2 align-middle h-3/4 items-center rounded-3xl p-10">
      <div data-aos="fade-right" data-aos-duration="1500" className="flex flex-col space-y-9">
        <p className="text-2xl font-medium">Ahead App</p>

        <p className="md:text-7xl text-black font-semibold">
          Make your life by mastering emotions
        </p>
        <div className="flex space-x-6">
          <DownloadButton />
          <div className="flex flex-col">
            <div className="text-yellow-500 text-xl flex gap-2">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <p className="text-gray-700 text-sm">100+ Appstore reviews</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Image className="rounded-3xl w-11/12" src={mobile} alt="mobile-vector" />
      </div>
    </div>
  );
};

export default Hero;
