import React from "react";
import { FaPlay } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] md:pt-[15%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/3">{overview}</p>
      <div className="flex ">
        <button className="bg-white text-black text-base md:text-xl my-3 md:my-0 p-1 md:p-4 mx-0 md:mx-2 px-3 md:px-12 flex justify-center rounded-lg hover:bg-opacity-70">
          <FaPlay className="mx-2 mt-1" />
          Play
        </button>
        <button className="bg-gray-500 hidden text-white text-base md:text-xl my-3 md:my-0 p-1 md:p-4 px-3 md:px-12 bg-opacity-50 md:flex justify-center rounded-lg">
          <IoMdInformationCircleOutline className="mx-1 text-3xl" /> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
