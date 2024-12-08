"use client";
import React, { useEffect } from "react";
import Image from "next/image";

import AOS from "aos";
import "aos/dist/aos.css";

const NextJsProjects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      {/* <Navbar2 /> */}

      <div className="min-h-screen bg-gradient-to-r from-cyan-50 to-white py-10 px-4">
        <div className="container mx-auto">
          <h1
            className="text-5xl font-extrabold text-center text-yellow-600 font-serif font-style: italic mb-16"
            data-aos="fade-up"
          >
            My Next.Js Projects
          </h1>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <div
              className="bg-gradient-to-b from-indigo-200 to-indigo-100 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out"
              data-aos="fade-right"
            >
              <Image
                src={require("../../../public/assests/Projects/helloWorld.gif")}
                alt="Project 1"
                className="w-full h-48 object-cover ease-in-out transform hover:scale-105"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  MILESTONE 1: Hello World
                </h2>
                <p className="text-gray-600 mb-4">
                  Developed a simple webpage that displays a personalized "Hello
                  World" message with basic styling.
                </p>
                <a
                  href="
                   https://github.com/AbeeraKhalid/hello_world-with-next.js.git"
                  className="inline-block px-4 py-2 bg-pink-600 text-white font-bold rounded hover:bg-yellow-500 transition-colors duration-300"
                >
                  GitHub Link
                </a>
                <br />
                <a
                  href="
                   https://hello-world-with-next-js.vercel.app/"
                  className="inline-block mt-2 px-4 py-2 bg-pink-600 text-white font-bold rounded hover:bg-yellow-500 transition-colors duration-300"
                >
                  Deploy link
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="bg-gradient-to-b from-pink-200 to-yellow-50 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out"
              data-aos="fade-left"
            >
              <Image
                src={require("../../../public/assests/Projects/countdown timer.jpg")}
                alt="Project 2"
                className="w-full h-48 object-cover ease-in-out transform hover:scale-105"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  MILESTONE 2: Countdown Timer
                </h2>
                <p className="text-gray-600 mb-4">
                  <br /> Used Tailwind CSS for styling and layout.
                </p>
                <a
                  href="https://my-countdowntimer-byabeerakhalid.vercel.app/"
                  className="inline-block px-4 py-2 bg-pink-600 text-white font-bold rounded hover:bg-yellow-500 transition-colors duration-300"
                >
                  Deployed Site
                </a>
                <br />
                <a
                  href="https://github.com/AbeeraKhalid/my_countdowntimer.git"
                  className="inline-block mt-2 px-4 py-2 bg-pink-600 text-white font-bold rounded hover:bg-yellow-500 transition-colors duration-300"
                >
                  GitHub Link
                </a>
              </div>
            </div>
            {/* 3rd card */}
            <div
              className="bg-gradient-to-b from-pink-200 to-yellow-50 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out"
              data-aos="fade-left"
            >
              <Image
                src={require("../../../public/assests/Projects/todos app.jpg")}
                alt="Project 2"
                className="w-full h-48 object-cover ease-in-out transform hover:scale-105"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  MILESTONE 3: To_dos List App
                </h2>
                <p className="text-gray-600 mb-4">
                  Designed and developed a personal portfolio website with at
                  least 3 pages (Home, About, Contact).
                  <br /> Used Tailwind CSS for styling and layout.
                </p>
                <a
                  href="https://my-todos-list-app-byabeerakhalid.vercel.app/"
                  className="inline-block px-4 py-2 bg-pink-600 text-white font-bold rounded hover:bg-yellow-500 transition-colors duration-300"
                >
                  Deployed Site
                </a>
                <br />
                <a
                  href="https://github.com/AbeeraKhalid/my_TodosList_app.git"
                  className="inline-block mt-2 px-4 py-2 bg-pink-600 text-white font-bold rounded hover:bg-yellow-500 transition-colors duration-300"
                >
                  GitHub Link
                </a>
              </div>
            </div>

            {/* Card 4 */}
            <div
              className="bg-gradient-to-b from-indigo-200 to-indigo-100 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out"
              data-aos="fade-right"
            >
              <Image
                src={require("../../../public/assests/Projects/birthday.JPG")}
                alt="Project 1"
                className="w-full h-48 object-cover ease-in-out transform hover:scale-105"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  MILESTONE 4: Birthday Card Wish
                </h2>
                <p className="text-gray-600 mb-4">
                  Designed and create "Birthday Wish Card" for your friend you
                  can easily generate it.It is a interactive Birthday wish card
                </p>

                <a
                  href="
                  https://birthday-wish-card-byabeera-khalid.vercel.app/"
                  className="inline-block mt-2 px-4 py-2 bg-pink-600 text-white font-bold rounded hover:bg-yellow-500 transition-colors duration-300"
                >
                  Deploy link
                </a>
              </div>
            </div>

            {/* Card 5 */}
            <div
              className="bg-gradient-to-b from-indigo-200 to-indigo-100 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out"
              data-aos="fade-right"
            >
              <Image
                src={require("../../../public/assests/Projects/numberGuessing.jpg")}
                alt="Project 1"
                className="w-full h-48 object-cover ease-in-out transform hover:scale-105"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  MILESTONE 5: Number Guessing game
                </h2>
                <p className="text-gray-600 mb-4">
                  Developed and design a Number guessing game feel free to check
                  it out.
                </p>

                <a
                  href="
                  https://number-guessing-gamebyabeera.vercel.app/"
                  className="inline-block mt-2 px-4 py-2 bg-pink-600 text-white font-bold rounded hover:bg-yellow-500 transition-colors duration-300"
                >
                  Deploy link
                </a>
              </div>
            </div>

            {/* Card 6 */}
            <div
              className="bg-gradient-to-b from-indigo-200 to-indigo-100 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out"
              data-aos="fade-right"
            >
              <Image
                src={require("../../../public/assests/Projects/myportfolio.jpg")}
                alt="Project 1"
                className="w-full h-48 object-cover ease-in-out transform hover:scale-105"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  MILESTONE 6: Responsive Personal Portfolio
                </h2>
                <p className="text-gray-600 mb-4">
                  Designed and developed a Responsive personal portfolio website
                  which include 5 pages (Home, About, Contact, Skills, and
                  Project).
                </p>
                <a
                  href=" "
                  className="inline-block px-4 py-2 bg-pink-600 text-white font-bold rounded hover:bg-yellow-500 transition-colors duration-300"
                >
                  GitHub Link
                </a>
                <br />
                <a
                  href=" "
                  className="inline-block mt-2 px-4 py-2 bg-pink-600 text-white font-bold rounded hover:bg-yellow-500 transition-colors duration-300"
                >
                  Deploy link
                </a>
              </div>
            </div>
             {/* Card 7 */}

            <div
              className="bg-gradient-to-b from-indigo-200 to-indigo-100 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out"
              data-aos="fade-right"
            >
              <Image
                src={require("../../../public/assests/Projects/figma-store.JPG")}
                alt="Project 1"
                className="w-full h-48 object-cover ease-in-out transform hover:scale-105"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  MILESTONE 7: Figma-Ecommerce-Store
                </h2>
                <p className="text-gray-600 mb-4">
                  I have successfully transformed the Figma design into a fully
                  responsive , pixel-perfect website 🚀 This milestone has been
                  an incredible journey of growth, learning, and skill
                  development.
                </p>
                <a
                  href="
                   https://figma-ecommerce-website-byabeera.vercel.app/"
                  className="inline-block px-4 py-2 bg-pink-600 text-white font-bold rounded hover:bg-yellow-500 transition-colors duration-300"
                >
                  GitHub Link
                </a>
                <br />
                <a
                  href="
                  https://github.com/AbeeraKhalid/figma_Ecommerce_website.git"
                  className="inline-block mt-2 px-4 py-2 bg-pink-600 text-white font-bold rounded hover:bg-yellow-500 transition-colors duration-300"
                >
                  Deploy link
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NextJsProjects;
