"use client";
import Link from "next/link";
import React from "react";

import { workExp, educationDetails } from "@/assets/constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div
      id="experience"
      className=" bg-secondary paddingX min-h-screen py-12"
    >
      <h1 className="font-bold uppercase tracking-[15px] text-white opacity-80 ">
        Work Experience
      </h1>

      <motion.div
        initial={{ y: "200px", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.25 }}
        className="px-2 pt-16 flex  w-full items-center flex-row  gap-9  justify-between overflow-auto"
      >
        {workExp.map((work) => (
          <div
            key={work.company}
            className="text-white   min-w-[350px] sm:min-w-[430px] shadow1  bg-primary my-6 rounded-2xl px-5 py-5"
          >
            <div className="min-h-[195px] flex flex-col justify-between ">
              <div className=" opacity-70 tracking-widest text-xs flex justify-between">
                <span className=" uppercase">
                  {work.startYear} - {work.endYear}
                </span>
                <span className="uppercase font-bold">
                  <Link href={work.companyLink}>{work.company}</Link>
                </span>
              </div>
              <p className="text-[#00adb5] font-semibold uppercase text-sm tracking-[6px]">
                {work.role}
              </p>
              <p className="opacity-80">{work.roleDescription}</p>
            </div>
          </div>
        ))}
      </motion.div>
      <h1 className="mt-16 font-bold uppercase tracking-[15px] text-white opacity-80 ">
        Education
      </h1>
      <motion.div
        initial={{ y: "200px", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.25 }}
        className="px-2 pt-16 flex  w-full items-center flex-row  gap-9  justify-between overflow-auto"
      >
        {educationDetails.map((item) => (
          <div
            key={item.name}
            className="text-white   min-w-[350px] sm:min-w-[430px] shadow1  bg-primary my-6 rounded-2xl px-5 py-5"
          >
            <div className="min-h-[195px] flex flex-col justify-between ">
              <div className=" font-bold tracking-widest text-xs flex justify-between">
                <span className=" opacity-75 uppercase">
                  {item.startYear} - {item.endYear}
                </span>
                <span className="uppercase font-bold text-[#00adb5]">
                  {item.courseName} / {item.branchName}
                </span>
              </div>
              <p className=" opacity-90 font-semibold uppercase text-sm tracking-[6px] leading-8">
                {item.name}
              </p>
              <p className="opacity-80">CGPA : {item.cgpa}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
