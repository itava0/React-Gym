'use client';

import { useState } from 'react';
import Image from 'next/image'
import NavList from './NavList';
import HamburgerList from './HamburgerList';
import Link from 'next/link';
import Logo from '../../public/logo.svg';

const Navbar = () =>  {
  const [spin, setSpin] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const joinSpin = () => {
    setSpin(true);
  };

  const stopSpin = () => {
    setSpin(false);
  };

  // sticky navbar - bg black
  const handleScroll = () => {
    if (window.scrollY > 10) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  return (
    <>
      <nav
        className={`flex flex-row justify-between shadow-xl !bg-black items-center py-8 px-12 fixed top-0 left-0 right-0 w-full z-50 ${
          sticky ? 'shadow-xl !bg-black' : ''
        }`}
      >
        <Link href="/" className=" white w-48 hamburger-logo">
          <Image src={Logo} alt="logo_img" className=" h-auto" />
        </Link>
        <section className="flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <HamburgerList />
          </div>
        </section>
        <div className="navlist-nav">
          <NavList />
        </div>
        {/* Sign up */}
        <div className=" border-[rgb(255,255,255,0.3)] border-solid border-2  p-2 rounded-md signup-bt">
          <Link
            href="/signup"
            onMouseEnter={joinSpin}
            onMouseLeave={stopSpin}
            className="flex items-center "
          >
            <i
              className={`bg-[#FF0336] text-white text-2xl py-3 px-4 rounded-md ${
                spin ? 'nav-btn-hover' : ''
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </i>
            <h3 className="text-white text-[14px] font-bold uppercase ml-4 mr-8 tracking-wider">
              join now
            </h3>
          </Link>
        </div>
        </nav>
    </>
  );
}

export default Navbar;