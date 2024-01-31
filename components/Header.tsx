import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BsList, BsX } from "react-icons/bs";
import socialIcons from "./constants/social-icons";
import links from "./constants/links";

const styles = {
  navLinks:
    "ml-10 border-b border-white hover:border-[var(--hover-color)] text-xl",
};

function Header() {
  return (
    <header>
      <nav className="w-full h-24 shadow-xl bg-black">
        {/* {desktop menu} */}
        <div className="flex items-center justify-between h-full px-4 w-full">
          <Link href="/">
            <Image
              src="/images/hhlogo-white.png"
              alt="lgog image"
              width={400}
              height={150}
              className="cursor-pointer"
            />
          </Link>

          {/* {larger screen menu} */}
          <div className="text-white hidden sm:flex">
            <ul className="hidden sm:flex">
              {links.map((item, index) => {
                return (
                  <li className={styles.navLinks} key={index}>
                    <Link href={item.path}>{item.text}</Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* {mobile menu} */}
          <div className="sm:hidden cursor-pointer pl-24">
            <BsList className="h-8 w-8 text-[#FF5733]" />

            <div className="fixed top-0 left-0 w-[75%] sm-hidden h-screen bg-[#ecf0f3] p-10 ease-in-out duration-500">
              <div className="flex w-full items-center justify-end">
                <div className="cursor-pointer">
                  <BsX className="h-8 w-8 text-[color:var(--hover-color)]" />
                </div>
              </div>
              {/* Mobile Menu Links */}
              <div className="flex-col py-4">
                <ul>
                  {links.map((item, index) => {
                    return (
                      <li
                        className="py-4 hover:underline hover:decoration-[var(--hover-color)]"
                        key={index}
                      >
                        <Link href={item.path}>{item.text}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* {social media links} */}
              <div className="flex flex-row justify-around pt-10 items-center">
                {socialIcons.map((item, index) => {
                  return (
                    <Link
                      key={index}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="cursor-pointer hover:text-[color:var(--hover-color)] ease-in-out duration-300">
                        {item.icon}
                      </div>
                    </Link>
                  );
                })}
              </div>
              <Image
                src="/images/hhlogo-white.png"
                alt="lgog image"
                width={205}
                height={75}
                className="cursor-pointer pt-10 mx-auto"
              />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
