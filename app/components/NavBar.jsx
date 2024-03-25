"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LoginBtn from "../components/LoginBtn";

const NavBar = () => {
  const [click, setClick] = useState(false);

  const toggle = () => {
    setClick(!click);
  };

  return (
    <header className="w-full p-4 justify-between sm:px-10 flex items-center ">
      {/* Logo */}
      <Link href="/">
        <h2 className="text-2xl text-cyan-600 font-bold ">
          <Image src="/FCNews.svg" width={100} height={100} alt="logo" />
        </h2>
      </Link>

      {/* Botão Menu Hamburguer */}
      <button
        className="inline-block sm:hidden z-50"
        onClick={toggle}
        aria-label="Hamburger Menu"
      >
        <div className="w-6 mr-2  cursor-pointer transition-all ease duration-300">
          <div className="relative">
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-black rounded transition-all ease duration-200"
              style={{
                transform: click
                  ? "rotate(-45deg) translateY(0)"
                  : "rotate(0deg) translateY(6px)",
              }}
            >
              &nbsp;
            </span>
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-black rounded transition-all ease duration-200"
              style={{
                opacity: click ? 0 : 1,
              }}
            >
              &nbsp;
            </span>
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-black rounded transition-all ease duration-200"
              style={{
                transform: click
                  ? "rotate(45deg) translateY(0)"
                  : "rotate(0deg) translateY(-6px)",
              }}
            >
              &nbsp;
            </span>
          </div>
        </div>
      </button>

      {/* Navegação Mobile */}
      <nav
        className=" w-max py-3 px-6 sm:px-8 border border-solid border-dark rounded-full font-medium capitalize  items-center flex  sm:hidden
        fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50
        transition-all ease duration-300
        "
        style={{
          top: click ? "1rem" : "-5rem",
        }}
      >
        <div className="px-2">
          <LoginBtn />
        </div>

        <Link href="/" className="mr-2">
          Home
        </Link>
        <Link href="/sobre" className="mx-2">
          Sobre
        </Link>
        <Link href="/tags" className="mx-2">
          Tags
        </Link>
      </nav>

      {/* Navegação normal */}
      <div className="flex w-full justify-end capitalize items-center hidden sm:flex">
        <nav className="font-medium capitalize flex justify-center align-center">
          <div className="mr-2 ">
            <LoginBtn />
          </div>
          <Link href="/" className="mr-2 pt-1">
            Home
          </Link>
          <Link href="/sobre" className="mx-2 pt-1">
            Sobre
          </Link>
          <Link href="/tags" className="mx-2 pt-1">
            Tags
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
