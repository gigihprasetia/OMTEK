import Image from "next/image";
import React from "react";
import Company from "../public/companypictures.svg";

const AboutUs = () => {
  return (
    <div id="tentang" className="w-full h-max lg:h-screen  grid grid-cols-12  ">
      <div className="col-span-12 lg:col-span-5  h-full flex flex-col justify-center px-5">
        {/* <div className="py-28"></div> */}
        <p className="text-2xl lg:text-4xl  font-bold text-primary">
          Tentang Kami
        </p>
        <p className="text-left w-full  lg:w-96 mt-5  text-base font-thin ml-0 lg:ml-5 text-primary">
          Kami adalah Perusahaan Starup Digital yang bergerak di bidang IT {"("}
          Jasa Pembuatan Aplikasi, Website, dan sebagainya{")"} yang berpusat di
          Yogyakarta <br /> PT. Omah Teknologi Indonesia {"("} OMTEK {")"}{" "}
          adalah perusahaan penyedia perangkat lunak. OMTEK didirikan di
          Yogyakarta pada 08-08-2019. OMTEK fokus dalam memberikan solusi TI
          untuk bisnis dan organisasi pemerintah <br /> BISNIS Kami membantu
          Pelaku Usaha melalu MarketPlace. MarketPlace menyediakan wadah untuk
          para pelaku usaha mulai dari usaha individu/toko, badan usaha {"("}{" "}
          CV/PT {")"} dan juga UKM yang menjalankan bisnisnya dalam menyediakan
          kebutuhan barang jasa. Pelaku UKM dapat memberikan kontribusi besar
          dan juga mendapatkan pasar yang jelas di seluruh Indonesia. Tak hanya
          itu, segala proses transaksi juga lebih aman. Para pelaku usaha juga
          dapat mengembangkan usahanya untuk lebih maju lagi dan mendapatkan
          solusi dari permasalahan yang selama ini dihadapi dengan bergabung
          berjualan di MarketPlace
        </p>
      </div>
      <div className=" col-span-12 my-5 lg:my-0 lg:col-span-7 h-full  flex  ">
        <Image src={Company} alt="company" />
      </div>
    </div>
  );
};

export default AboutUs;
