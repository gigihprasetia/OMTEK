import React from "react";
import { useState, useRef, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import CardProduct from "./CardComponent/cardProduct";
import { Navigation, Pagination, Scrollbar, A11y, Controller } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import OFFICEAPP from "../public/OFFICEAPP.png";
import BUKUAPP from "../public/BUKUAPP.png";
import BELANJAAPP from "../public/BELANJAAPP.png";

const ProductUs = () => {
  const [swiper, setSwiper] = useState();
  const prevRef = useRef();
  const nextRef = useRef();
  const [isPhone, setIsPhone] = useState(3);
  useEffect(() => {
    if (swiper) {
      if (swiper.params) {
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;

        swiper.navigation.init();
        swiper.navigation.update();
      }
    }
  }, [swiper]);

  useEffect(() => {
    if (window) {
      if (window.matchMedia("(max-width: 1050px)").matches) {
        setIsPhone(1);
      }
    }
  }, []);
  console.log(isPhone);

  return (
    <div id="produk" className="w-full h-screen  pt-5">
      <div className="w-full flex justify-start">
        <p className="mx-3 text-2xl font-bold text-primary ">Produk</p>
        <div className="border-b-2 border-primary  w-11/12 flex items-center">
          <p className="text-xs text-primary">
            Produk PT OMAH TEKNOLOGI INDONESIA
          </p>
        </div>
      </div>
      <div className="w-full h-full  justify-around flex items-center px-2">
        <div ref={prevRef}>
          <BsFillArrowLeftCircleFill className="text-2xl text-primary" />
        </div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Controller]}
          spaceBetween={1}
          slidesPerView={isPhone}
          navigation={{
            prevEl: prevRef?.current,
            nextEl: nextRef?.current,
          }}
          onSwiper={setSwiper}
        >
          {[
            {
              Image: BELANJAAPP,
              title: "Belanja24",
              content:
                "Aplikasi E-Office merupakan sebuah aplikasi administrasi perkantoran berbasis website untuk memfasilitasi disposisi surat oleh pimpinan (Walikota/Wakil Walikota/Pimpinan OPD), dan melakukan manajemen persuratan sehingga memudahkan dalam proses administrasi, pencarian dan pengarsipan surat.",
            },
            {
              Image: OFFICEAPP,
              title: "E'OFFICE",
              content:
                "SIPLah-BELANJA24 adalah suatu platform pasar daring yang menyediakan beragam kebutuhan barang dan jasa yang dibutuhkan oleh Satuan Pendidikan melalui mitra penyedia yang bekerja sama dengan platform SIPLah-BELANJA24",
            },
            {
              Image: BUKUAPP,
              title: "BUKUDIGITALKU",
              content:
                "BUKUDIGITALKU.com adalah platfrom pembelian buku secara digital ",
            },
          ].map((num) => (
            <SwiperSlide key={num}>
              <div className=" flex justify-center">
                <CardProduct
                  image={num.Image}
                  title={num.title}
                  content={num.content}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div ref={nextRef}>
          <BsFillArrowRightCircleFill className="text-2xl text-primary" />
        </div>
      </div>
    </div>
  );
};

export default ProductUs;
