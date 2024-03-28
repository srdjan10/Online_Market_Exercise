import React from "react";
import pic1 from "../pages/images/online1.png";
import logo from "../pages/images/VTL_Development--.png";
import { motion as m } from "framer-motion";

const About = () => {
  const myDate = new Date().getFullYear();

  return (
    <m.div
      initial={{ scale: 0 }}
      animate={{ rotate: 360, scale: 1 }}
      transition={{
        type: "keyframes",
        stiffness: 260,
        damping: 10,
      }}
    >
      <header class="text-center text-4xl font-scadaItalic bg-gradient-to-l from-[#242b35] text-gray-200 h-24 p-6 rounded-lg">
        About us
      </header>
      <hr></hr>
      <div class="max-w-full mx-auto bg-white shadow-md overflow-hidden md:max-w-full content-center mb-12">
        <div class="md:flex">
          <div class="md:shrink-0">
            <img
              class="h-48 w-full object-cover md:h-full md:w-60 rounded-md"
              src={pic1}
              alt="onlinemarket"
            />
          </div>
          <div class="p-8">
            <p class="mt-2 text-slate-900 text-justify">
              The About Us page of your website is an essential source of
              information for all who want to know more about your business.
              About Us pages are where you showcase your history, what is unique
              about your work, your company’s values, and who you serve. The
              design, written content, and visual or video elements together
              tell an important story about who you are and why you do it.
            </p>
          </div>
        </div>
      </div>
      <div class="max-w-full mx-auto bg-white shadow-md overflow-hidden md:max-w-full content-center mb-12">
        <div class="md:flex">
          <div class="p-8">
            <p class="mt-2 text-slate-900text-justify">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
          </div>
          <div class="md:shrink-0">
            <img
              class="h-48 w-full object-cover md:h-full md:w-48 rounded-md"
              src={pic1}
              alt="onlinemarket"
            />
          </div>
        </div>
      </div>
      <div class="max-w-full mx-auto bg-white shadow-md overflow-hidden md:max-w-full content-center mb-12">
        <div class="md:flex">
          <div class="md:shrink-0">
            <img
              class="h-48 w-full object-cover md:h-full md:w-48 rounded-md"
              src={pic1}
              alt="onlinemarket"
            />
          </div>
          <div class="p-8">
            <p class="mt-2 text-slate-900 text-justify">
              The About Us page of your website is an essential source of
              information for all who want to know more about your business.
              About Us pages are where you showcase your history, what is unique
              about your work, your company’s values, and who you serve. The
              design, written content, and visual or video elements together
              tell an important story about who you are and why you do it.
            </p>
          </div>
        </div>
      </div>
      <div class="max-w-full mx-auto bg-white shadow-md overflow-hidden md:max-w-full content-center mb-12">
        <div class="md:flex">
          <div class="p-8">
            <p class="mt-2 text-slate-900 text-justify">
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system, and expound the actual teachings of the
              great explorer of the truth, the master-builder of human
              happiness. No one rejects, dislikes, or avoids pleasure itself,
              because it is pleasure, but because those who do not know how to
              pursue pleasure rationally encounter consequences that are
              extremely painful. Nor again is there anyone who loves or pursues
              or desires to obtain pain of itself, because it is pain, but
              because occasionally circumstances occur in which toil and pain
              can procure him some great pleasure. To take a trivial example,
              which of us ever undertakes laborious physical exercise, except to
              obtain some advantage from it? But who has any right to find fault
              with a man who chooses to enjoy a pleasure that has no annoying
              consequences, or one who avoids a pain that produces no resultant
              pleasure?"
            </p>
          </div>
          <div class="md:shrink-0">
            <img
              class="h-48 w-full object-cover md:h-full md:w-48 rounded-md"
              src={pic1}
              alt="onlinemarket"
            />
          </div>
        </div>
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
export default About;
