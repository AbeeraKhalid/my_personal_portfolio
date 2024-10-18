"use client";
import React, { useEffect } from "react";
import Image from "next/image";
// import Navbar2 from '../components/navi2';
import AOS from "aos";
import "aos/dist/aos.css";

const HtmlProjects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {/* <Navbar2 /> */}
      <div className="min-h-screen bg-gray-50 py-12 px-6">
        <div className="container mx-auto">
          <h1
            className="text-5xl font-extrabold text-center text-sky-700 mb-16 font-serif font-style: italic font-family: ui-serif, Georgia, Cambria, Times New Roman, Times, serif"
            data-aos="fade-up"
          >
            My HTML,CSS & Javascript Projects...
          </h1>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <div
              className="bg-gradient-to-r from-green-200 via-green-100 to-green-200 shadow-xl rounded-xl overflow-hidden transform transition duration-500 hover:scale-105"
              data-aos="fade-up"
            >
              <Image
                src={require("../../../public/assests/Projects/calculator.jpg")}
                alt="Calculator"
                className="w-full h-56 object-cover rounded-t-xl  ease-in-out transform hover:scale-105"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                  Responsive Calculator
                </h2>
                <p className="text-gray-700 mb-4">
                  I am delighted to annnounce that I've successfully built a
                  fully responsive calculator using our favourite programming
                  languages (HTML,CSS,Javascript).
                </p>
                <a
                  href="https://responsive-simple-calculatorby-abeera.vercel.app/"
                  className="inline-block bg-green-400 text-white px-4 py-2 rounded-lg shadow hover:bg-pink-500 transition duration-300 font-medium"
                >
                 Deployment Link
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="bg-gradient-to-r from-pink-300 via-white to-pink-300 shadow-xl rounded-xl overflow-hidden transform transition duration-500 hover:scale-105"
              data-aos="fade-up"
            >
              <Image
                src={require("../../../public/assests/Projects/currency converter.jpg")}
                alt="Table in HTML"
                className="w-full h-56 object-cover rounded-t-xl  ease-in-out transform hover:scale-105"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                  Currency Converter
                </h2>
                <p className="text-gray-700 mb-4">
                I am thrilled to announce that I have successfully developed a [Currency Converter App] by using HTML,CSS and Javascript Programming languages.

                </p>
                <a
                  href="https://currency-converter-by-abeera.netlify.app/"
                  className="inline-block ml-4 bg-pink-500 text-white px-4 py-2 rounded-lg shadow hover:bg-pink-600 transition duration-300 font-medium"
                >
               Deployment Link
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className="bg-gradient-to-r from-indigo-200 via-indigo-50 to-indigo-200 shadow-xl rounded-xl overflow-hidden transform transition duration-500 hover:scale-105"
              data-aos="fade-up"
            >
              <Image
                src={require("../../../public/assests/Projects/tic tac toe.jpg")}
                alt="HTML Form"
                className="w-full h-56 object-cover rounded-t-xl  ease-in-out transform hover:scale-105"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                  TicTacToe Game
                </h2>
                <p className="text-gray-700 mb-4">
                I am very excited to share with you all my new work/project. I have successsfully completed [Tic Tac Toe Game] by using my favourite different programming languages [HTML,CSS,And Javascript]🚀]
                </p>
                <a
                  href="https://github.com/AbeeraKhalid/TicTacToeGame.git"
                  className="inline-block ml-4 bg-yellow-500 text-white px-4 py-2 rounded-lg shadow hover:bg-yellow-600 transition duration-300 font-medium"
                >
                Git hub Link
                </a>
              </div>
            </div>

            {/* Card 4 */}
            <div
              className="bg-gradient-to-r from-pink-300 via-white to-pink-300 shadow-xl rounded-xl overflow-hidden transform transition duration-500 hover:scale-105"
              data-aos="fade-up"
            >
              <Image
                src={require("../../../public/assests/Projects/World tally counter.jpg")}
                alt="Portfolio"
                className="w-full h-56 object-cover rounded-t-xl  ease-in-out transform hover:scale-105"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                  WORD COUNTER
                </h2>
                <p className="text-gray-700 mb-4">
                I am delighted to annnounce that I've successfully built a fully responsive [Words Tally Counter App] by using different programming languages like (HTML, CSS, Javascript and Typescript). 

                </p>
                <a
                  href="https://word-sentences-counter-byabeera.netlify.app/"
                  className="inline-block ml-4 bg-pink-800 text-white px-4 py-2 rounded-lg shadow hover:bg-pink-600 transition duration-300 font-medium"
                >
                  GitHub Link
                </a>
              </div>
            </div>
             {/* Card 5 */}
             <div
              className="bg-gradient-to-r from-pink-300 via-white to-pink-300 shadow-xl rounded-xl overflow-hidden transform transition duration-500 hover:scale-105"
              data-aos="fade-up"
            >
              <Image
                src={require("../../../public/assests/Projects/rock paper game.jpg")}
                alt="Portfolio"
                className="w-full h-56 object-cover rounded-t-xl  ease-in-out transform hover:scale-105"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                  Rock Paper and Scissor Game
                </h2>
                <p className="text-gray-700 mb-4">
                I am excited to share that I have successsfully completed [Rock Paper and Scissors Games] by using my favourite different programming languages [HTML,CSS,Javascript,And Typescript].

                </p>
                <a
                  href="https://rock-paper-and-scissors-game-green.vercel.app/"
                  className="inline-block ml-4 bg-pink-800 text-white px-4 py-2 rounded-lg shadow hover:bg-pink-600 transition duration-300 font-medium"
                >
                  Deployment Link
                </a>
              </div>
            </div>

             {/* Card 6 */}
             <div
              className="bg-gradient-to-r from-pink-300 via-white to-pink-300 shadow-xl rounded-xl overflow-hidden transform transition duration-500 hover:scale-105"
              data-aos="fade-up"
            >
              <Image
                src={require("../../../public/assests/Projects/amazon.jpg")}
                alt="Portfolio"
                className="w-full h-56 object-cover rounded-t-xl  ease-in-out transform hover:scale-105"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                  Amazon Clone Page
                </h2>
                <p className="text-gray-700 mb-4">
                Just Finished an Amazon Clone with HTML & CSS🌟
