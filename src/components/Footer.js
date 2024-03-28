import React, { useState } from "react";
import { FaHeadphones } from "react-icons/fa6";

const Footer = ({ props }) => {
  const myDate = new Date().getFullYear();

  return (
    <div>
      <footer>
        <div class="flex flex-wrap justify-between bg-gradient-to-l items-center px-4 py-4 from-indigo-500 font-extralight">
          <ul class="flex flex-wrap justify-end  mt-3 text-sm font-extralight from-indigo-600 sm:mt-0">
            {props.map((link) => (
              <li class="hover:text-blue-300 me-4 md:me-6 cursor-pointer">
                <a
                  href={link.link}
                  class="hover:text-red-600 me-4 md:me-6 duration-300 font-pop"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>{" "}
          <p class="text-xs ml-auto justify-center text-white">
            <FaHeadphones /> call centar: 0800-122-221
          </p>
          <p class="text-xs ml-auto justify-center text-white">
            © Copyright {myDate} VTL DEVELOPMENT
          </p>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
