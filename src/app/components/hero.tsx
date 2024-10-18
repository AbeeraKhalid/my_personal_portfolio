"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font bg-fixed bg-cover bg-center custom-image">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Image
            className="object-cover object-center rounded mx-auto w-[25rem]"
            alt="hero"
            src={require("../../../public/assests/images/e9753affe310253a9fc7496b7b6a727a.jpg")}
            width={500}
            height={500}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center font-serif">
          <h1 className="title-font sm:text-4xl text-3xl mb-2 font-medium text-slate-800	font-style: italic font-serif">
            <span className="title-font sm:text-3xl text-2xl mb-4 font-bold text-cyan-900  font-style: italic font-serif">
              Hi Everyone,
            </span>
            <br className="hidden lg:inline-block font-medium underline underline-offset-1..." />
            "I am Abeera Khalid"
            <br className="hidden lg:inline-block " />
            <Typewriter
              options={{
                strings: [
                  "Web Developer",
                  "Wordpress Website Developer",
                  "Front-end Developer",
                  "Backend Developer",
                  "Pursuing Artificial Intelligence AI & Cloud Native Specialist",
                  "Professional Freelancer",
                  "Office Automation Expert",
                  "& Educator",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>

          <div className="w-[200px] h-[4px] bg-cyan-800 "></div>
          <p className="mb-8 leading-relaxed text-slate-900 font-bold font-style: italic font-serif">
            👋 Hello! I am Abeera Khalid. I have highly skilled and versatile
            technology Professional with expertise in my skillsets
            . I'm excited to share my journey in the world of coding,            
            As I continue to learn and improve, I'm eager to take on new challenges
            and collaborate with others. Welcome to my portfolio! Scroll down to discover more
           .Join me and let's explore the possibilities and create something amazing together...
          </p>
          <div className="flex justify-center">
            <Link href={"#Contact"}>
              <button className="inline-flex text-white bg-cyan-800 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-700 rounded text-lg font-serif">
                Contact me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
