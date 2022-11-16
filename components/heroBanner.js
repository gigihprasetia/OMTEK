import React from "react";
import { Button } from "@material-tailwind/react";
import Logo from "../public/hero.svg";
import Image from "next/image";

const HeroBanner = () => {
  return (
    <div className="w-full h-screen  grid grid-cols-12">
      <div className="col-span-12 md:col-span-5 h-4/5 md:h-full justify-center flex items-center bg-[url('../public/hero.svg')]  md:bg-none bg-center ">
        <div className="text-base md:text-xl font-bold px-5">
          <p className="text-white md:text-primary text-lg md:text-2xl">
            Siapapun, dimanapun,
            <br />
            bisa memulai
            <span className="text-orange-600"> kesuksesan.</span>
          </p>
          <p className="  text-white  md:text-primary mt-5">
            Ada pertanyaan? ingin mengenal kami lebih dalam?
          </p>
          <Button className="mt-10 bg-primary">Scroll</Button>
        </div>
      </div>
      <div className=" col-span-12 hidden  md:col-span-7 h-full md:flex items-center justify-center ">
        <Image src={Logo} alt={"logo"} className="w-10/12" />
      </div>
    </div>
  );
};

export default HeroBanner;
