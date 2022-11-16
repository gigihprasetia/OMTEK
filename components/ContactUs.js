import React from "react";
import CardContact from "./CardComponent/cardContact";
import { MdLocationPin, MdPhone, MdMail } from "react-icons/md";
const ContactUs = () => {
  return (
    <div id="kontak" className="w-full ">
      <div className="w-full flex justify-start">
        <p className="mx-3 text-lg md:text-2xl font-bold text-primary w-44 ">
          Kontak Kami
        </p>
        <div className="border-b-2 border-primary  w-11/12 flex items-center">
          <p className="text-xs text-primary">
            Mari bekerja sama untuk meningkatkan produktivitas dan mempercepat
            pertumbuhan bisnis.
          </p>
        </div>
      </div>
      <div className="w-full h-full my-28 flex justify-around flex-wrap items-center">
        <div className="w-96 rounded-md h-80 outline outline-1 outline-gray-400 grid grid-cols-6 my-3  grid-rows-6 hover:bg-primary duration-500   text-gray-700 hover:text-white">
          <div className="col-span-6 row-span-3  flex justify-center items-center ">
            <MdLocationPin className="text-7xl " />
          </div>
          <div className="col-span-6 row-span-3 flex items-center">
            <p className="text-center ">
              Jl. Student Castle, Kledokan, Caturtunggal, Kec. Depok, Kabupaten
              Sleman, Daerah Istimewa Yogyakarta 55281
            </p>
          </div>
        </div>
        <div className="w-96 rounded-md h-80 outline outline-1 outline-gray-400 grid grid-cols-6 my-3  grid-rows-6 hover:bg-primary duration-500  text-gray-700 hover:text-white">
          <div className="col-span-6 row-span-3  flex justify-center items-center ">
            <MdPhone className="text-7xl " />
          </div>
          <div className="col-span-6 row-span-3 flex items-center justify-center">
            <ul className="list-disc">
              <li>Call Center 0274 280 4989</li>
              <li>Customer Service 0811 285 2424</li>
              <li>Seller Support 0811 286 2424</li>
            </ul>
          </div>
        </div>
        <div className="w-96 rounded-md h-80 outline outline-1 outline-gray-400 grid grid-cols-6 my-3  grid-rows-6 hover:bg-primary duration-500  text-gray-700 hover:text-white">
          <div className="col-span-6 row-span-3  flex justify-center items-center ">
            <MdMail className="text-7xl " />
          </div>
          <div className="col-span-6 row-span-3 flex items-center">
            <p className="text-center ">
              Jl. Student Castle, Kledokan, Caturtunggal, Kec. Depok, Kabupaten
              Sleman, Daerah Istimewa Yogyakarta 55281
            </p>
          </div>
        </div>
      </div>
      <div className="bg-primary h-24 flex items-center justify-center text-white">
        <p>© 2022. All rights reserved.</p>
      </div>
    </div>
  );
};

export default ContactUs;
