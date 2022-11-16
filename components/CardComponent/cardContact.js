import React from "react";
import { MdLocationPin } from "react-icons/md";
const CardContact = () => {
  return (
    <div className="w-96 rounded-md h-80 outline outline-1 outline-gray-400 grid grid-cols-6 grid-rows-6">
      <div className="col-span-6 row-span-3  flex justify-center items-center ">
        <MdLocationPin className="text-7xl text-gray-700" />
      </div>
      <div className="col-span-6 row-span-3 flex items-center">
        <p className="text-center text-gray-700">
          Jl. Student Castle, Kledokan, Caturtunggal, Kec. Depok, Kabupaten
          Sleman, Daerah Istimewa Yogyakarta 55281
        </p>
      </div>
    </div>
  );
};

export default CardContact;
