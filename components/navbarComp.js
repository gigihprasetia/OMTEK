import React, { useEffect } from "react";

const NavbarComp = () => {
  // iki branch gigih
  return (
    <div className=" bg-white w-full h-20 border-b-2 shadow-md shadow-gray-400 flex justify-around items-center">
      {[
        { name: "Home", href: "#home" },
        { name: "Tentang", href: "#tentang" },
        { name: "PT OMAH TEKNOLOGI INDONESIA", href: "#home" },
        { name: "Produk", href: "#produk" },
        { name: "Kontak", href: "#kontak" },
      ].map((nav) => (
        <a
          className={`text-primary ${
            nav.name == "PT OMAH TEKNOLOGI INDONESIA"
              ? "text-lg font-bold "
              : "text-sm font-normal hidden sm:block"
          } cursor-pointer hover:scale-110 duration-300 `}
          key={nav.name}
          href={nav.href}
        >
          {nav.name}
        </a>
      ))}
    </div>
  );
};

export default NavbarComp;
