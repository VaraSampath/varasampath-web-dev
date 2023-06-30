"use client";
import Image from "next/image";
import navLinks from "@/assets/navLinks";
import Link from "next/link";
import { MdOutlineLegendToggle } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineContacts, AiOutlineProject } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import { GiSwordsPower } from "react-icons/gi";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <motion.div
      initial={{ y: "-100%", opacity: 0 }}
      animate={{ y: "0", opacity: 1 }}
      transition={{ delay: 1.6 }}
      className=" border-b-[#00adb5] border-b-2 fixed z-20 paddingX paddingY flex justify-between items-center w-full bg-primary"
    >
      <Link href="/">
        <img
          src="/logo.png"
          alt="logo"
          className="object-contain h-[50px] w-[50px]"
        />
      </Link>
      <div className=" hidden sm:flex items-center gap-6 sm:gap-16">
        {navLinks.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            scroll={false}
            className=" text-white"
          >
            <div className="flex gap-1 capitalize hover:text-[#00adb5]">
              <motion.span
                whileHover={{ scale: 1.2 }}
                className=" font-medium text-lg flex gap-3 items-center"
              >
                {link.title === "about" ? (
                  <BsPersonCircle />
                ) : link.title === "experience" ? (
                  <GiSwordsPower />
                ) : link.title === "projects" ? (
                  <AiOutlineProject />
                ) : link.title === "contact" ? (
                  <AiOutlineContacts />
                ) : null}
                {link.title}
              </motion.span>
            </div>
          </Link>
        ))}
      </div>
      <div className=" sm:hidden">
        <button
          className=" text-3xl"
          onClick={() => setToggle(!toggle)}
        >
          {!toggle ? (
            <MdOutlineLegendToggle className="text-white" />
          ) : (
            <RxCross2 className="text-white" />
          )}
        </button>
      </div>
      {toggle && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          className=" absolute rounded-bl-xl z-20 right-0 py-[20px]  top-[74px] flex flex-col gap-4 bg-primary border-l-2 border-b-2 border-[#00adb5] px-11"
        >
          {navLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className=" text-white"
              onClick={() => setToggle(false)}
            >
              <div className="flex gap-1 capitalize hover:text-[#00adb5]">
                <motion.span
                  whileHover={{ scale: 1.2 }}
                  className=" font-medium text-lg flex items-center gap-4 "
                >
                  {link.title === "about" ? (
                    <BsPersonCircle />
                  ) : link.title === "experience" ? (
                    <GiSwordsPower />
                  ) : link.title === "projects" ? (
                    <AiOutlineProject />
                  ) : link.title === "contact" ? (
                    <AiOutlineContacts />
                  ) : null}
                  {link.title}
                </motion.span>
              </div>
            </Link>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

export default Navbar;
