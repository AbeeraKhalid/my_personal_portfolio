"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";

export default function Project() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div id="project">
      <section className="text-cyan-800 body-font py-24 bg-gradient-to-r from-white via-cyan-200 to-slate-100">
        <div className="container px-5 py-24 mx-auto">
          <div
            className="flex flex-col text-center w-full mb-20"
            data-aos="fade-up"
          >
            <h1 className="sm:text-4xl font-bold mb-3 text-cyan-900  font-style: italic font-serif underline underline-offset-1 ...">
              My Projects
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-bold text-slate-900 font-serif">
              "I built these projects to challenge myself and showcase my skills
              in HTML, CSS,Javascript, TypeScript, and Next.js. Through hands-on
              practice and experimentation, I aimed to push my limits and
              explore the possibilities of modern web development. Each projects
              represents a milestone in my learning journey, demonstrating my
              growth and proficiency in creating responsive, efficient, and
              user-friendly web applications. I'm constantly discovering new
              concepts, tools, and technologies.  This portfolio showcases my early
              projects and experiments, highlighting my enthusiasm and
              dedication to successful growth.."
            </p>
          </div>
          <div className="flex flex-wrap -m-4">


            <div className="lg:w-1/3 sm:w-1/2 p-4" //1
              data-aos="flip-left"
            >
              <div className="relative group">
                <Image
                  alt="HTML Assignments"
                  className="absolute inset-0 w-full h-full object-cover object-center rounded-lg " //2
                  src={require("../../../public/assests/Projects/HTML,CSS.jpg")}
                />
                <div className="relative z-10 w-full h-full flex items-center justify-center bg-white bg-opacity-80 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <div className="px-8 py-10">
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">
                      HTML,CSS & JS Projects
                    </h2>
                    <p className="leading-relaxed text-gray-700 mb-4 line-clamp-6">
                      The first step of any web developer to learn basic structural
                      Language such as HTML,CSS,Javascript. I create many
                      projects/games by using HTML CSS and Javascript languages, 
                    made some assignments for
                      Making these projects, I experienced  alot creating a
                      web page and diff app.
                    </p>
                    <Link target="_blank"
                      className="text-cyan-600 font-semibold hover:underline"
                      href="/HTML"
                    >
                      View Projects...
                    </Link>
                  </div>
                </div>
              </div>
            </div>

           
  
            <div className="lg:w-1/3 sm:w-1/2 p-4 "data-aos="flip-left">
              <div className="relative group">
                <Image
                  alt="Typescript Projects"
                  className="absolute inset-0 w-full h-full object-cover object-center rounded-lg"
                  src={require("../../../public/assests/Projects/typescript-wallpaper.webp")}
                />
                <div className="relative z-10 w-full h-full flex items-center justify-center bg-white bg-opacity-80 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <div className="px-8 py-10">
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">
                      Typescript Projects
                    </h2>
                    <p className="leading-relaxed text-gray-700 mb-4 line-clamp-10">
                    The Second step of my journey to learn CLI Based Programming 
                      Languages just like Typescript. I create many
                     CLI projects/games by using Typescript languages, 
                    I created these projects during the learning of
                      TypeScript.
                    </p>
                    <Link target="_blank"
                      className="text-cyan-600 font-semibold hover:underline"
                      href="/Typescript"
                    >
                      View Projects...
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 sm:w-1/2 p-4" data-aos="flip-left">
              <div className="relative group">
                <Image
                  alt="Next.js Projects"
                  className="absolute inset-0 w-full h-full object-cover object-center rounded-lg"
                  src={require("../../../public/assests/Projects/nextjs 2 .jpg")}
                />
                <div className="relative z-10 w-full h-full flex items-center justify-center bg-white bg-opacity-80 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <div className="px-8 py-10">
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">
                      Next.js Projects
                    </h2>
                    <p className="leading-relaxed text-gray-700 mb-4 line-clamp-6">
                    The Third step of any web developer journey after learn different
                      Languages such as HTML,CSS,Javascript. I create many
                      projects/games by using The framework of next.js. 
                       I am learning Next.Js the framework of react to
                      enhance my web development skills with React.
                      Making these projects, I experienced  alot creating a
                      web page and diff app.
                    </p>
                    <Link target="_blank"
                      className="text-cyan-600 font-semibold hover:underline"
                      href="/NextJs"
                    >
                      View Projects...
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
