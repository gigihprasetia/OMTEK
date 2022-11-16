import React from "react";
import OFFICE from "../../public/OFFICEAPP.png";
import Image from "next/image";
const CardProduct = ({ image, content, title }) => {
  return (
    <div className="w-80 rounded-t-lg h-[400px] outline outline-1  outline-gray-300 shadow-md shadow-gray-400 grid grid-cols-3 grid-rows-6">
      <div className="col-span-3 row-span-3">
        <Image
          className=" border-t-2 w-full h-full object-cover object-center  rounded-t-lg"
          src={image}
          alt={title}
        />
      </div>

      <div className="col-span-3 p-1 row-span-3 border-t-2 border-b-2">
        <p className="text-sm text-gray-700 font-bold">{title}</p>
        <p className="text-xs text-gray-700">{content}</p>
      </div>
      <div className="col-span-3 flex justify-between px-2 py-2 border-b-2 text-xs">
        <p className="text-primary cursor-pointer">kunjungi website</p>
        <div className="cursor-pointer text-primary">{">>>>>>"}</div>
      </div>
    </div>
  );
};

export default CardProduct;
