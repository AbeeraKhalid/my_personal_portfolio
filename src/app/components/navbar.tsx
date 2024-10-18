import Link from "next/link";
import React from "react";
import Image from "next/image";
import { IoIosCloudDownload } from "react-icons/io";
const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-white via-cyan-200 to-slate-400 z-50 sticky top-0">
      <header className="text-gray-800 body-font">
        <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-cyan-900 mb-4 md:mb-0">
            <Image
              src={require("../../../public/assests/images/my channel.jpg")}
              alt="AMK"
              width={100}
              height={100}
              className="w-10 h-10bg-blue 400 rounded-full"
            />

            <span className="ml-3 text-3xl font-bold font-serif ">
              Abeera-M-Khalid
            </span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center font-medium font-serif ">
            <Link href={"/"} className="mr-5 hover:text-cyan-500 ">
              Home
            </Link>
            <Link href={"#about"} className="mr-5 hover:text-cyan-500">
              About
            </Link>
            <Link href={"#skills"} className="mr-5 hover:text-cyan-500">
              My Skills
            </Link>
            <Link href={"#project"} className="mr-5 hover:text-cyan-500">
              My Projects
            </Link>
            <Link href={"#Contact"} className="mr-5 hover:text-cyan-500">
              Contact
            </Link>
          </nav>
          <a href="/assests/CV/AbeeraCV.pdf">
            <button
              className="inline-flex items-center bg-cyan-700 border-0 py-1 px-3 focus:outline-none font-serif
          hover:bg-cyan-600 rounded text-[#fff] mt-4 md:mt-0 font-bold"
            >
              Download Resume
              <IoIosCloudDownload className="text-xl ml-2 " />
            </button>
          </a>
        </div>
      </header>
    </div>
  );
};
export default Navbar;
