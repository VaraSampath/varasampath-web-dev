"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { AiOutlineWhatsApp } from "react-icons/ai";
import Link from "next/link";

interface modelProps {
  message: string;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const Modal = ({ message, setModalOpen }: modelProps) => (
  <div className=" absolute z-50 h-screen w-full bg-black bg-opacity-75 flex justify-center items-center ">
    <div className="text-white w-[300px] h-[200px] bg-secondary flex flex-col justify-between p-5 text-center rounded-xl">
      <h1 className=" ">{message} ✅</h1>
      <p className="">Thank you for reaching out to me ! 🙇</p>
      <button
        className="border-2 px-5 py-1 self-center "
        onClick={() => setModalOpen(false)}
      >
        Close
      </button>
    </div>
  </div>
);
export const Contact = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const form = useRef();

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const email = document.getElementById("mailInput");

    if (
      email.value === "" ||
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)
    ) {
      email?.focus();
      alert("Enter Valid Email please :)");
      return null;
    }

    emailjs
      .sendForm(
        "service_n9ve30m",
        "template_j551u6d",

        form.current,
        "Z7S8TAwmf4mMa7HVj"
      )
      .then(
        (result) => {
          setModalOpen(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      {modalOpen && (
        <Modal
          message="Sent Successfully"
          setModalOpen={setModalOpen}
        />
      )}
      <div
        id="contact"
        className="bg-secondary min-h-screen paddingX py-8 "
      >
        <h1 className="font-bold uppercase tracking-[15px] text-white opacity-80">
          Contact
        </h1>
        <div className="flex justify-between flex-col lg:flex-row gap-8">
          <div className="flex-1 w-full m-auto ">
            <form
              className="my-9"
              ref={form}
              onSubmit={sendEmail}
            >
              <label>Name</label>
              <input
                type="text"
                name="user_name"
              />
              <label>Email</label>
              <input
                id="mailInput"
                type="email"
                name="user_email"
              />
              <label>Message</label>
              <textarea
                name="message"
                className="w-full max-w-[500px] pl-2"
              />
              <br />
              <button
                type="submit"
                className="border-2 text-white hover:bg-[#00f2ff] hover:text-black my-6 py-2 w-full max-w-[500px] "
                value="Send"
              >
                SEND
              </button>
            </form>
          </div>
          <div className="flex-1 w-full m-auto shadow1 max-w-[500px] pb-4 overflow-hidden rounded-xl flex flex-col gap-8">
            <img
              src="/handshake.jpg"
              alt="img"
              className="w-100"
            />

            <div className="px-4 text-white flex flex-col gap-5">
              <h1 className=" font-bold opacity-80 text-2xl ">
                Varasampath Borra
              </h1>
              <p className="text-xl">
                I am available for freelance work or full time job. Connect with
                me : )
              </p>
              <Link
                href="https://wa.me/919603178894"
                target="_blank"
              >
                <AiOutlineWhatsApp className=" text-3xl ml-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
