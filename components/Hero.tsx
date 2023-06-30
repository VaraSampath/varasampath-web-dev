"use client";

import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion, stagger } from "framer-motion";
import {
  AiOutlineLinkedin,
  AiFillGithub,
  AiOutlineWhatsApp,
} from "react-icons/ai";

import Link from "next/link";
import { slideIn, staggerContainer, textVariant } from "@/assets/motion";

const words = ["Frontend.", "Backend.", "Full Stack."];

const Hero = () => {
  return (
    <div
      id="about"
      className="bg-primary flex justify-between max-lg:flex-col items-center pt-[76px] w-full relative min-h-screen  px-6 sm:pl-16   "
    >
      <motion.div
        variants={textVariant(0.5)}
        initial="hidden"
        whileInView="show"
        transition={{ delay: 1 }}
        className="xs:mb-6 sm:mb-0  py-8 flex-1 text-white"
      >
        <h1 className=" font-bold text-2xl tracking-widest">
          WELCOME TO MY WEBSITE
        </h1>
        <h1 className=" mt-4  font-bold  text-4xl sm:text-6xl">
          Hi, I’m
          <span className=""> Varasampath </span>
        </h1>
        <p className="text-2xl my-8 font-bold">
          A passionate Web Dev with
          <br className="sm:hidden" /> a love for{" "}
          <span className="text-[#00f2ff]  font-extrabold">
            <Typewriter
              words={words}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </p>
        <p className="my-5">CONNECT WITH ME</p>
        <div className="flex justify-between max-sm:flex-col gap-8">
          <div className="flex gap-4">
            <div className="flex justify-center items-center shadow1 w-[60px] h-[60px] ">
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/varasampath-borra/"
              >
                <AiOutlineLinkedin className=" text-[30px]" />
              </Link>
            </div>
            <div className="flex justify-center items-center shadow1 w-[60px] h-[60px] ">
              <Link
                target="_blank"
                href="https://github.com/VaraSampath"
              >
                <AiFillGithub className=" text-[30px]" />
              </Link>
            </div>
            <div className="flex justify-center items-center shadow1 w-[60px] h-[60px] ">
              <Link
                target="_blank"
                href="https://wa.me/919603178894"
              >
                <AiOutlineWhatsApp className=" text-[30px]" />
              </Link>
            </div>
          </div>
          <div>
            <button className="custom-btn rounded-2xl">
              <Link href="#">Download Resume</Link>
            </button>
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={staggerContainer(0.5, 1)}
        initial="hidden"
        whileInView="show"
        className=" relative max-sm:w-full flex-1 py-6"
      >
        <motion.img
          variants={slideIn("right", "tween", 0.5, 0.25)}
          src="/hero.jpg"
          alt="hero"
          width="300"
          height="450"
          className="relative shadow1 z-1 object-contain m-auto sm:ml-auto rounded-xl "
        />

        <motion.div
          variants={slideIn("right", "spring", 0.9, 0.5)}
          className="absolute top-0 left-0 md:-left-28  lg:left-24 z-10 flex flex-col justify-evenly items-end h-[100%]"
        >
          <div className="shadow1 w-[60px] h-[60px] rounded-full flex justify-center items-center">
            <img
              src="/html.png"
              height={30}
              width={30}
              alt="html"
              className="object-contain"
            />
          </div>
          <div className="shadow1 w-[100px] h-[100px] rounded-full flex justify-center items-center ">
            <motion.img
              animate={{ rotate: [0, 180] }}
              transition={{
                type: "ease in",
                duration: 2,

                repeat: Infinity,
                delay: 1.5,
              }}
              src="/react.png"
              height={45}
              width={45}
              alt="html"
              className="object-contain"
            />
          </div>
          <div className=" shadow1  w-[60px] h-[60px] rounded-full flex justify-center items-center ">
            <img
              src="/js.png"
              height={30}
              width={30}
              alt="html"
              className="object-contain"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
