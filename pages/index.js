import React from "react";
import AboutUs from "../components/AboutUs";
import HeroBanner from "../components/heroBanner";
import NavbarComp from "../components/navbarComp";
import ProductUs from "../components/ProductUs";
import { useEffect } from "react";
import Head from "next/head";
import ContactUs from "../components/ContactUs";

export default function Home() {
  return (
    <div>
      <Head>
        <title>OMTEK</title>
        <link rel="icon" href="favicons.ico" />
      </Head>
      <NavbarComp />
      {/* <div className="  w-32 h-32">hai</div> */}
      {/* <div className="py-10"></div> */}
      <HeroBanner />
      <AboutUs />
      <ProductUs />
      <ContactUs />
    </div>
  );
}