I'm excited to share my latest project an Amazon clone built entirely with HTML and CSS!
                </p>
                <a
                  href="https://amazon-website-clone-byabeera.netlify.app/"
                  className="inline-block ml-4 bg-pink-800 text-white px-4 py-2 rounded-lg shadow hover:bg-pink-600 transition duration-300 font-medium"
                >
                 Deployment Link
                </a>
              </div>
            </div>


           {/* Card 7 */}
           <div
              className="bg-gradient-to-r from-pink-300 via-white to-pink-300 shadow-xl rounded-xl overflow-hidden transform transition duration-500 hover:scale-105"
              data-aos="fade-up"
            >
              <Image
                src={require("../../../public/assests/Projects/Youtube.jpg")}
                alt="Portfolio"
                className="w-full h-56 object-cover rounded-t-xl  ease-in-out transform hover:scale-105"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                  Youtube Clone Page
                </h2>
                <p className="text-gray-700 mb-4">
                🎉I’m excited to announce the completion of my YouTube Page Clone Website! 📺  This project has been a fantastic journey, allowing me to dive deep into web development and replicate the core functionalities of YouTube.
                </p>
                <a
                  href="https://youtube-clone-page-websitebyabeera.vercel.app/"
                  className="inline-block ml-4 bg-pink-800 text-white px-4 py-2 rounded-lg shadow hover:bg-pink-600 transition duration-300 font-medium"
                >
                  Deployment Link
                </a>
              </div>
            </div>

            {/* Card 8 */}
            <div
              className="bg-gradient-to-r from-pink-300 via-white to-pink-300 shadow-xl rounded-xl overflow-hidden transform transition duration-500 hover:scale-105"
              data-aos="fade-up"
            >
              <Image
                src={require("../../../public/assests/Projects/static resume builder.jpg")}
                alt="Portfolio"
                className="w-full h-56 object-cover rounded-t-xl  ease-in-out transform hover:scale-105"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                  Hackathone Milestone 1: Static Resume Builder
                </h2>
                <p className="text-gray-700 mb-4">
                I have successfully completed Hackathone Milestones Projects and built ***Static Resume Builder Interactive Resume Builder***
                </p>
                <a
                  href="https://milestone1-static-interactive-resume-byabeera.vercel.app/"
                  className="inline-block ml-4 bg-pink-800 text-white px-4 py-2 rounded-lg shadow hover:bg-pink-600 transition duration-300 font-medium"
                >
                  Deployment Link
                </a>
              </div>
            </div>

            {/* Card 9 */}
            <div
              className="bg-gradient-to-r from-pink-300 via-white to-pink-300 shadow-xl rounded-xl overflow-hidden transform transition duration-500 hover:scale-105"
              data-aos="fade-up"
            >
              <Image
                src={require("../../../public/assests/Projects/dynamic.jpg")}
                alt="Portfolio"
                className="w-full h-56 object-cover rounded-t-xl  ease-in-out transform hover:scale-105"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                Hackathone Milestone 2,3 and 4: Static Resume Builder
                </h2>
                <p className="text-gray-700 mb-4">
                I have successfully completed Hackathone Milestones Projects and built ***Dynamic Interactive Resume Builder,Editable Dynamic Interactive Resume Builder, and also ,Shareable Dynamic Interactive Resume Builder***
                </p>
                <a
                  href="https://abeera-khalid-milestone5-shareable-dynamic-resume-builder.vercel.app/"
                  
                  className="inline-block ml-4 bg-pink-800 text-white px-4 py-2 rounded-lg shadow hover:bg-pink-600 transition duration-300 font-medium"
                >
                  Deployment Link
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default HtmlProjects;
