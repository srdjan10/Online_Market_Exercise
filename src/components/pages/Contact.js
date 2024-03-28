import React, { useRef, useState } from "react";
import logo from "../pages/images/VTL_Development--.png";
import emailjs from "@emailjs/browser";
import { motion as m } from "framer-motion";

const Contact = () => {
  const myDate = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [emptyEmail, setEmptyEmail] = useState("");
  const [emptyTitle, setEmptyTitle] = useState("");
  const [emptyComment, setEmptyComment] = useState("");
  const form = useRef();

  const sendMailhandle = (e) => {
    e.preventDefault();
    const obj = {
      email,
      title,
      comment,
    };

    if (email === "" && title === "" && comment === "") {
      setEmptyEmail(true);
      setEmptyComment(true);
      setEmptyTitle(true);
    }

    localStorage.setItem("user", JSON.stringify(obj));
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);

    emailjs
      .sendForm(
        "service_o4khhsa",
        "template_46kdqgl",
        form.current,
        "w7J_VYxupwF1nmLrS"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
          console.log("message not sent");
        }
      );
    setComment("");
    setEmail("");
    setTitle("");
  };

  return (
    <m.div
      initial={{ scale: 0 }}
      animate={{ rotate: 360, scale: 1 }}
      transition={{
        type: "tween",
        stiffness: 160,
        damping: 20,
      }}
    >
      <header class="text-left text-3xl italic font-extralight bg-gradient-to-l from-[#242b35] text-slate-800 h-12 rounded-sm"></header>
      <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-tahiti dark:text-white">
          Contact
        </h2>
        <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Contact us about online market and about our product...thank you
        </p>
        <form class="space-y-8" onSubmit={sendMailhandle} ref={form}>
          <div>
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="test@test.com"
              required
              name="from_name"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label
              for="subject"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Title
            </label>
            <input
              type="text"
              id="subject"
              class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Write title..."
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              name="to_title"
            />
          </div>
          <div class="sm:col-span-2">
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Message
            </label>
            <textarea
              required
              id="message"
              rows="6"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Write message..."
              name="message"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </div>
          <button
            type="submit"
            class="py-3 px-5 text-sm bg-slate-500 font-medium text-center text-white rounded-lg bg-tahiti sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Send message
          </button>
        </form>
      </div>
      <footer class="text-right text-sm italic font-extralight bg-gradient-to-l from-[#242b35] text-gray-200 h-12 rounded-sm">
        © Copyright {myDate} VTL DEVELOPMENT
        <img
          class="h-14 w-16 ml-auto mr-auto -mt-6"
          src={logo}
          alt="logo"
        ></img>
      </footer>
    </m.div>
  );
};
export default Contact;
