import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Footer=()=>{

    return(
        <div className="bg-gradient-to-r from-white via-cyan-200 to-slate-200">
          <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-cyan-800">
    <Image
              src={require("../../../public/assests/images/my channel.jpg")}
              alt="AMK"
              width={100}
              height={100}
              className="w-10 h-10bg-blue 400 rounded-full"
            />
      <span className="ml-3 text-2xl font-serif "> Abeera-M-Khalid</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-cyan-800 sm:py-2 font-serif sm:mt-0 mt-4">
      © 2024 Abeera-M-Khalid
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <Link target="_blank"
      href={'https://www.linkedin.com/in/abeera-m-khalid-/'}className="text-gray-500 hover:text-[#0e76a8]" >
        <  FaLinkedin className="w-8 h-8"/>
      </Link>
      <Link  target="_blank"
      href={'https://github.com/AbeeraKhalid'}className="ml-3 text-gray-500 hover:text-[#000000]">
        < FaGithub className="text-3xl"/>
      </Link>
      
    </span>
  </div>
</footer>

        </div>
    )
}
export default Footer