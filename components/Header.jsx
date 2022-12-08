import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getCategories } from "../services";

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-white py-8">
        <div className="float-left block">
          <Link href={"/"}>
            <span className="transition duration-500 cursor-pointer hover:text-black font-bold text-4xl text-white">
              X PPLG 1
            </span>
          </Link>
        </div>
        <div className="hidden float-left md:contents">
          <Link href={"/developer"}>
            <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold transition duration-500 cursor-pointer hover:text-black">
              Developer
            </span>
          </Link>
        </div>
        <div className="hidden float-left md:contents">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold transition duration-500 cursor-pointer hover:text-black">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
        <div className="md:hidden">
          <button
            className="float-right p-2 text-white rounded-sm outline-none focus:border-gray-600 focus:border "
            onClick={() => setNavbar(!navbar)}>
            {navbar ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 transition duration-500 hover:text-zinc-300"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 transition duration-500 hover:text-zinc-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
        <div
          className={`md:hidden py-20 p-10 mt-20 w-full h-full bg-cover bg-zinc-400 ${
            navbar ? "block" : "hidden"
          }`}>
          <div className="bg-cover w-full h-full z-50 flex flex-col items-center gap-10">
            <Link href={"/developer"}>
              <span className="space-y-8 md:flex md:space-x-6 md:space-y-0 text-white font-semibold transition duration-500 cursor-pointer hover:text-black">
                Developer
              </span>
            </Link>
            {categories.map((category) => (
              <Link key={category.slug} href={`/category/${category.slug}`}>
                <span className="space-y-8 md:flex md:space-x-6 md:space-y-0 text-white font-semibold transition duration-500 cursor-pointer hover:text-black">
                  {category.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
