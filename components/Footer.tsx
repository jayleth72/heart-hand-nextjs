import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BsList, BsX } from "react-icons/bs";
import socialIcons from "./constants/social-icons";
import links from "./constants/links";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black mt-auto py-8 text-center text-white">
      <div className="links mb-5">
        {links.map((item, index) => {
          return (
            <Link
              key={index}
              className="inline-block text-decoration-none uppercase text-white hover:text-primaryColor font-bold mx-2"
              href={item.path}
            >
              {item.text}
            </Link>
          );
        })}
      </div>
      <div className="icons mb-5">
        {socialIcons.map((item, index) => {
          return (
            <Link
              key={index}
              className="inline-block mr-4"
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="cursor-pointer text-gray-400 hover:text-[color:var(--hover-color)] ease-in-out duration-300">
                {item.icon}
              </div>
            </Link>
          );
        })}
      </div>
      <p className="text-transform-capitalize tracking-wider leading-8">
        © {new Date().getFullYear()} Garden Homeschooling. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
