import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div id="about">
      <section className="text-gray-600 body-font bg-gradient-to-r from-white via-cyan-200 to-slate-100 font-serif">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-style: italic font-bold text-center text-cyan-900  font-serif underline underline-offset-1 ...">
              About me
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="mb-5 leading-relaxed font-medium text-slate-700">
              👋 Hello! <b><i>I am Abeera-Muhammad-Khalid.</i></b> I am a passionate Frontend,
              Backend and WordPress Webdeveloper with a strong focus on creating
              dynamic and user friendly Web applications.My expertise enables me
              to craft efficient solutions and develop something thats are
              helpful for Everyone.I have already built responsive designs that
              deliver seamless user experiences across all the world. My journey
              into the world of technology has been driven by curiosity and a
              desire to create some special and interactive designs.
              As a Teacher,HomeTutor and Online Tutor, I support and encourage students by
              simplifying difficult concepts and developing a deeper
              understanding of modern technology, finding opportunities
              to use my passion, knowledge and passion to meet their 
              educational needs and prepare them for today's world. 
            </p>

            <p className="mb-5 leading-relaxed font-medium text-slate-700">
              With a solid foundations in a frontend and backend technologies
              like <b> HTML, CSS, Javascript,Typescript, Jquery, PHP, and with the
              framework Next.js technology e.t.c.</b> I have highly skilled and
              versatile technology Professional and honed my skillsets and also
              pursuing my skill to Generative Metaverse Artificial
              Intelligence(AI) Specialist. I'm constantly discovering new
              concepts, tools, and technologies. 
              {/* with
      expertise in Web development, WordPress Website development , FullStack development,And OfficeAutomation 
      expert especially(MS Word e.t.c) and Quran Teaching. */}
            </p>

            <p className="mb-5 leading-relaxed font-medium text-slate-700">
              My goal is to bring innovative ideas to life through compeling and
              functional web applications. I am always eager to learn, grow and
              take on new challenges and new projects.This portfolio showcases
              my projects, highlighting my enthusiasm and dedication to my
              successful growth. Join me and let's explore the possibilities and
              create something amazing or exceptional together..
            </p>
           
            <span className="text-black font-serif">Phone #:</span>
            <p className="mb-5 leading-relaxed font-serif text-blue-500 hover:underline cursor-pointer ">
              +923242744900
            </p>
            <span className="text-black font-serif">Email:</span>
            <p className="mb-5 leading-relaxed font-serif text-blue-500 hover:underline cursor-pointer">
              abeera-m-khalid@outlook.com
            </p>
            <div className="flex justify-center">
              <Link href={"/assests/CV/AbeeraCV.pdf"}>
                <button className="inline-flex text-white bg-cyan-900 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-700 rounded text-lg">
                  View CV...
                </button>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 mx-auto w-[300px] h-[400px]">
            <Image
              className="object-cover object-center rounded mx-auto"
              alt="hero"
              src={require("../../../public/assests/Projects/about group image.jpg")}
              width={510}
              height={490}
            />
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;

{
  /* <div class="container mx-auto flex flex-col md:flex-row items-center px-5 py-8 md:py-24">
  <div class="lg:w-1/2 mb-10 md:mb-0"><img alt="hero" loading="lazy" width="510" height="490" decoding="async" data-nimg="1" class="mx-auto w-[700px] h-[590px] 
  rounded-full" style="color:transparent" srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdigital_girl_pic.170af669.jpg&amp;w=640&amp;q=75 1x,  */
}
